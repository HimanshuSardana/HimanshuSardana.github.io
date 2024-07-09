/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '326px',
			'sm': '640px', // min-width
			'md': '768px',
			'lg': '1280px'
		}
	 },
	 variants: {
		extend: {
		 // Extend variants if necessary
		}
	 },
	 plugins: [
		plugin(function ({ addVariant, e }) {
		 addVariant('xs', ({ modifySelectors, separator }) => {
			modifySelectors(({ className }) => {
			 return `@media (min-width: 640px) { .${e(`xs${separator}${className}`)} }`;
			});
		 });
		})
	 ]
	};
