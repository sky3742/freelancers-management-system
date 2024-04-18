import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

export interface InputProps extends React.ComponentProps<"input"> {
	id: string;
	label: string;
	name: string;
	helperText?: string;
	error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ id, label, name, helperText, error, ...props }, ref) => (
		<>
			<label
				htmlFor={id}
				className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
			>
				{label}
			</label>
			<div className="relative mt-2 rounded-md shadow-sm">
				<input
					{...props}
					ref={ref}
					id={id}
					name={name}
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
				{error && (
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
						<ExclamationCircleIcon
							className="h-5 w-5 text-red-500 dark:text-red-400"
							aria-hidden="true"
						/>
					</div>
				)}
			</div>
			{helperText && (
				<p className="mt-2 text-sm text-gray-500 dark:text-gray-400" id={name + "-description"}>
					{helperText}
				</p>
			)}
			{error && (
				<p className="mt-2 text-sm text-red-600 dark:text-red-500" id={name + "-error"}>
					{error}
				</p>
			)}
		</>
	)
);

Input.displayName = "Input";
