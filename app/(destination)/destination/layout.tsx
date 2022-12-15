import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function DestinationLayout({
	children // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen w-screen bg-destination-mobile lg:bg-destination-desktop bg-cover bg-no-repeat text-white">
			<div className="min-h-screen px-4 lg:px-10 py-2 lg:py-8 flex flex-col justify-between">
				<Navbar />
				<main className="container mx-auto min-h-[75vh] mt-16 flex lg:flex-row flex-col justify-between items-center">
					{children}
				</main>
				<Footer />
			</div>
		</div>
	);
}