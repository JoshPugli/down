import db from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserByEmail(email: string) {
  if (!email) {
    return null;
  }

  try {
    const user = await db.query.usersTable.findFirst({
      where: eq(usersTable.email, email),
    });

    return user;
  } catch (error) {
    console.error("Error getting user by email:", error);
    throw new Error("Failed to get user");
  }
}
