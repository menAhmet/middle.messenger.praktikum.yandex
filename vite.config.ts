import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from './vite-plugin-handlebars-precompile';

export default defineConfig({
	plugins: [handlebars()],
	root: resolve(__dirname, './'),
	build: {
		outDir: 'dist',
		rollupOptions: {
			output: {
				assetFileNames: () => {
					return 'assets/[name].[hash][extname]';
				},
			},
		},
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
