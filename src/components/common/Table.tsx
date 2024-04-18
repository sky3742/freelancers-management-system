import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface TableProps {
	legend?: ReactNode;
	columns: string[];
	children: ReactNode;
}

export const Table = ({ legend, columns, children }: TableProps) => {
	return (
		<div className="px-4 sm:px-6 lg:px-8">
			{legend}
			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
							<thead>
								<tr>
									{columns.map((label) => (
										<TableHeaderCell key={label}>{label}</TableHeaderCell>
									))}
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">{children}</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export interface TableLegendProps {
	title: string;
	description: string;
	children?: React.ReactNode;
}

export const TableLegend = ({ title, description, children }: TableLegendProps) => (
	<div className="flex items-start gap-4 md:items-center">
		<div className="flex-auto gap-2">
			<h1 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">{title}</h1>
			<p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
		</div>
		{children}
	</div>
);

export interface TableHeaderCellProps {
	className?: string;
	children: React.ReactNode;
}

export const TableHeaderCell = ({ className = "", children }: TableHeaderCellProps) => (
	<th
		scope="col"
		className={twMerge(
			"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white",
			"first:pl-4 last:pr-4 first:sm:pl-0 last:sm:pr-0",
			className
		)}
	>
		{children}
	</th>
);

export interface TableBodyCellProps {
	className?: string;
	children: React.ReactNode;
}

export const TableBodyCell = ({ className = "", children }: TableBodyCellProps) => (
	<td
		className={twMerge(
			"whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white",
			className
		)}
	>
		{children}
	</td>
);
