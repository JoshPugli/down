import { initTRPC } from '@trpc/server';
import { auth } from '@/auth';
import db from '@/db';
import { Context } from './types';

// Create context for your tRPC procedures
export const createContext = async () => {
  const session = await auth();

  return {
    session,
    db,
  };
};

// Initialize tRPC with the context
export const t = initTRPC.context<Context>().create();

// Export the router builder
export const router = t.router;
