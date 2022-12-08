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
				"home-mobile": "url('/assets/home/background-home-tablet.jpg')"
				// 'footer-texture': "url('/img/footer-texture.png')",
			}
		}
	},
	plugins: []
};
