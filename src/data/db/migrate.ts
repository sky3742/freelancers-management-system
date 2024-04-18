import dotenv from "dotenv";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { DB } from ".";

dotenv.config({
	path: ".env.development.local"
});

migrate(DB, { migrationsFolder: "./drizzle" });
