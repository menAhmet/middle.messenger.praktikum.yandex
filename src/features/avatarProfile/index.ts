import Component from '@/shared/utils/Component.ts';
import template from './avatarProfile.hbs';
import UserController from '@/app/controllers/UserController.ts';
import store, { withStore } from '@/shared/utils/Store.ts';
import HTTPTransport from '@/shared/utils/http.ts';

export class AvatarBase extends Component {
	constructor() {
		super({
			events: {
				submit: (event: Event) => {
					this._onSubmit(event);
				},
			},
			avatar:
				HTTPTransport.API_URL + '/resources' + store.getState().user.avatar,
		});
	}

	private _onSubmit(event: Event): void {
		event.preventDefault();

		const target = event.target as HTMLFormElement;

		const icon = Object.values(target)
			.filter((item) => item instanceof HTMLInputElement)
			.map((child) => child.files[0]);

		const data = new FormData();
		data.append('avatar', icon[0]);

		UserController.changeAvatar(data);
	}

	protected render(): DocumentFragment {
		return this.compile(template, { ...this.props });
	}
}

const withUser = withStore((state) => ({
	avatar: HTTPTransport.API_URL + '/resources' + state.user.avatar,
}));
export const AvatarProfile = withUser(AvatarBase);
