const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true
		}
	},
	theme: {
		extend: {
			colors: {},
			animation: {
				'spin-slow': 'spin 20s linear infinite'
			},
			spacing: {
				18: '4.5rem',
				112: '28rem',
				120: '30rem'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
