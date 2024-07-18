import { ChakraProvider } from "@/providers/chakra";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "next-ts-chakra",
	description: "Next.js Typescript with ChakraUI",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ChakraProvider>
					{children}
				</ChakraProvider>
			</body>
		</html>
	);
}
