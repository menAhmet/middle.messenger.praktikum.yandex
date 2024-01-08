import Component from '@/shared/utils/Component';
import {
	validateEmailWithRegx,
	validateLoginWithRegx,
	validateNameWithRegx,
	validatePhoneWithRegx,
} from '@/shared/libs';
import template from './profileList.hbs';
import store, { withStore } from '@/shared/utils/Store';
import { IUser } from '@/shared/types/auth.interface';
import UserController from '@/app/controllers/UserController';
import { serializerFormData } from '@/shared/utils';

export class ProfileListBase extends Component {
	public user: IUser;
	constructor() {
		super({
			validate: {
				email: validateEmailWithRegx,
				login: validateLoginWithRegx,
				first_name: validateNameWithRegx,
				second_name: validateNameWithRegx,
				display_name: validateNameWithRegx,
				phone: validatePhoneWithRegx,
			},
			events: {
				submit: (event: Event) => {
					this._onSubmit(event);
				},
			},
		});

		this.user = store.getState().user;
	}

	private _onSubmit(event: Event): void {
		event.preventDefault();
		const target = event.target as HTMLFormElement;

		const formData = serializerFormData(target);
		UserController.changeUser(formData);
	}

	protected render(): DocumentFragment {
		return this.compile(template, { ...this.props });
	}
}

const withUser = withStore((state) => ({ ...state }));
export const ProfileList = withUser(ProfileListBase);
