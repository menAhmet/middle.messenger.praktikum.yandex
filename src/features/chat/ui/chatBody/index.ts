import Component from '@/shared/utils/Component';
import template from './chatBody.hbs';

export class ChatBody extends Component {
	constructor() {
		super({});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
