import Component from '@/shared/utils/Component';
import template from './signUp.hbs';
import { render } from '@/shared/utils';
import {
	validateEmailWithRegx,
	validateLoginWithRegx,
	validateNameWithRegx,
	validatePasswordWithRegx,
	validatePhoneWithRegx,
} from '@/shared/libs';

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
			onClick: () => {
				render('signin');
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
		new FormData(target);
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
