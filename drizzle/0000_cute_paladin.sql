CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(255) NOT NULL,
	"mail" varchar(255) NOT NULL,
	"phone_number" varchar(255) NOT NULL,
	"skillsets" text DEFAULT '',
	"hobby" text DEFAULT '',
	"created_at" date DEFAULT now() NOT NULL,
	"updated_at" date DEFAULT now() NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_mail_unique" UNIQUE("mail"),
	CONSTRAINT "users_phone_number_unique" UNIQUE("phone_number")
);
