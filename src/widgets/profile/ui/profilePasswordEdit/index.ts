import Component from '@/shared/utils/Component.ts';
import template from './profilePasswordEdit.hbs';

export class ProfilePasswordEdit extends Component {
	constructor() {
		super({
			onClick: () => {},
		});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
