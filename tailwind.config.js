/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				swamp: {
					600: "#547552",
					700: "#475F45",
					800: "#414840",
					900: "#343D33",
				},
			},
		},
	},
	plugins: [],
};
