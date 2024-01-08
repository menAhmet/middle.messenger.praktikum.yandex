import AuthController from './app/controllers/AuthController';
import {
	AvatarProfile,
	ChatBody,
	ChatDialog,
	ChatFooter,
	ChatHeader,
	ChatItem,
	ProfileEditList,
	ProfileList,
	ProfilePasswordList,
	SignIn,
	SignUp,
} from './features';
import { ChatPage } from './pages/chat';
import { ProfilePage } from './pages/profile';
import { ProfilePageEdit } from './pages/profile/indexEdit';
import { ProfilePagePassword } from './pages/profile/indexPasswordEdit';
import { SignInPage } from './pages/signIn';
import { SignUpPage } from './pages/signUp';
import { Avatar, Button, Dialog, Input, Textarea } from './shared/ui';
import { Link } from './shared/ui/link';
import { registerComponent } from './shared/utils';
import Router from './shared/utils/Router';
import { ChatLayout, Profile, ProfilePasswordEdit } from './widgets';

registerComponent('Link', Link);
registerComponent('Button', Button);
registerComponent('Input', Input);
registerComponent('Avatar', Avatar);
registerComponent('Textarea', Textarea);
registerComponent('Dialog', Dialog);
registerComponent('ChatDialog', ChatDialog);
registerComponent('SignIn', SignIn);
registerComponent('SignUp', SignUp);
registerComponent('ChatBody', ChatBody);
registerComponent('ChatFooter', ChatFooter);
registerComponent('ChatHeader', ChatHeader);
registerComponent('ChatItem', ChatItem);
registerComponent('ChatLayout', ChatLayout);
registerComponent('AvatarProfile', AvatarProfile);
registerComponent('ProfileEditList', ProfileEditList);
registerComponent('ProfileList', ProfileList);
registerComponent('ProfilePasswordList', ProfilePasswordList);
registerComponent('Profile', Profile);
registerComponent('ProfilePasswordEdit', ProfilePasswordEdit);

enum Routes {
	Index = '/',
	SignIn = '/signin',
	Register = '/sign-up',
	Profile = '/profile',
	ProfileEdit = '/profileedit',
	ProfilePassword = '/profilepassword',
	Chat = '/messenger',
}

document.addEventListener('DOMContentLoaded', async () => {
	Router.use(Routes.Index, SignInPage)
		.use(Routes.SignIn, SignInPage)
		.use(Routes.Register, SignUpPage)
		.use(Routes.Chat, ChatPage)
		.use(Routes.Profile, ProfilePage)
		.use(Routes.ProfileEdit, ProfilePageEdit)
		.use(Routes.ProfilePassword, ProfilePagePassword);

	let isProtectedRoute = true;

	switch (window.location.pathname) {
		case Routes.Index:
		case Routes.Register:
			isProtectedRoute = false;
			break;
	}

	try {
		await AuthController.fetchUser();

		Router.start();

		if (!isProtectedRoute) {
			Router.go(Routes.Profile);
		}
	} catch (e) {
		Router.start();

		if (isProtectedRoute) {
			Router.go(Routes.Index);
		}
	}
});
