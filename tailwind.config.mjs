/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js}'],
	theme: {
		extend: {
			colors: {
				primary: '#03412a',
				primarytop: '#2F482D',
				secondary: '#009b57',
				accentYellow: '#FFC107',
				accentBlue: '#00BFFF',
				olive: '#6A9F65',
				sand: '#D3B88C',
				accentBlack: '#222222'
			}
		},
	},
	plugins: [],
}
