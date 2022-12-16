import Link from "next/link";
import Image from "next/image";
import { cache } from "react";

export const dynamicParams = true;
interface Destination {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	description: string;
	distance: string;
	travel: string;
}

type PageProps = {
	params: {
		name: string;
	};
};

const destinations: Destination[] = [
	{
		name: "Moon",
		images: {
			png: "./assets/destination/image-moon.png",
			webp: "./assets/destination/image-moon.webp"
		},
		description:
			"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
		distance: "384,400 km",
		travel: "3 days"
	},
	{
		name: "Mars",
		images: {
			png: "./assets/destination/image-mars.png",
			webp: "./assets/destination/image-mars.webp"
		},
		description:
			"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
		distance: "225 mil. km",
		travel: "9 months"
	},
	{
		name: "Europa",
		images: {
			png: "./assets/destination/image-europa.png",
			webp: "./assets/destination/image-europa.webp"
		},
		description:
			"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
		distance: "628 mil. km",
		travel: "3 years"
	},
	{
		name: "Titan",
		images: {
			png: "./assets/destination/image-titan.png",
			webp: "./assets/destination/image-titan.webp"
		},
		description:
			"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
		distance: "1.6 bil. km",
		travel: "7 years"
	}
];

const getName = cache(async (name: string) => {
	const destination = await destinations.find(
		(destination) => destination.name.toLowerCase() === name
	);
	if (typeof destination === "object") {
		return destination;
	}
});

const preload = (name: string) => {
	void getName(name);
};

export default async function DestinationName({ params: { name } }: PageProps) {
	preload(name);
	const destination = await getName(name);

	return (
		<main className="container mx-auto min-h-[75vh] mt-16 flex lg:flex-row flex-col justify-between items-center">
			<div className="lg:h-[70vh] flex-1 flex flex-col items-center justify-between lg:pr-20">
				<div className="flex items-center justify-center font-barlowCondensed md:mt-10">
					<p className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px] text-gray-500 font-barlowCondensedBold mr-8">
						01
					</p>
					<h2 className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px]">
						PICK YOUR DESTINATION
					</h2>
				</div>
				<Image
					className="md:w-[450px] md:ml-48 my-10 md:my-0"
					src={destination!.images.webp.slice(1)}
					alt={destination!.name}
					width={170}
					height={170}
				/>
			</div>
			<div className="lg:h-[70vh] md:w-1/2 flex-1 flex flex-col justify-center items-center md:justify-end md:items-start lg:pl-16">
				<div className="h-8 mb-4 md:mb-2 text-white text-2xl md:text-[1.25rem] text-center  font-barlowCondensed tracking-widest">
					<ul className="flex justify-center items-center md:justify-start md:items-start text-base">
						{destinations.map((el) => (
							<li
								className={`flex items-center h-full mx-3 md:mx-0 md:mr-8 hover:text-white hover:border-b-2 ${
									name === el.name.toLowerCase() ? "border-b-2" : ""
								} transition duration-300`}
								key={el.name}
							>
								<Link
									href={`/destination/${el.name.toLowerCase()}`}
									className="relative mb-2 hover:text-gray-300 transition duration-300"
								>
									{el.name.toUpperCase()}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="xl:w-3/4 mx-4 md:mx-0 flex flex-col items-center lg:items-start justify-center">
					<h1 className="text-[55px] md:text-[120px] lg:text-[140px]">
						{destination!.name.toUpperCase()}
					</h1>
					<p className="font-barlow tracking-wide leading-loose text-center lg:text-left text-sm md:text-base lg:text-lg">
						{destination!.description}
					</p>
					<div className="w-full h-[2px] bg-slate-600 my-10"></div>
					<div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
						<div className="md:mr-20 mb-8 md:mb-0 text-center md:text-left">
							<p className="h-8 md:h-10 md:mb-2 text-white md:text-2xl md:text-[1.25rem] font-barlowCondensed tracking-widest">
								AVG. DISTANCE
							</p>
							<p className="text-3xl md:text-4xl">
								{destination!.distance.toUpperCase()}
							</p>
						</div>
						<div className="text-center md:text-left">
							<p className="h-8 md:h-10 md:mb-2 text-white md:text-2xl md:text-[1.25rem] font-barlowCondensed tracking-widest">
								EST. TRAVEL TIME
							</p>
							<p className="text-3xl md:text-4xl">
								{destination!.travel.toUpperCase()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
