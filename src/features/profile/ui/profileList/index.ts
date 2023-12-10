import Component from '@/shared/utils/Component';
import template from './profileList.hbs';

export class ProfileList extends Component {
	constructor() {
		super({});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
