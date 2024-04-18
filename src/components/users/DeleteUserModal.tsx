"use client";

import { User } from "@/data/model/user";
import { DeleteModal } from "../common";

export interface DeleteUserModalProps {
	open: boolean;
	user: User;
	onConfirm?: (user: User) => void;
	onClose: (open: boolean) => void;
}

export const DeleteUserModal = ({ open, user, onConfirm, onClose }: DeleteUserModalProps) => {
	return (
		<DeleteModal
			open={open}
			title={"Delete " + user.username}
			description={"Are you sure you want to delete this user?"}
			onConfirm={() => onConfirm?.(user)}
			onClose={onClose}
		/>
	);
};
