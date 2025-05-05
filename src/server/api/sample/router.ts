import { publicProcedure, router } from '@/server/trpc/index';

export const sampleRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
});
