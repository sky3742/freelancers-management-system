import { UserTable } from "@/components/users";
import { createUser, deleteUser, getUsers, updateUser } from "@/data/services/user";

export default async function Page() {
	const users = await getUsers();
	return (
		<main className="mx-auto max-w-7xl p-6 lg:px-8">
			<UserTable data={users} onCreate={createUser} onEdit={updateUser} onDelete={deleteUser} />
		</main>
	);
}
