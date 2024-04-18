import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ComponentProps<"button"> {
	color?: "default" | "alternative" | "red";
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	children: ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ color = "default", type = "button", disabled, className, children, onClick, ...props },
		ref
	) => {
		const colors = {
			default:
				"bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500",
			alternative:
				"bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20",
			red: "bg-red-600 text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400 dark:focus-visible:outline-red-500"
		};

		return (
			<button
				{...props}
				ref={ref}
				type={type}
				onClick={onClick}
				disabled={disabled}
				className={twMerge(
					"rounded-md px-3 py-2 text-sm font-semibold shadow-sm",
					colors[color],
					disabled && "cursor-not-allowed bg-gray-300 opacity-50",
					className
				)}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";
