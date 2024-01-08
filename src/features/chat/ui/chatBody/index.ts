import Component from '@/shared/utils/Component';
import template from './chatBody.hbs';
import { IMessage } from '@/shared/types';

interface IChatBody {
	messages?: IMessage[];
}

export class ChatBody extends Component {
	constructor(props: IChatBody) {
		super({ ...props });
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
