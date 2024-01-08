import Component from '@/shared/utils/Component';
import template from './profileEditList.hbs';
import AuthController from '@/app/controllers/AuthController';

export class ProfileEditList extends Component {
	constructor() {
		super({
			onClickProfileEdit: () => {},
			onClickPasswordEdit: () => {},
			onClickSignIn: () => {
				AuthController.logout();
			},
		});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
