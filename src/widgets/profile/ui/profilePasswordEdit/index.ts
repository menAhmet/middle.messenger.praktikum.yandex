import Component from '@/shared/utils/Component';
import template from './profilePasswordEdit.hbs';
import { render } from '@/shared/utils';

export class ProfilePasswordEdit extends Component {
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
