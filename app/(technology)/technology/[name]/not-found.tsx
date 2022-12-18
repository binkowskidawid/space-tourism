import Link from "next/link";
import { technologies } from "../../../../data/data";

export default function NotFound() {
	return (
		<main className="container mx-auto min-h-[75vh] mt-16 flex lg:flex-row flex-col justify-center items-center">
			<div className="lg:h-[70vh] md:w-1/2 flex-1 flex flex-col justify-center items-center">
				<div className="w-3/4 mb-4 md:mb-2 text-white text-2xl md:text-4xl 2xl:text-[4rem] text-center  font-barlowCondensed tracking-widest 2xl:tracking-wide">
					<p className="my-4 text-base md:text-xl">
						{"We couldn't find this part of tech."}
					</p>
					<p className="my-4 text-base md:text-xl">
						{"Please select a technology from those available below."}
					</p>
					<ul className="mt-10 flex flex-col justify-center items-center text-2xl md:text-4xl">
						{technologies.map((el) => (
							<li
								className="flex items-center h-full mx-3 my-1 md:my-4 hover:text-white hover:border-b-2 transition duration-300"
								key={el.name}
							>
								<Link
									href={`/technology/${el.name
										.replace(/\s+/g, "")
										.toLowerCase()}`}
									className="relative mb-2 hover:text-gray-300 transition duration-300"
								>
									{el.name.toUpperCase()}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
}
