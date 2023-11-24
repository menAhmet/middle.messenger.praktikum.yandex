import '@/app/styles/style.scss';
import signIn from './signIn.hbs';
import { registerPartials } from '@/app/providers';

registerPartials();

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('signIn') as HTMLElement;
	root.innerHTML = signIn();
});
