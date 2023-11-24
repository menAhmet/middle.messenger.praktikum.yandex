import '@/app/styles/style.scss';
import signUp from './signUp.hbs';
import { registerPartials } from '@/app/providers';

registerPartials();

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('signUp') as HTMLElement;
	root.innerHTML = signUp();
});