import Handlebars from 'handlebars/runtime';

// @ts-ignore
import button from '@/shared/ui/button/button.hbs';

export const registerPartials = () => {
	Handlebars.registerPartial('button', button);
};
