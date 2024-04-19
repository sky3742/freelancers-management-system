"use client";

import { User } from "@/data/model/user";
import { useAlert } from "@/utils/alert";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Alert, Button, IconButton, Table, TableBodyCell, TableLegend } from "../common";
import { DeleteUserModal } from "./DeleteUserModal";
import { UserFormModal } from "./UserFormModal";

export interface UserTableProps {
	data: User[];
	onCreate?: (user: User) => Promise<void>;
	onEdit?: (user: User) => Promise<void>;
	onDelete?: (user: User) => Promise<void>;
}

export const UserTable = ({ data, onCreate, onEdit, onDelete }: UserTableProps) => {
	const { setAlert } = useAlert();

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

	const handleConfirmUserForm = async (user: User) => {
		const modeFn = {
			create: onCreate,
			edit: onEdit
		};

		try {
			await modeFn[userFormModal.mode]?.(user);

			setAlert(
				userFormModal.mode === "create" ? "Created successfully!" : "Updated successfully!",
				"success"
			);
		} catch (error) {
			if (error instanceof Error) {
				setAlert(error.message, "danger");
			}
		}
	};

	const handleConfirmDeleteUser = async (user: User) => {
		try {
			await onDelete?.(user);
			setAlert("Deleted successfully!", "success");
		} catch (error) {
			if (error instanceof Error) {
				setAlert(error.message, "danger");
			}
		}
	};

	const tableLegend = (
		<TableLegend title="Freelancer List" description="Manage your freelancer here">
			<Button
				onClick={() => {
					setUserFormModal({
						open: true,
						mode: "create"
					});
				}}
				className="flex w-24 gap-2"
			>
				<PlusIcon className="h-5 w-5" aria-hidden="true" />
				New
			</Button>
		</TableLegend>
	);

	return (
		<>
			<Alert />

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
								<IconButton
									color="alternative"
									onClick={() =>
										setUserFormModal({
											open: true,
											mode: "edit",
											user
										})
									}
								>
									<PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
								</IconButton>
								<IconButton color="red" onClick={() => setDeleteModal({ open: true, user })}>
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
					onConfirm={handleConfirmDeleteUser}
					onClose={(open) => setDeleteModal({ open, user: undefined })}
				/>
			)}
		</>
	);
};
