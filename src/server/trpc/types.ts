import { createContext } from './context';

export type Context = Awaited<ReturnType<typeof createContext>>;

export type AuthedContext = Omit<Context, 'session'> & {
  user: NonNullable<NonNullable<Context['session']>['user']>;
};
