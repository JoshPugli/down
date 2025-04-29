import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./schema";

// const db = drizzle(process.env.DATABASE_URL!);
const db = drizzle(process.env.DATABASE_URL!, {
  schema: { usersTable },
});

export default db;
