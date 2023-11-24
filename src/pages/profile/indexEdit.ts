import '@/app/styles/style.scss';
import profileEdit from './profileEdit.hbs';
import { registerPartials } from '@/app/providers';

registerPartials();

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('profileEdit') as HTMLElement;
	root.innerHTML = profileEdit();
});