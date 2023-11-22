// @ts-nocheck
import Handlebars from 'handlebars/runtime';

import layout from '@/app/layouts/layout.hbs';

import button from '@/shared/ui/button/button.hbs';
import link from '@/shared/ui/link/link.hbs';
import input from '@/shared/ui/input/input.hbs';
import form from '@/shared/ui/form/form.hbs';
import notFound from '@/shared/ui/notFound/notFound.hbs';

import signIn from '@/features/signIn/signIn.hbs';
import signUp from '@/features/signUp/signUp.hbs';

import chatLayout from '@/widgets/chat/ui/chatLayout.hbs';

const partials = import.meta.glob(
	['@/features/*/*.hbs', '@/shared/ui/*/*.hbs'],
	{ eager: true }
);

export const registerPartials = () => {
	Handlebars.registerPartial('layout', layout);
	Handlebars.registerPartial('button', button);
	Handlebars.registerPartial('link', link);
	Handlebars.registerPartial('input', input);
	Handlebars.registerPartial('form', form);
	Handlebars.registerPartial('notFound', notFound);
	Handlebars.registerPartial('signIn', signIn);
	Handlebars.registerPartial('signUp', signUp);
	Handlebars.registerPartial('chatLayout', chatLayout);
};
