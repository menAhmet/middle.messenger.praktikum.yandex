import Component from '@/shared/utils/Component.ts';
import template from './profile.hbs';

export class ProfilePage extends Component {
	constructor() {
		super({});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
