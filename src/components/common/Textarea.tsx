import React from "react";

export interface TextareaProps extends React.ComponentProps<"textarea"> {
	id: string;
	label: string;
	name: string;
	helperText?: string;
	error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ id, label, name, helperText, error, ...props }, ref) => (
		<>
			<label
				htmlFor={id}
				className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
			>
				{label}
			</label>
			<div className="mt-2">
				<textarea
					{...props}
					ref={ref}
					id={id}
					name={name}
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
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

Textarea.displayName = "Textarea";
