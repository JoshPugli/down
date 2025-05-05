import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { groups } from './models/groups/schema';
import { users } from './models/users/schema';
import { usersToGroups } from './models/junctions/usersToGroups';

// Drizzle ORM runs SQL queries on your database via database drivers.
// Under the hood Drizzle will create a node-postgres driver instance
//  - which you can access via db.$client if necessary
//

const db = drizzle({
  connection: process.env.DATABASE_URL as string,
  casing: 'snake_case',
  schema: {
    groups,
    users,
    usersToGroups,
  },
});

export default db;
