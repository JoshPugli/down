import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

// Drizzle ORM runs SQL queries on your database via database drivers.
// Under the hood Drizzle will create a node-postgres driver instance
//  - which you can access via db.$client if necessary
// 

const db = drizzle({
  connection: process.env.DATABASE_URL as string,
  casing: "snake_case",
});

export default db;
