export default function Page() {
	return (
		<main className="container min-h-[75vh] lg:pl-28 flex lg:flex-row flex-col justify-between items-center">
			<div className="lg:h-[70vh] flex-1 flex flex-col justify-end pr-20">
				<div className="w-3/4">
					<div className="font-barlowCondensed">
						<h2 className="tracking-[.15em] text-[28px] mb-2">
							SO, YOU WANT TO TRAVEL TO
						</h2>
					</div>
					<h1 className="text-[150px]">SPACE</h1>
					<p className="font-barlow tracking-wide leading-loose">
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
			</div>
			<div className="lg:h-[70vh] flex-1 flex flex-row items-end justify-center pl-20">
				<div className="hover:before:absolute before:-inset-14 before:rounded-full before:bg-slate-700 before:opacity-75 relative">
					<button className="relative z-10 bg-white w-[274px] h-[274px] rounded-full">
						<p className="text-3xl tracking-widest text-gray-900">EXPLORE</p>
					</button>
				</div>
			</div>
		</main>
	);
}
