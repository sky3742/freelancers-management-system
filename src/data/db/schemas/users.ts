import { date, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
	id: uuid("id").primaryKey().defaultRandom().notNull(),
	username: varchar("username", { length: 255 }).unique().notNull(),
	mail: varchar("mail", { length: 255 }).unique().notNull(),
	phoneNumber: varchar("phone_number", { length: 255 }).unique().notNull(),
	skillsets: text("skillsets").default(""),
	hobby: text("hobby").default(""),
	createdAt: date("created_at").defaultNow().notNull(),
	updatedAt: date("updated_at").defaultNow().notNull()
});
