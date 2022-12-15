// These styles apply to every route in the application
import "./globals.css";
import { Bellefair, Barlow, Barlow_Condensed } from "@next/font/google";

const bellefair = Bellefair({
	weight: "400",
	subsets: ["latin"]
});

const barlow = Barlow({
	variable: "--font-barlow",
	weight: "200",
	subsets: ["latin"]
});

const barlow_condensed = Barlow_Condensed({
	variable: "--font-barlow-condensed",
	weight: "200",
	subsets: ["latin"]
});

const barlow_condensed_bold = Barlow_Condensed({
	variable: "--font-barlow-condensed-bold",
	weight: "700",
	subsets: ["latin"]
});

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${bellefair.className} ${barlow.variable} ${barlow_condensed.variable} ${barlow_condensed_bold.variable}`}
		>
			<head />
			<body>{children}</body>
		</html>
	);
}
