import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from './vite-plugin-handlebars-precompile';

export default defineConfig({
	plugins: [handlebars()],
	build: {
		outDir: 'dist',
	},
	server: {
		port: 3000,
		open: true,
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
});
