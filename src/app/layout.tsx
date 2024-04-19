import { AlertProvider } from "@/components/core";
import { DarkModeToggle } from "@/components/core/DarkModeToggle";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Freelancers management system",
	description: "CRUD on freelancers"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AlertProvider>
			<html lang="en">
				<body className={twMerge("bg-white dark:bg-gray-900", inter.className)}>
					<DarkModeToggle />
					{children}
				</body>
			</html>
		</AlertProvider>
	);
}
