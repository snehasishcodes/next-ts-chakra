import { ChakraProvider } from "@/providers/chakra";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
