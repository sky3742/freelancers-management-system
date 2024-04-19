import dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({
	path: ".env"
});

export default {
	schema: "./src/data/db/schemas/*",
	out: "./drizzle",
	driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
	dbCredentials: {
		connectionString: process.env.POSTGRES_URL,
		host: process.env.POSTGRES_HOST!,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DATABASE!,
		ssl: true
	}
} satisfies Config;
