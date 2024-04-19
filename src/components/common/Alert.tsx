"use client";

import { useAlert } from "@/utils/alert";
import {
	CheckCircleIcon,
	ExclamationTriangleIcon,
	InformationCircleIcon,
	XCircleIcon
} from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

export const Alert = () => {
	const { show, text, alertType } = useAlert();

	const bgColor = {
		info: "bg-blue-50 dark:bg-blue-900",
		success: "bg-green-50 dark:bg-green-900",
		danger: "bg-red-50 dark:bg-red-900",
		warning: "bg-yellow-50 dark:bg-yellow-900"
	}[alertType];

	const iconColor = {
		info: "text-blue-400",
		success: "text-green-400",
		danger: "text-red-400",
		warning: "text-yellow-400"
	}[alertType];

	const textColor = {
		info: "text-blue-800 dark:text-blue-400",
		success: "text-green-800 dark:text-green-400",
		danger: "text-red-800 dark:text-red-400",
		warning: "text-yellow-800 dark:text-yellow-400"
	}[alertType];

	const Icon = {
		info: InformationCircleIcon,
		success: CheckCircleIcon,
		danger: XCircleIcon,
		warning: ExclamationTriangleIcon
	}[alertType];

	return (
		show && (
			<div className="absolute bottom-8 left-8 max-w-md">
				<div className={twMerge("rounded-md p-4", bgColor)}>
					<div className="flex">
						<div className="flex-shrink-0">
							<Icon className={twMerge("h-5 w-5", iconColor)} aria-hidden="true" />
						</div>
						<div className="ml-3">
							<p className={twMerge("text-sm font-medium", textColor)}>{text}</p>
						</div>
					</div>
				</div>
			</div>
		)
	);
};
