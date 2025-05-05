import { createContext } from '@/server/trpc';
import { appRouter } from '@/server/api/index';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) =>
  fetchRequestHandler({
    router: appRouter,
    req,
    endpoint: '/api/trpc',
    createContext: createContext,
  });

export { handler as GET, handler as POST };
