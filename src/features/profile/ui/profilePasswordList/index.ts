import Component from '@/shared/utils/Component.ts';
import { validatePasswordWithRegx } from '@/shared/libs/index.ts';
import template from './profilePasswordList.hbs';
import { serializerFormData } from '@/shared/utils/index.ts';
import UserController from '@/app/controllers/UserController.ts';

export class ProfilePasswordList extends Component {
	constructor() {
		super({
			validate: {
				oldPassword: validatePasswordWithRegx,
				newPassword: validatePasswordWithRegx,
				confirmPassword: validatePasswordWithRegx,
			},
			events: {
				submit: (event: Event) => {
					this._onSubmit(event);
				},
			},
		});
	}

	private _onSubmit(event: Event): void {
		event.preventDefault();
		const target = event.target as HTMLFormElement;

		const formData = serializerFormData(target);
		UserController.changePassword(formData);
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
