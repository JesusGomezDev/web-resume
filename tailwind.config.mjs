/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			primary: '#191a1a',
		  },
		  fontFamily: {
			sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
			resume: ['Menlo', 'Monaco', 'Lucida Console', 'Courier New', 'Courier', 'monospace']
		  },
		  letterSpacing: {
			'tighter': '-0.025em',
		  },
		},
	  },
	plugins: [],
}
