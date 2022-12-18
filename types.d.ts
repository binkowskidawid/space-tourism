interface Destination {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	description: string;
	distance: string;
	travel: string;
}

interface Crew {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	role: string;
	bio: string;
}

interface Technology {
	name: string;
	images: {
		portrait: string;
		landscape: string;
	};
	description: string;
}
