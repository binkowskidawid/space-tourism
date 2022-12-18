import Link from "next/link";
import { crew } from "../../../data/data";

export default function Destination() {
	return (
		<main className="container mx-auto min-h-[75vh] mt-16 flex lg:flex-row flex-col justify-center items-center">
			<div className="lg:h-[70vh] md:w-1/2 flex-1 flex flex-col justify-center items-center">
				<div className="mb-4 md:mb-2 text-white text-2xl md:text-4xl 2xl:text-[4rem] text-center  font-barlowCondensed tracking-widest 2xl:tracking-wide">
					<ul className="flex flex-col justify-center items-center text-2xl md:text-4xl">
						{crew.map((el) => (
							<li
								className="flex items-center h-full mx-3 my-4 hover:text-white hover:border-b-2 transition duration-300"
								key={el.name}
							>
								<Link
									href={`/crew/${el.name.replace(/\s+/g, "").toLowerCase()}`}
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
