import Component from '@/shared/utils/Component';
import template from './signUp.hbs';
import {
	validateEmailWithRegx,
	validateLoginWithRegx,
	validateNameWithRegx,
	validatePasswordWithRegx,
	validatePhoneWithRegx,
} from '@/shared/libs';
import AuthController from '@/app/controllers/AuthController';
import { serializerFormData } from '@/shared/utils';

export class SignUp extends Component {
	constructor() {
		super({
			validate: {
				email: validateEmailWithRegx,
				login: validateLoginWithRegx,
				name: validateNameWithRegx,
				surname: validateNameWithRegx,
				phone: validatePhoneWithRegx,
				password: validatePasswordWithRegx,
				confirmPassword: validatePasswordWithRegx,
			},
			events: {
				submit: (event: Event) => {
					this._onSubmit(event);
				},
			},
		});
	}

	_onSubmit(event: Event): void {
		event.preventDefault();
		const target = event.target as HTMLFormElement;

		const formData = serializerFormData(target);
		AuthController.signup(formData);
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
