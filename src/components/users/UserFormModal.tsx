"use client";

import { User, UserSchema } from "@/data/model/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Modal, Textarea } from "../common";

export interface UserFormModalProps {
	open: boolean;
	mode: "create" | "edit";
	user?: User;
	onConfirm: (user: User) => void;
	onClose: (open: boolean) => void;
}

export const UserFormModal = ({ open, onClose, mode, user, onConfirm }: UserFormModalProps) => {
	const cancelRef = useRef(null);

	const {
		register,
		formState: { errors, isValid },
		handleSubmit
	} = useForm<User>({
		mode: "onChange",
		reValidateMode: "onChange",
		defaultValues: user,
		resolver: yupResolver(UserSchema)
	});

	const handleConfirm = (user: User) => {
		onConfirm(user);
		onClose(false);
	};

	return (
		<Modal open={open} onClose={onClose} initialRef={cancelRef}>
			<form onSubmit={handleSubmit(handleConfirm)}>
				<div className="border-b border-gray-900/10 pb-8 dark:border-white/10">
					<h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
						{mode === "create" ? "New freelancer" : "Update " + user?.username}
					</h2>

					<div className="mt-8 grid gap-4">
						<div className="col-span-full">
							<Input
								id={"username"}
								label="Username"
								type="text"
								placeholder="username"
								{...register("username", {
									required: "Username is required"
								})}
								defaultValue={user?.username}
								error={errors.username?.message}
							/>
						</div>

						<div className="col-span-full">
							<Input
								id="mail"
								label="Mail"
								type="email"
								placeholder="mail@example.com"
								{...register("mail", {
									required: "Mail is required"
								})}
								defaultValue={user?.mail}
								error={errors.mail?.message}
							/>
						</div>

						<div className="col-span-full">
							<Input
								id="phoneNumber"
								label="Phone Number"
								type="text"
								placeholder="0123456789"
								{...register("phoneNumber", {
									required: "Phone Number is required"
								})}
								defaultValue={user?.phoneNumber}
								error={errors.phoneNumber?.message}
							/>
						</div>

						<div className="col-span-full">
							<Textarea
								id="skillsets"
								label="Skillsets"
								placeholder="Skillsets..."
								rows={2}
								{...register("skillsets")}
								defaultValue={user?.skillsets}
							/>
						</div>

						<div className="col-span-full">
							<Textarea
								id="hobby"
								label="Hobby"
								placeholder="Hobby..."
								rows={2}
								{...register("hobby")}
								defaultValue={user?.hobby}
							/>
						</div>
					</div>
				</div>

				<div className="mt-6 flex flex-col-reverse items-center justify-end gap-2 md:flex-row">
					<Button
						color="alternative"
						className="w-full md:w-28"
						ref={cancelRef}
						onClick={() => onClose(false)}
					>
						Cancel
					</Button>

					<Button type="submit" className="w-full md:w-28" disabled={!isValid}>
						Save
					</Button>
				</div>
			</form>
		</Modal>
	);
};
