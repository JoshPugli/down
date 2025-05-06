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
  iconEmoji: text('icon_emoji'),
  iconColor: text('icon_color'),
  iconUrl: text('icon_url'), // For future custom uploads
  description: text('description'),
  ...timestamps,
});
