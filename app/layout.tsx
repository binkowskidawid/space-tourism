// These styles apply to every route in the application
// import "./globals.css";
import "./output.css";
import { Bellefair } from "@next/font/google";

const bellefair = Bellefair({
	variable: "--font-bellefair",
	weight: "400",
	subsets: ["latin"]
});

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={bellefair.variable}>
			<head />
			<body>
				<div className="min-h-screen bg-home-desktop bg-cover bg-no-repeat text-white">
					<div className="container mx-auto px-10 py-8">
						<nav>Navbar</nav>
						{children}
						<footer className="">
							<p>footer</p>
						</footer>
					</div>
				</div>
			</body>
		</html>
	);
}
