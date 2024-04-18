"use client";

import { UserTable } from "@/components/users";
import { User } from "@/data/model/user";
import { users } from "@/data/services/user";

export default function Page() {
	const handleCreateUser = (user: User) => {};
	const handleEditUser = (user: User) => {};
	const handleDeleteUser = (user: User) => {};

	return (
		<main className="mx-auto max-w-7xl p-6 lg:px-8">
			<UserTable
				data={users}
				onCreate={handleCreateUser}
				onEdit={handleEditUser}
				onDelete={handleDeleteUser}
			/>
		</main>
	);
}
