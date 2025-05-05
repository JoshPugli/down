import { pgTable, primaryKey, text } from 'drizzle-orm/pg-core';
import { users } from '../users/schema';
import { groups } from '../groups/schema';
import { relations } from 'drizzle-orm';

export const usersToGroups = pgTable(
  'users_to_groups',
  {
    userId: text('user_id')
      .notNull()
      .references(() => users.id),
    groupId: text('group_id')
      .notNull()
      .references(() => groups.id),
  },
  (t) => [primaryKey({ columns: [t.userId, t.groupId] })]
);

export const usersToGroupsRelations = relations(usersToGroups, ({ one }) => ({
  group: one(groups, {
    fields: [usersToGroups.groupId],
    references: [groups.id],
  }),
  user: one(users, {
    fields: [usersToGroups.userId],
    references: [users.id],
  }),
}));
