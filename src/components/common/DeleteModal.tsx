import { Dialog } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import { Button, Modal } from "../common";

export interface DeleteModalProps {
	title: string;
	description: string;
	open: boolean;
	onClose: (open: boolean) => void;
	onConfirm: () => void;
}

export const DeleteModal = ({ title, description, open, onClose, onConfirm }: DeleteModalProps) => {
	const cancelRef = useRef(null);

	const handleDelete = () => {
		onConfirm();
		onClose(false);
	};

	const handleCancel = () => {
		onClose(false);
	};

	return (
		<Modal open={open} onClose={onClose} initialRef={cancelRef}>
			<div className="sm:flex sm:items-start">
				<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
					<TrashIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
				</div>

				<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
					<Dialog.Title
						as="h3"
						className="text-base font-semibold leading-6 text-gray-900 dark:text-white"
					>
						{title}
					</Dialog.Title>
					<div className="mt-2">
						<p className="text-sm text-gray-500 dark:text-white">{description}</p>
					</div>
				</div>
			</div>

			<div className="mt-5 flex flex-row-reverse gap-3 md:mt-4">
				<Button color="red" className="w-full md:w-fit" onClick={handleDelete}>
					Delete
				</Button>
				<Button
					ref={cancelRef}
					color="alternative"
					className="w-full md:w-fit"
					onClick={handleCancel}
				>
					Cancel
				</Button>
			</div>
		</Modal>
	);
};
