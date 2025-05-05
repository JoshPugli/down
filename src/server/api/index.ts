// server/api/index.ts
import { sampleRouter } from './sample/router';
import { groupRouter } from './groups/router';
import { router } from '@/server/trpc/index';

/**
 * Main router that combines all sub-routers
 */
export const appRouter = router({
  // Prefix each router with its domain name
  sample: sampleRouter,
  groups: groupRouter,
});

// Export type definition for client usage
export type AppRouter = typeof appRouter;
