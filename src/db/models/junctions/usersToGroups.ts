import { pgTable, primaryKey } from "drizzle-orm/pg-core";
import { users } from "../users/schema";
import { groups } from "../groups/schema";
import { uuidForeignKey } from "../common/columns";

export const usersToGroups = pgTable(
  "users_to_groups",
  {
    userId: uuidForeignKey("user_id", () => users),
    groupId: uuidForeignKey("group_id", () => groups),
  },
  (table) => [primaryKey({ columns: [table.userId, table.groupId] })]
);
