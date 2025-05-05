import { authedProcedure, router } from '@/server/trpc/index';
import { TRPCError } from '@trpc/server';
import { getGroupsForUser } from './services';

export const groupRouter = router({
  //   create: authedProcedure.mutation( async ({ctx}) => {
  //     const userId = ctx.user.id;

  //   }),
  list: authedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user.id;

    if (!userId) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'User ID is required',
      });
    }

    const userGroups = await getGroupsForUser(userId);
    return userGroups;
  }),
});
