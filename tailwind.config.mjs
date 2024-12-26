/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#03412a',
				secondary: '#009b57',
				accentYellow: '#FFC107',
				accentBlue: '#00BFFF',
				olive: '#6A9F65',
				sand: '#D3B88C'
			}
		},
	},
	plugins: [],
}
