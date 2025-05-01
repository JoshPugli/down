/* 
Group table
- Many to many relationship with users
- Name
- Icon
- Optional Description
*/
import { pgTable, text } from 'drizzle-orm/pg-core';
import { timestamps } from '../common/mixins';
import { uuidPrimaryKey } from '../common/columns';

export const groups = pgTable('group', {
  id: uuidPrimaryKey(),
  name: text('name').notNull(),
  icon: text('icon').notNull(),
  description: text('description'),
  ...timestamps,
});
