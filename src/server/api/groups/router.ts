import { authedProcedure, router } from '@/server/trpc/index';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import db from '@/db';
import { groups, usersToGroups } from '@/db/models';
import { eq, desc } from 'drizzle-orm';

export const createGroupSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(40, 'Name cannot exceed 40 characters'),
  iconEmoji: z.string(),
  iconColor: z.string(),
  description: z.string().optional().nullable(),
});

export const groupRouter = router({
  create: authedProcedure.input(createGroupSchema).mutation(async ({ ctx, input }) => {
    const userId = ctx.user.id;
    if (!userId) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'User ID is required',
      });
    }

    // Use a transaction to ensure both operations succeed
    return await db.transaction(async (tx) => {
      // Create the group
      const [newGroup] = await tx
        .insert(groups)
        .values({
          name: input.name,
          iconEmoji: input.iconEmoji,
          iconColor: input.iconColor,
          description: input.description,
        })
        .returning();

      // Add the current user as a member
      await tx.insert(usersToGroups).values({
        userId: userId,
        groupId: newGroup.id,
      });

      return newGroup;
    });
  }),
  list: authedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user.id;

    if (!userId) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'User ID is required',
      });
    }

    const userGroups = await db
      .select({
        id: groups.id,
        name: groups.name,
        iconEmoji: groups.iconEmoji,
        iconColor: groups.iconColor,
        iconUrl: groups.iconUrl,
        description: groups.description,
        createdAt: groups.createdAt,
        updatedAt: groups.updatedAt,
      })
      .from(groups)
      .innerJoin(usersToGroups, eq(groups.id, usersToGroups.groupId))
      .where(eq(usersToGroups.userId, userId))
      .orderBy(desc(groups.updatedAt));
    return userGroups;
  }),
});
