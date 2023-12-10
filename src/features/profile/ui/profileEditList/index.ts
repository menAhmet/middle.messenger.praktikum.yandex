import Component from '@/shared/utils/Component';
import { render } from '@/shared/utils';
import template from './profileEditList.hbs';

export class ProfileEditList extends Component {
	constructor() {
		super({
			onClickProfileEdit: () => {
				render('profileedit');
			},
			onClickPasswordEdit: () => {
				render('profilepasswordedit');
			},
			onClickSignIn: () => {
				render('signin');
			},
		});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
