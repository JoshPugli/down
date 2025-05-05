import { TRPCError } from '@trpc/server';
import { t } from './context';
import { AuthedContext } from './types';

/**
 * Unprotected procedure - available to all users
 */
export const publicProcedure = t.procedure;

/**
 * Protected procedure - only available to authenticated users
 */
export const authedProcedure = t.procedure.use(function isAuthed(opts) {
  if (!opts.ctx.session?.user?.email) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You must be logged in to access this resource',
    });
  }

  // Modify the context to ensure TypeScript knows session is non-null
  const authedCtx = {
    ...opts.ctx,
    user: opts.ctx.session.user,
  } satisfies AuthedContext;

  return opts.next({
    ctx: authedCtx,
  });
});
