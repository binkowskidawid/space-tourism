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
				sans: ["var(--font-bellefair)"]
			},
			backgroundImage: {
				'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
				// 'footer-texture': "url('/img/footer-texture.png')",
			  }
		}
	},
	plugins: []
};
