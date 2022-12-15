import Link from "next/link";

export default function HomeButton() {
	return (
		<div className="lg:h-[70vh] flex-1 flex flex-col lg:flex-row items-center lg:items-end justify-end lg:justify-end lg:pr-20">
			<Link
				href="/destination/moon"
				className="hover:after:absolute after:-inset-10 lg:after:-inset-14 after:rounded-full after:bg-slate-700 after:opacity-75 relative"
			>
				<button className="relative z-10 bg-white w-[174px] h-[174px] md:w-[244px] md:h-[244px] lg:w-[274px] lg:h-[274px] rounded-full">
					<p className="md:text-3xl text-2xl tracking-widest text-gray-900">
						EXPLORE
					</p>
				</button>
			</Link>
		</div>
	);
}
