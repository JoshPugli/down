ALTER TABLE "group" RENAME COLUMN "icon" TO "icon_url";--> statement-breakpoint
ALTER TABLE "group" ADD COLUMN "icon_emoji" text;--> statement-breakpoint
ALTER TABLE "group" ADD COLUMN "icon_color" text;