// @ts-ignore
import signIn from '@/pages/signIn/signIn.hbs';

const routes: any = {
	'/': signIn,
};

export const pageSelectionByPath = (pagePath: string) => {
	if (pagePath in routes) return routes[pagePath];
};
