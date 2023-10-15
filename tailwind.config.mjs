/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["light"]
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				html: { fontSize: "18px" },
			});
		}),
		require("daisyui")
	],
}
