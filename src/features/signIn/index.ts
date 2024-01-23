import Component from '@/shared/utils/Component.ts';
import template from './signIn.hbs';
import {
	validateLoginWithRegx,
	validatePasswordWithRegx,
} from '@/shared/libs/index.ts';
import AuthController from '@/app/controllers/AuthController.ts';
import { serializerFormData } from '@/shared/utils/index.ts';

export class SignIn extends Component {
	constructor() {
		super({
			validate: {
				login: validateLoginWithRegx,
				password: validatePasswordWithRegx,
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

		AuthController.signin(formData);
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
