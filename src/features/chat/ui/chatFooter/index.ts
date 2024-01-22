import Component from '@/shared/utils/Component.ts';
import template from './chatFooter.hbs';
import MessageController from '@/app/controllers/MessageController.ts';

interface IChatFooter {
	selectedRoom?: number | undefined;
}

export class ChatFooter extends Component {
	constructor(props: IChatFooter) {
		super({
			...props,
			click: () => {
				const message = document.getElementById(
					'message'
				) as HTMLTextAreaElement;
				MessageController.sendMessage(props.selectedRoom!, message.value);
				message.value = '';
			},
		});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
