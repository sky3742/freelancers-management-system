import { ReactNode } from "react";

export interface PageHeaderProps {
	title: string;
	children?: ReactNode;
}

export const PageHeader = ({ title, children }: PageHeaderProps) => (
	<div className="md:flex md:items-center md:justify-between">
		<div className="min-w-0 flex-1">
			<h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
				{title}
			</h2>
		</div>
		{children}
	</div>
);
