import Component from '@/shared/utils/Component';
import template from './chatFooter.hbs';

export class ChatFooter extends Component {
	constructor() {
		super({});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
