import Component from '@/shared/utils/Component.ts';
import template from './profileEdit.hbs';

export class ProfilePageEdit extends Component {
	constructor() {
		super({});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
