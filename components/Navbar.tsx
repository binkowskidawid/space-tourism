"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
	const menuHrefAttr = [
		{
			href: "/",
			number: "00",
			text: "HOME"
		},
		{
			href: "/destination",
			number: "01",
			text: "DESTINATION"
		},
		{
			href: "/crew",
			number: "02",
			text: "CREW"
		},
		{
			href: "/technology",
			number: "03",
			text: "TECHNOLOGY"
		}
	];

	const [openMenu, setOpenMenu] = useState(false);
	const handleClickOnMobileMenuIcon = () => setOpenMenu(!openMenu);
	const closeMobileMenu = () => setOpenMenu(false);

	return (
		<nav className="nav h-12 md:h-20 flex justify-between items-center fixed left-0 w-full md:pl-10 px-4 md:px-0 py-2 z-20">
			<div className="flex justify-center items-center">
				<Link href="/" passHref className="nav__logo flex">
					<div className="flex items-center cursor-pointer">
						<Image
							className=""
							src="/assets/shared/logo.svg"
							alt="Logo"
							width={35}
							height={35}
						/>
					</div>
				</Link>
			</div>
			<div
				className={
					openMenu
						? "nav__menu show__menu bg-white/0 backdrop-blur-2xl w-3/4 fixed md:static top-0 right-0 h-screen text-white text-2xl md:text-[1.25rem] p-6 md:p-2 text-center  ease-out duration-500 md:duration-[0ms] md:transition-none font-barlowCondensed tracking-widest"
						: "nav__menu bg-white/0 backdrop-blur-2xl md:w-[65%] fixed md:static md:top-0 -right-full md:right-0 h-full text-white text-2xl md:text-[1.25rem] p-16 md:p-2 text-center  ease-out duration-500 md:duration-[0ms] md:transition-none font-barlowCondensed tracking-widest"
				}
				id="nav-menu"
			>
				<ul className="nav__list h-1/3 md:h-full p-0 ml-4 md:ml-0 mt-16 md:mt-0 flex flex-col md:flex-row justify-start items-start md:justify-end md:items-center md:mr-28 text-base">
					{menuHrefAttr.map((el) => (
						<li
							className="nav__item flex items-center h-full mb-2 md:ml-8 md:mb-0 hover:text-white hover:border-b-2 transition duration-300"
							key={el.text}
						>
							<Link
								href={el.href}
								className="nav__link relative hover:text-gray-300 transition duration-300"
								onClick={closeMobileMenu}
							>
								<span className="font-barlowCondensedBold pr-3 md:hidden lg:inline">
									{el.number}
								</span>
								{el.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div
				className="nav__toggle text-white text-2xl cursor-pointer md:hidden z-10"
				id="nav-toggle"
			>
				<button id="menu-icon" onClick={handleClickOnMobileMenuIcon}>
					{openMenu ? (
						<XMarkIcon className="h-8 w-8 text-white" />
					) : (
						<Bars3Icon className="h-8 w-8 text-white" />
					)}
				</button>
			</div>
		</nav>
	);
}
