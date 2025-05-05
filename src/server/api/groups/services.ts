import db from '@/db';
import { groups, usersToGroups } from '@/db/models';
import { eq, desc } from 'drizzle-orm';

// export async function createGroupForUser(userId: string) {

// }

export async function getGroupsForUser(userId: string) {
  const userGroups = await db
    .select({
      id: groups.id,
      name: groups.name,
      icon: groups.icon,
      description: groups.description,
      createdAt: groups.createdAt,
      updatedAt: groups.updatedAt,
    })
    .from(groups)
    .innerJoin(usersToGroups, eq(groups.id, usersToGroups.groupId))
    .where(eq(usersToGroups.userId, userId))
    .orderBy(desc(groups.updatedAt));

  return userGroups;
}
