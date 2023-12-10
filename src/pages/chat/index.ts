import Component from '@/shared/utils/Component';
import template from './chat.hbs';
export class ChatPage extends Component {
	constructor() {
		super({});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
