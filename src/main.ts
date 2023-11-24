document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root') as HTMLElement;
	if (root) {
		// redirect in signIn page
		document.location.replace('/src/pages/signIn/signIn.html');
	}
});