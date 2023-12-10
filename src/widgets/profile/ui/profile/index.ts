import Component from '@/shared/utils/Component';
import template from './profile.hbs';
import { render } from '@/shared/utils';

export class Profile extends Component {
	constructor() {
		super({
			onClick: () => {
				render('chat');
			},
		});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
