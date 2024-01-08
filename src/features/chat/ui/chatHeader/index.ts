import Component from '@/shared/utils/Component';
import template from './chatHeader.hbs';

interface IChatHeader {
	title?: string;
}

export class ChatHeader extends Component {
	constructor(props: IChatHeader) {
		super({ ...props });
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
