import { AlertProvider } from "@/components/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
				<body className={inter.className}>{children}</body>
			</html>
		</AlertProvider>
	);
}
