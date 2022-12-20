import { cache } from "react";
import { crew, destinations, technologies } from "../data/data";

export const getNameOfDestination = cache(async (name: string) => {
	const destination = await destinations.find(
		(destination) => destination.name.toLowerCase() === name
	);
	if (typeof destination === "object") {
		return destination;
	} else return undefined;
});

export const getNameOfCrewMember = cache(async (name: string) => {
	const member = await crew.find(
		(member) => member.name.replace(/\s+/g, "").toLowerCase() === name
	);
	if (typeof member === "object") {
		return member;
	} else return undefined;
});

export const getNameOfTechnology = cache(async (name: string) => {
	const technology = await technologies.find(
		(technology) => technology.name.replace(/\s+/g, "").toLowerCase() === name
	);
	if (typeof technology === "object") {
		return technology;
	} else return undefined;
});

export const previous = (
	path: string,
	arr: Destination[] | Crew[] | Technology[]
) => {
	const arrWithLowerCase = arr.map((el) =>
		el.name.replace(/\s+/g, "").toLowerCase()
	);
	const pathId = arrWithLowerCase.indexOf(path);
	let lastEl = arrWithLowerCase[arrWithLowerCase.length - 1];
	let nextEl = arrWithLowerCase[pathId - 1];
	if (pathId <= 0) {
		return lastEl;
	} else {
		return nextEl;
	}
};

export const next = (
	path: string,
	arr: Destination[] | Crew[] | Technology[]
) => {
	const arrWithLowerCase = arr.map((el) =>
		el.name.replace(/\s+/g, "").toLowerCase()
	);
	const pathId = arrWithLowerCase.indexOf(path);
	let firstEl = arrWithLowerCase[0];
	let nextEl = arrWithLowerCase[pathId + 1];
	if (pathId >= arrWithLowerCase.length - 1) {
		return firstEl;
	} else {
		return nextEl;
	}
};
