export default function Page() {
	return (
		<main className="container mx-auto min-h-[75vh] flex lg:flex-row flex-col justify-between items-center">
			<div className="lg:h-[70vh] md:w-1/2 flex-1 flex flex-col justify-center items-center lg:justify-end lg:items-start lg:pl-16">
				<div className="xl:w-3/4 flex flex-col items-center lg:items-start justify-center">
					<div className="font-barlowCondensed">
						<h2 className="tracking-[.15em] text-[18px] md:text-[24px] lg:text-[28px] mb-2">
							SO, YOU WANT TO TRAVEL TO
						</h2>
					</div>
					<h1 className="text-[85px] md:text-[140px] lg:text-[150px]">SPACE</h1>
					<p className="font-barlow tracking-wide leading-loose text-center lg:text-left text-sm md:text-base lg:text-lg">
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
			</div>
			<div className="lg:h-[70vh] flex-1 flex flex-col lg:flex-row items-center lg:items-end justify-end lg:justify-end lg:pr-20">
				<div className="hover:before:absolute before:-inset-10 lg:before:-inset-14 before:rounded-full before:bg-slate-700 before:opacity-75 relative">
					<button className="relative z-10 bg-white w-[174px] h-[174px] md:w-[244px] md:h-[244px] lg:w-[274px] lg:h-[274px] rounded-full">
						<p className="md:text-3xl text-2xl tracking-widest text-gray-900">
							EXPLORE
						</p>
					</button>
				</div>
			</div>
		</main>
	);
}
