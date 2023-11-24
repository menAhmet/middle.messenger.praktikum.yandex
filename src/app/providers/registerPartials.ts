import Handlebars from 'handlebars/runtime';

import layout from '@/app/layouts/layout.hbs';

import button from '@/shared/ui/button/button.hbs';
import iconButton from '@/shared/ui/iconButton/iconButton.hbs';
import link from '@/shared/ui/link/link.hbs';
import input from '@/shared/ui/input/input.hbs';
import form from '@/shared/ui/form/form.hbs';
import notFound from '@/shared/ui/notFound/notFound.hbs';
import textarea from '@/shared/ui/textarea/textarea.hbs';
import avatar from '@/shared/ui/avatar/avatar.hbs';

import signIn from '@/features/signIn/signIn.hbs';
import signUp from '@/features/signUp/signUp.hbs';
import chatHeader from '@/features/chat/ui/chatHeader/chatHeader.hbs';
import chatFooter from '@/features/chat/ui/chatFooter/chatFooter.hbs';
import chatBody from '@/features/chat/ui/chatBody/chatBody.hbs';
import chatItem from '@/features/chat/ui/chatItem/chatItem.hbs';
import profileEditList from '@/features/profile/ui/profileEditList/profileEditList.hbs';
import profileList from '@/features/profile/ui/profileList/profileList.hbs';

import chatLayout from '@/widgets/chat/ui/chatLayout.hbs';
import profile from '@/widgets/profile/ui/profile/profile.hbs';
import profileEdit from '@/widgets/profile/ui/profileEdit/profileEdit.hbs';

export const registerPartials = () => {
	Handlebars.registerPartial('layout', layout);
	Handlebars.registerPartial('button', button);
	Handlebars.registerPartial('iconButton', iconButton);
	Handlebars.registerPartial('link', link);
	Handlebars.registerPartial('input', input);
	Handlebars.registerPartial('form', form);
	Handlebars.registerPartial('notFound', notFound);
	Handlebars.registerPartial('textarea', textarea);
	Handlebars.registerPartial('avatar', avatar);
	Handlebars.registerPartial('signIn', signIn);
	Handlebars.registerPartial('signUp', signUp);
	Handlebars.registerPartial('chatHeader', chatHeader);
	Handlebars.registerPartial('chatFooter', chatFooter);
	Handlebars.registerPartial('chatBody', chatBody);
	Handlebars.registerPartial('chatItem', chatItem);
	Handlebars.registerPartial('profileEditList', profileEditList);
	Handlebars.registerPartial('profileList', profileList);
	Handlebars.registerPartial('profileEdit', profileEdit);
	Handlebars.registerPartial('profile', profile);
	Handlebars.registerPartial('chatLayout', chatLayout);
};