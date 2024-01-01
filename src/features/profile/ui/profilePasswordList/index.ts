import Component from '@/shared/utils/Component';
import {
	validatePasswordWithRegx,
} from '@/shared/libs';
import template from './profilePasswordList.hbs';

export class ProfilePasswordList extends Component {
	constructor() {
		super({
			validate: {
				oldPassword: validatePasswordWithRegx,
				newPassword: validatePasswordWithRegx,
				confirmPassword: validatePasswordWithRegx,
			}
		});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
