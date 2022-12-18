import Link from "next/link";
import Image from "next/image";
import { cache } from "react";
import { destinations } from "../../../../data/data";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
	params: {
		name: string;
	};
};

const getName = cache(async (name: string) => {
	const destination = await destinations.find(
		(destination) => destination.name.toLowerCase() === name
	);
	if (typeof destination === "object") {
		return destination;
	} else return undefined;
});

const preload = (name: string) => {
	void getName(name);
};

export default async function DestinationName({ params: { name } }: PageProps) {
	preload(name);
	const destination = await getName(name);
	if (!destination) {
		notFound();
	}

	return (
		<main className="container mx-auto min-h-[75vh] mt-16 flex lg:flex-row flex-col justify-between items-center">
			<div className="md:min-h-[60vh] lg:min-h-[90vh] md:w-full flex-1 flex flex-col items-center justify-between md:justify-around lg:pr-10">
				<div className="flex items-center justify-center font-barlowCondensed md:mt-10">
					<p className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px] text-gray-500 font-barlowCondensedBold mr-8">
						01
					</p>
					<h2 className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px]">
						PICK YOUR DESTINATION
					</h2>
				</div>
				<Image
					className="md:w-[350px] lg:w-[400px] xl:w-[480px] 2xl:w-[520px] lg:ml-28 my-10 lg:my-0 animate-spin-slow md:animate-spin-slower"
					src={destination!.images.webp.slice(1)}
					alt={destination!.name}
					width={170}
					height={170}
				/>
			</div>
			<div className="lg:w-1/2 flex-1 flex flex-col justify-center items-center lg:justify-end lg:items-start lg:pl-10">
				<div className="h-8 mb-4 md:mb-2 text-white text-2xl md:text-4xl 2xl:text-[4rem] text-center  font-barlowCondensed tracking-widest 2xl:tracking-wide">
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
				<div className="md:w-3/4 lg:w-full xl:w-3/4 mx-4 md:mx-0 flex flex-col items-center lg:items-start justify-center md:justify-around">
					<h1 className="text-[55px] md:text-[110px] xl:text-[120px] 2xl:text-[150px]">
						{destination!.name.toUpperCase()}
					</h1>
					<p className="font-barlow tracking-wide leading-loose text-center lg:text-left text-sm md:text-base xl:text-lg">
						{destination!.description}
					</p>
					<div className="w-full h-[2px] bg-slate-600 my-10"></div>
					<div className="md:w-full flex flex-col md:flex-row items-center justify-center md:justify-around lg:justify-start mb-10">
						<div className="md:mr-8 mb-8 md:mb-0 text-center md:text-left">
							<p className="h-8 md:h-10 md:mb-2 text-white md:text-2xl font-barlowCondensed tracking-widest">
								AVG. DISTANCE
							</p>
							<p className="text-3xl md:text-4xl">
								{destination!.distance.toUpperCase()}
							</p>
						</div>
						<div className="text-center md:text-left">
							<p className="h-8 md:h-10 md:mb-2 text-white md:text-2xl font-barlowCondensed tracking-widest">
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
