import { relations } from "drizzle-orm";
import { groups } from "../groups/schema";
import { usersToGroups } from "../junctions/usersToGroups";

// Many-to-many with users
export const groupsRelations = relations(groups, ({ many }) => ({
  usersToGroups: many(usersToGroups), 
}));
