import Component from '@/shared/utils/Component';
import template from './profilePasswordList.hbs';

export class ProfilePasswordList extends Component {
	constructor() {
		super({});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
