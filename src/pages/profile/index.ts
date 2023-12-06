import '@/app/styles/style.scss';
import profile from './profile.hbs';
import { registerPartials } from '@/app/providers';

registerPartials();

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('profile') as HTMLElement;
	root.innerHTML = profile();
});
