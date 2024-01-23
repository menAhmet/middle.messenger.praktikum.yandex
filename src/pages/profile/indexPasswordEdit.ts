import Component from '@/shared/utils/Component.ts';
import template from './profilePasswordEdit.hbs';

export class ProfilePagePassword extends Component {
	constructor() {
		super({});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
