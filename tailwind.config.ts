import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				customGray: "#23252B",
				purple: {
					200: "#D4D3EB",
					500: "#837FEB",
				},
				green: {
					200: "#E1EDD9",
					500: "#B5D99F",
				},
				red: {
					200: "#FADFE4",
					500: "#F2738D",
				},
				gray: {
					200: "#617587",
				},
			},

			boxShadow: {
				"dark-100": "box-shadow: 0px 4px 63.3px 0px #00000014",
			},

			utilities: {
				".image-pixelated": {
					"image-rendering": "pixelated",
				},
			},
		},
		screens: {
			sm: "344px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1512px",
			// => @media (min-width: 1512px) { ... }
		},
	},
	plugins: [],
} satisfies Config;
