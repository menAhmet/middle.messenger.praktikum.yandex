import Component from '@/shared/utils/Component.ts';
import template from './profile.hbs';
import AuthController from '@/app/controllers/AuthController.ts';

export class Profile extends Component {
	constructor() {
		super({
			onClick: () => {},
		});

		AuthController.fetchUser();
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
