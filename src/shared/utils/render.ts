import { ChatPage } from '@/pages/chat';
import { ProfilePage } from '@/pages/profile';
import { ProfilePageEdit } from '@/pages/profile/indexEdit';
import { ProfilePagePassword } from '@/pages/profile/indexPasswordEdit';
import { SignInPage } from '@/pages/signIn';
import { SignUpPage } from '@/pages/signUp';

const ROUTES = {
	signin: SignInPage,
	signup: SignUpPage,
	chat: ChatPage,
	profile: ProfilePage,
	profileedit: ProfilePageEdit,
	profilepasswordedit: ProfilePagePassword,
};

export const render = (name: keyof typeof ROUTES) => {
	const root = document.querySelector('#root')!;
	root.innerHTML = '';

	const Page = ROUTES[name];
	const page = new Page();

	root.append(page.getContent()!);

	page.dispatchComponentDidMount();
};
