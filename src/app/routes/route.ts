// @ts-nocheck
import signIn from '@/pages/signIn/signIn.hbs';
import signUp from '@/pages/signUp/signUp.hbs';
import chat from '@/pages/chat/chat.hbs';

const routes = {
	'/': signIn,
	'/signup': signUp,
	'/signup': signUp,
	'/chat': chat,
};

export const pageSelectionByPath = (pagePath: string) => {
	if (!routes[pagePath]) return;

	return routes[pagePath];
};
