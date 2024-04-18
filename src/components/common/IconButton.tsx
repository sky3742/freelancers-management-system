import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface IconButtonProps {
	color?: "default" | "alternative" | "red";
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	className?: string;
	children: ReactNode;
}

export const IconButton = ({
	color = "default",
	type = "button",
	onClick,
	className = "",
	children
}: IconButtonProps) => {
	const colors = {
		default: "text-indigo-600 dark:text-indigo-500",
		alternative: "text-gray-900 dark:text-white",
		red: "text-red-600 dark:text-red-500"
	};

	return (
		<button
			type={type}
			onClick={onClick}
			className={twMerge("rounded-full p-1.5", colors[color], className)}
		>
			{children}
		</button>
	);
};
