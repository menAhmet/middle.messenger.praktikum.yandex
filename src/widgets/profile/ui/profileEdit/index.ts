import Component from '@/shared/utils/Component';
import template from './profileEdit.hbs';
import { render } from '@/shared/utils';

export class ProfileEdit extends Component {
	constructor() {
		super({
			onClick: () => {
				render('profile');
			},
		});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
