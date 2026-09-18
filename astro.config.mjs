import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://type.suzume.dev',
	image: {
		layout: 'constrained',
		responsiveStyles: true,
	},
});
