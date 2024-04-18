"use client";

import { User } from "@/data/model/user";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button, IconButton, Table, TableBodyCell, TableLegend } from "../common";
import { DeleteUserModal } from "./DeleteUserModal";
import { UserFormModal } from "./UserFormModal";

export interface UserTableProps {
	data: User[];
	onCreate?: (user: User) => void;
	onEdit?: (user: User) => void;
	onDelete?: (user: User) => void;
}

export const UserTable = ({ data, onCreate, onEdit, onDelete }: UserTableProps) => {
	const userTableColumns = ["Username", "Mail", "Phone Number", "Skillsets", "Hobby", "Action"];

	const [userFormModal, setUserFormModal] = useState<{
		open: boolean;
		mode: "create" | "edit";
		user?: User;
	}>({
		open: false,
		mode: "create"
	});

	const [deleteModal, setDeleteModal] = useState<{ open: boolean; user?: User }>({
		open: false
	});

	const handleCreateUser = () => {
		setUserFormModal({
			open: true,
			mode: "create"
		});
	};
	const handleEditUser = (user: User) => {
		setUserFormModal({
			open: true,
			mode: "edit",
			user
		});
	};
	const handleDeleteUser = (user: User) => {
		setDeleteModal({ open: true, user });
	};

	const handleConfirmUserForm = (user: User) => {
		const modeFn = {
			create: onCreate,
			edit: onEdit
		};

		modeFn[userFormModal.mode]?.(user);
	};

	const tableLegend = (
		<TableLegend title="Freelancer List" description="Manage your freelancer here">
			<Button onClick={handleCreateUser} className="flex w-24 gap-2">
				<PlusIcon className="h-5 w-5" aria-hidden="true" />
				New
			</Button>
		</TableLegend>
	);

	return (
		<>
			<Table legend={tableLegend} columns={userTableColumns}>
				{data.map((user) => (
					<tr key={user.id}>
						<TableBodyCell className="font-semibold">{user.username}</TableBodyCell>
						<TableBodyCell>{user.mail}</TableBodyCell>
						<TableBodyCell>{user.phoneNumber}</TableBodyCell>
						<TableBodyCell>{user.skillsets}</TableBodyCell>
						<TableBodyCell>{user.hobby}</TableBodyCell>
						<TableBodyCell>
							<div className="flex gap-1">
								<IconButton color="alternative" onClick={() => handleEditUser(user)}>
									<PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
								</IconButton>
								<IconButton color="red" onClick={() => handleDeleteUser(user)}>
									<TrashIcon className="h-5 w-5" aria-hidden="true" />
								</IconButton>
							</div>
						</TableBodyCell>
					</tr>
				))}
			</Table>

			{userFormModal.open && (
				<UserFormModal
					open={userFormModal.open}
					mode={userFormModal.mode}
					user={userFormModal.user}
					onConfirm={handleConfirmUserForm}
					onClose={(open) => setUserFormModal({ open, mode: "create" })}
				/>
			)}

			{deleteModal.user && (
				<DeleteUserModal
					user={deleteModal.user}
					open={deleteModal.open}
					onConfirm={onDelete}
					onClose={(open) => setDeleteModal({ open, user: undefined })}
				/>
			)}
		</>
	);
};
