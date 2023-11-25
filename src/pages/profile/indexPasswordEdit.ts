import '@/app/styles/style.scss';
import profilePasswordEdit from './profilePasswordEdit.hbs';
import { registerPartials } from '@/app/providers';

registerPartials();

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('profilePasswordEdit') as HTMLElement;
	root.innerHTML = profilePasswordEdit();
});
