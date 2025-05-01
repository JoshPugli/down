import { relations } from 'drizzle-orm';
import { users } from './schema';
import { usersToGroups } from '../junctions/usersToGroups';

// Many-to-many with groups
export const usersRelations = relations(users, ({ many }) => ({
  usersToGroups: many(usersToGroups),
}));
