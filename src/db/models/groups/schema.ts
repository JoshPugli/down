/* 
Group table
- Many to many relationship with users
- Name
- Icon
- Optional Description
*/
import { pgSchema, text } from 'drizzle-orm/pg-core';
import { timestamps } from '../common/mixins';
import { uuidPrimaryKey } from '../common/columns';

const schema = pgSchema('groups');

export const groups = schema.table('group', {
  id: uuidPrimaryKey(),
  name: text('name').notNull(),
  icon: text('icon').notNull(),
  description: text('description'),
  ...timestamps,
});
