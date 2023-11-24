import '@/app/styles/style.scss';
import chat from './chat.hbs';
import { registerPartials } from '@/app/providers';

registerPartials();

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('chat') as HTMLElement;
	root.innerHTML = chat();
});