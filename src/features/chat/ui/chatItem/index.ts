import Component from '@/shared/utils/Component';
import template from './chatItem.hbs';

interface IChatItem {
	name?: string;
	message?: string;
	data?: string;
}

export class ChatItem extends Component {
	constructor(props: IChatItem) {
		super({ ...props });
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
