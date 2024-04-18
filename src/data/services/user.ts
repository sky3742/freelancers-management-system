"use server";

import { DB } from "@/data/db";
import { Users } from "@/data/db/schemas/users";
import { User } from "@/data/model/user";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getUsers = async () => {
	const users = await DB.select().from(Users);
	return users.map<User>((value) => ({
		...value,
		skillsets: value.skillsets || "",
		hobby: value.hobby || "",
		createdAt: new Date(value.createdAt),
		updatedAt: new Date(value.updatedAt)
	}));
};

export const createUser = async (user: User) => {
	await DB.insert(Users).values({
		username: user.username,
		mail: user.mail,
		phoneNumber: user.phoneNumber,
		skillsets: user.skillsets,
		hobby: user.hobby
	});

	revalidatePath("/");
};

export const updateUser = async (user: User) => {
	await DB.update(Users)
		.set({
			username: user.username,
			mail: user.mail,
			phoneNumber: user.phoneNumber,
			skillsets: user.skillsets,
			hobby: user.hobby
		})
		.where(eq(Users.id, user.id!));

	revalidatePath("/");
};

export const deleteUser = async (user: User) => {
	await DB.delete(Users).where(eq(Users.id, user.id!));

	revalidatePath("/");
};
