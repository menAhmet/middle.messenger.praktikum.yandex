// @ts-nocheck
import signIn from '@/pages/signIn/signIn.hbs';
import signUp from '@/pages/signUp/signUp.hbs';
import chat from '@/pages/chat/chat.hbs';
import profile from '@/pages/profile/profile.hbs';

const routes = {
	'/': signIn,
	'/signup': signUp,
	'/chat': chat,
	'/profile': profile,
};

export const pageSelectionByPath = (pagePath: string) => {
	if (!routes[pagePath]) return;

	return routes[pagePath];
};
