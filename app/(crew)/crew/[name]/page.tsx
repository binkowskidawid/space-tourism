import Link from "next/link";
import Image from "next/image";
import { cache } from "react";
import { crew } from "../../../../data/data";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
	params: {
		name: string;
	};
};

const getName = cache(async (name: string) => {
	const member = await crew.find(
		(member) => member.name.replace(/\s+/g, "").toLowerCase() === name
	);
	if (typeof member === "object") {
		return member;
	} else return undefined;
});

const preload = (name: string) => {
	void getName(name);
};

export default async function DestinationName({ params: { name } }: PageProps) {
	preload(name);
	const member = await getName(name);
	if (!member) {
		notFound();
	}

	return (
		<main className="container mx-auto min-h-[75vh] mt-16 flex lg:flex-row md:flex-col flex-col-reverse justify-between items-center">
			<div className="lg:w-1/2 lg:min-h-[75vh] flex-1 flex flex-col justify-center items-center lg:justify-around lg:items-start lg:pl-20">
				<div className="w-full hidden md:flex items-center justify-center md:justify-start font-barlowCondensed md:my-10 md:ml-10 lg:ml-0">
					<p className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px] text-gray-500 font-barlowCondensedBold mr-8">
						02
					</p>
					<h2 className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px]">
						MEET YOUR CREW
					</h2>
				</div>
				<div className="md:w-3/4 lg:w-full xl:w-3/4 mx-4 md:mx-0 md:mb-10 flex flex-col items-center lg:items-start justify-center md:justify-around">
					<h2 className="text-xl md:text-2xl text-gray-500">
						{member!.role.toUpperCase()}
					</h2>
					<h1 className="text-2xl md:text-4xl xl:text-5xl mb-6">
						{member!.name.toUpperCase()}
					</h1>
					<p className="md:w-3/4 font-barlow tracking-wide leading-loose text-center lg:text-left text-sm md:text-base xl:text-lg text-slate-300">
						{member!.bio}
					</p>
				</div>
				<div className="hidden md:block h-8 mb-4 md:mb-2 text-white text-2xl md:text-4xl 2xl:text-[4rem] text-center  font-barlowCondensed tracking-widest 2xl:tracking-wide">
					<ul className="flex justify-center items-center">
						{crew.map((el) => (
							<Link
								href={`/crew/${el.name.replace(/\s+/g, "").toLowerCase()}`}
								className="transition duration-300"
								key={el.name}
							>
								<li
									className={`h-3 w-3 flex items-center mx-3 md:mx-0 md:mr-4 hover:text-white hover:bg-white ${
										name === el.name.replace(/\s+/g, "").toLowerCase()
											? "bg-white"
											: "bg-gray-500"
									} transition duration-300 rounded-full`}
								></li>
							</Link>
						))}
					</ul>
				</div>
			</div>
			<div className="md:min-h-[60vh] lg:min-h-[90vh] md:w-full flex-1 flex flex-col items-center justify-between md:justify-end lg:pr-2">
				<div className="w-full md:hidden flex items-center justify-center md:justify-start font-barlowCondensed md:my-10 md:ml-10 lg:ml-0">
					<p className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px] text-gray-500 font-barlowCondensedBold mr-8">
						02
					</p>
					<h2 className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px]">
						MEET YOUR CREW
					</h2>
				</div>
				<div className="w-[80vw] md:w-full border-b-2 border-slate-600 flex items-end justify-center">
					<Image
						className="md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] mt-10 lg:my-0"
						src={member!.images.webp.slice(1)}
						alt={member!.name}
						width={170}
						height={170}
						quality={100}
					/>
				</div>
				<div className="md:hidden h-8 my-6 md:mb-2 text-white text-2xl md:text-4xl 2xl:text-[4rem] text-center  font-barlowCondensed tracking-widest 2xl:tracking-wide">
					<ul className="flex justify-center items-center">
						{crew.map((el) => (
							<Link
								href={`/crew/${el.name.replace(/\s+/g, "").toLowerCase()}`}
								className="transition duration-300"
								key={el.name}
							>
								<li
									className={`h-3 w-3 flex items-center mx-3 md:mx-0 mr-2 md:mr-4 hover:text-white hover:bg-white ${
										name === el.name.replace(/\s+/g, "").toLowerCase()
											? "bg-white"
											: "bg-gray-500"
									} transition duration-300 rounded-full`}
								></li>
							</Link>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
}
