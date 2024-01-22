import AuthController from './app/controllers/AuthController.ts';
import {
	AvatarProfile,
	ChatBody,
	ChatDialog,
	ChatFooter,
	ChatHeader,
	ChatInnerDialog,
	ChatItem,
	ProfileEditList,
	ProfileList,
	ProfilePasswordList,
	SignIn,
	SignUp,
} from './features/index.ts';
import { ChatPage } from './pages/chat/index.ts';
import { ProfilePage } from './pages/profile/index.ts';
import { ProfilePageEdit } from './pages/profile/indexEdit.ts';
import { ProfilePagePassword } from './pages/profile/indexPasswordEdit.ts';
import { SignInPage } from './pages/signIn/index.ts';
import { SignUpPage } from './pages/signUp/index.ts';
import {
	Avatar,
	Button,
	Dialog,
	Input,
	ListSearchUser,
	Textarea,
	Link,
} from './shared/ui/index.ts';
import { registerComponent } from './shared/utils/index.ts';
import Router from './shared/utils/Router';
import { ChatLayout, Profile, ProfilePasswordEdit } from './widgets/index.ts';

registerComponent('Link', Link);
registerComponent('Button', Button);
registerComponent('Input', Input);
registerComponent('Avatar', Avatar);
registerComponent('Textarea', Textarea);
registerComponent('Dialog', Dialog);
registerComponent('ListSearchUser', ListSearchUser);
registerComponent('ChatDialog', ChatDialog);
registerComponent('ChatInnerDialog', ChatInnerDialog);
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
	Register = '/sign-up',
	Profile = '/profile',
	ProfileEdit = '/profileedit',
	ProfilePassword = '/profilepassword',
	Chat = '/messenger',
}

document.addEventListener('DOMContentLoaded', async () => {
	Router.use(Routes.Index, SignInPage)
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
