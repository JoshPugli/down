CREATE TABLE "groups"."group" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"icon" text NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "public"."account" SET SCHEMA "users";
--> statement-breakpoint
ALTER TABLE "public"."authenticator" SET SCHEMA "users";
--> statement-breakpoint
ALTER TABLE "public"."session" SET SCHEMA "users";
--> statement-breakpoint
ALTER TABLE "public"."user" SET SCHEMA "users";
--> statement-breakpoint
ALTER TABLE "public"."verificationToken" SET SCHEMA "users";
