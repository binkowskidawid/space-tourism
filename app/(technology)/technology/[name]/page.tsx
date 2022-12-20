import Link from "next/link";
import Image from "next/image";
import { technologies } from "../../../../data/data";
import { notFound } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
	getNameOfTechnology,
	next,
	previous
} from "../../../../functions/functions";

export const dynamicParams = true;

type PageProps = {
	params: {
		name: string;
	};
};

const preload = (name: string) => {
	void getNameOfTechnology(name);
};

export default async function TechnologyName({ params: { name } }: PageProps) {
	preload(name);
	const technology = await getNameOfTechnology(name);
	if (!technology) {
		notFound();
	}
	const prev = previous(name, technologies);
	const forward = next(name, technologies);

	return (
		<main className="container mx-auto min-h-[75vh] mt-16 flex lg:flex-row flex-col-reverse justify-between items-center">
			<div className="lg:w-1/2 lg:min-h-[75vh] flex-1 flex items-center justify-between lg:absolute z-10">
				<div className="lg:min-h-[75vh] flex flex-col justify-center items-center lg:justify-around lg:items-start lg:pl-20">
					<div className="w-full hidden lg:flex items-center justify-center md:justify-start font-barlowCondensed md:my-10 md:ml-10 lg:ml-0">
						<p className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px] text-gray-500 font-barlowCondensedBold mr-8">
							03
						</p>
						<h2 className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px]">
							SPACE LAUNCH 101
						</h2>
					</div>
					<div className="flex items-center justify-center lg:justify-start lg:w-[60vw]">
						<div className="hidden lg:block  mr-6 text-white lg:text-2xl">
							<ul className="flex flex-col justify-center items-center">
								{technologies.map((el, index) => (
									<Link
										href={`/technology/${el.name
											.replace(/\s+/g, "")
											.toLowerCase()}`}
										className="transition duration-300"
										key={el.name}
									>
										<li
											className={`h-16 w-16 flex items-center justify-center mx-1 my-3 mr-4 hover:text-black hover:bg-white ${
												name === el.name.replace(/\s+/g, "").toLowerCase()
													? "bg-white text-black"
													: "bg-none text-white"
											} transition duration-300 border border-gray-400 rounded-full`}
										>
											{index + 1}
										</li>
									</Link>
								))}
							</ul>
						</div>
						<div className="md:w-3/4 lg:w-full xl:w-3/4 mx-4 md:mx-0 md:mb-10 flex flex-col items-center lg:items-start justify-center md:justify-around">
							<h2 className="text-lg md:text-xl lg:text-2xl text-gray-400 font-barlowCondensed mb-2">
								THE TERMINOLOGY ...
							</h2>
							<h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-6">
								{technology!.name.toUpperCase()}
							</h1>
							<p className="md:w-3/4 font-barlow tracking-wide leading-loose text-center lg:text-left text-sm md:text-base xl:text-lg text-slate-300">
								{technology!.description}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="md:min-h-[60vh] lg:min-h-[90vh] md:w-full flex-1 flex flex-col items-center justify-between md:justify-end lg:justify-center lg:absolute lg:right-0 ">
				<div className="w-full lg:hidden flex items-center justify-center md:justify-start font-barlowCondensed md:my-10 md:ml-10 lg:ml-0">
					<p className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px] text-gray-500 font-barlowCondensedBold mr-8">
						03
					</p>
					<h2 className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px]">
						SPACE LAUNCH 101
					</h2>
				</div>
				<div className="w-screen lg:w-full lg:h-full flex items-center lg:items-start justify-center lg:justify-end overflow-hidden">
					{/* <button className="lg:hidden">
						<Link href={`/technology/${prev}`} className="transition duration-300">
							<ChevronLeftIcon className="h-8 md:h-10 w-8 md:w-10 text-white hover:text-gray-500" />
						</Link>
					</button> */}
					<Image
						className="lg:hidden block mt-10"
						src={technology!.images.landscape.slice(1)}
						alt={technology!.name}
						width={1024}
						height={300}
						quality={100}
					/>
					<Image
						className="hidden lg:block xl:w-[450px] 2xl:w-[500px] lg:mt-16"
						src={technology!.images.portrait.slice(1)}
						alt={technology!.name}
						width={400}
						height={450}
						quality={100}
					/>
					{/* <button className="lg:hidden">
						<Link href={`/technology/${forward}`} className="transition duration-300">
							<ChevronRightIcon className="h-8 md:h-10 w-8 md:w-10 text-white hover:text-gray-500" />
						</Link>
					</button> */}
				</div>
				<div className="lg:hidden h-10 my-6 md:my-12 text-white text-xl md:text-2xl">
					<ul className="flex justify-center items-center">
						{technologies.map((el, index) => (
							<Link
								href={`/technology/${el.name
									.replace(/\s+/g, "")
									.toLowerCase()}`}
								className="transition duration-300"
								key={el.name}
							>
								<li
									className={`h-12 md:h-14 w-12 md:w-14 flex items-center justify-center mx-3 md:mx-0 mr-2 md:mr-4 hover:text-black hover:bg-white ${
										name === el.name.replace(/\s+/g, "").toLowerCase()
											? "bg-white text-black"
											: "bg-none text-white"
									} transition duration-300 border border-gray-400 rounded-full`}
								>
									{index + 1}
								</li>
							</Link>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
}
