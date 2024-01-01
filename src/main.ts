import {
	ChatBody,
	ChatFooter,
	ChatHeader,
	ChatItem,
	ProfileEditList,
	ProfileList,
	ProfilePasswordList,
	SignIn,
	SignUp,
} from './features';
import { Avatar, Button, Input, Textarea } from './shared/ui';
import { registerComponent, render } from './shared/utils';
import {
	ChatLayout,
	Profile,
	ProfileEdit,
	ProfilePasswordEdit,
} from './widgets';

registerComponent('Button', Button);
registerComponent('Input', Input);
registerComponent('Avatar', Avatar);
registerComponent('Textarea', Textarea);
registerComponent('SignIn', SignIn);
registerComponent('SignUp', SignUp);
registerComponent('ChatBody', ChatBody);
registerComponent('ChatFooter', ChatFooter);
registerComponent('ChatHeader', ChatHeader);
registerComponent('ChatItem', ChatItem);
registerComponent('ChatLayout', ChatLayout);
registerComponent('ProfileEditList', ProfileEditList);
registerComponent('ProfileList', ProfileList);
registerComponent('ProfilePasswordList', ProfilePasswordList);
registerComponent('Profile', Profile);
registerComponent('ProfileEdit', ProfileEdit);
registerComponent('ProfilePasswordEdit', ProfilePasswordEdit);

document.addEventListener('DOMContentLoaded', () => {
	render('signin');
});
