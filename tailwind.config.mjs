/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["night"
			// {
			// 	mytheme: {

			// 		"primary": "#efae64",

			// 		"secondary": "#e899bf",

			// 		"accent": "#91f2e8",

			// 		"neutral": "#19242e",

			// 		"base-100": "#efe8f3",

			// 		"info": "#7787da",

			// 		"success": "#199f7d",

			// 		"warning": "#ee973a",

			// 		"error": "#ec7994",
			// 	},
			// 	// custom: {
			// 	// 	"primary": "#ae95ed",
			// 	// 	"secondary": "#8bbae5",
			// 	// 	"accent": "#ff8f2d",
			// 	// 	"neutral": "#2a2136",
			// 	// 	"base-100": "#eceff4",
			// 	// 	"info": "#4d81d5",
			// 	// 	"success": "#115f3b",
			// 	// 	"warning": "#ddb503",
			// 	// 	"error": "#f81616",
			// 	// },
			// },
		],
		logs: false,
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
