import Component from '@/shared/utils/Component';
import { render } from '@/shared/utils';
import template from './signIn.hbs';
import { validateLoginWithRegx, validatePasswordWithRegx } from '@/shared/libs';

export class SignIn extends Component {
	constructor() {
		super({
			validate: {
				login: validateLoginWithRegx,
				password: validatePasswordWithRegx,
			},
			onClick: () => {
				render('signup');
			},
			onClickChat: () => {
				render('chat');
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
