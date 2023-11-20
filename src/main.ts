import { registerPartials } from './app/providers/index';
import { pageSelectionByPath } from './app/routes/index';
import './app/styles/style.scss';

const app = () => {
	registerPartials();

	const location = window.location.pathname;

	document.addEventListener('DOMContentLoaded', () => {
		const root = document.querySelector('#app') as HTMLElement;
		root.innerHTML = pageSelectionByPath(location)();
	});
};

app();
