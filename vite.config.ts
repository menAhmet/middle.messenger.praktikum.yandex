import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from './vite-plugin-handlebars-precompile';

export default defineConfig({
	plugins: [handlebars()],
	root: resolve(__dirname, './'),
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				index: resolve(__dirname, './src/index.html'),
				signin: resolve(__dirname, './src/pages/signIn/signIn.html'),
				signup: resolve(__dirname, './src/pages/signUp/signUp.html'),
				chat: resolve(__dirname, './src/pages/chat/chat.html'),
				profile: resolve(__dirname, './src/pages/profile/profile.html'),
				profileEdit: resolve(__dirname, './src/pages/profile/profileEdit.html'),
			},
		},
	},
	server: {
		port: 3000,
		open: './src/index.html',
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
});
