import Component from '@/shared/utils/Component';
import {
	validateEmailWithRegx,
	validateLoginWithRegx,
	validateNameWithRegx,
	validatePhoneWithRegx
} from '@/shared/libs';
import template from './profileList.hbs';

export class ProfileList extends Component {
	constructor() {
		super({
			validate: {
				email: validateEmailWithRegx,
				login: validateLoginWithRegx,
				first_name: validateNameWithRegx,
				second_name: validateNameWithRegx,
				display_name: validateNameWithRegx,
				phone: validatePhoneWithRegx
			}
		});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
