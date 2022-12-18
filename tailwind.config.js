/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				// sans: ["var(--font-bellefair)"],
				barlowCondensed: ["var(--font-barlow-condensed)"],
				barlowCondensedBold: ["var(--font-barlow-condensed-bold)"],
				barlow: ["var(--font-barlow)"]
			},
			backgroundImage: {
				"home-desktop": "url('/assets/home/background-home-desktop.jpg')",
				"home-mobile": "url('/assets/home/background-home-tablet.jpg')",
				"destination-desktop":
					"url('/assets/destination/background-destination-desktop.jpg')",
				"destination-mobile":
					"url('/assets/destination/background-destination-tablet.jpg')",
				"crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
				"crew-mobile": "url('/assets/crew/background-crew-tablet.jpg')",
				"technology-desktop":
					"url('/assets/technology/background-technology-desktop.jpg')",
				"technology-mobile":
					"url('/assets/technology/background-technology-tablet.jpg')"
			},
			animation: {
				"spin-slow": "spin 120s linear infinite",
				"spin-slower": "spin 180s linear infinite"
			}
		}
	},
	plugins: []
};
