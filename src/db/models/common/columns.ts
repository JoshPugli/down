import { text } from 'drizzle-orm/pg-core';
import { UUID } from './types';

/*
Oauth expects this ID form. Use cross tables because:
    - Same data type across tables simplifies joins, typing
    - UUIDs can be generated client-side or anywhere — great for serverless, queues, etc
    - Works well with distributed systems, multi-region databases, etc.
*/
export const uuidPrimaryKey = (name: string = 'id') =>
  text(name)
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID() as UUID);
