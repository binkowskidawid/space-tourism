// These styles apply to every route in the application
import "./globals.css";
// import "./output.css";
import { Bellefair, Barlow, Barlow_Condensed } from "@next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
			<body>
				<div className="min-h-screen w-screen bg-home-mobile lg:bg-home-desktop bg-cover bg-no-repeat text-white">
					<div className="min-h-screen px-4 lg:px-10 py-2 lg:py-8 flex flex-col justify-between">
						<Navbar />
						{children}
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
