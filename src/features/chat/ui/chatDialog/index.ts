import Component from '@/shared/utils/Component';
import template from './chatDialog.hbs';
import { validateNameWithRegx } from '@/shared/libs';
import { serializerFormData } from '@/shared/utils';
import ChatController from '@/app/controllers/ChatController';
import store from '@/shared/utils/Store';

export class ChatDialog extends Component {
	constructor() {
		super({
			validate: {
				title: validateNameWithRegx,
			},
			events: {
				submit: (event: Event) => {
					this._onSubmit(event);
				},
			},
			isOpen: store.getState().isChatDialog,
			onOpen: () => {
				this._onOpenDialog();
			},
			onClose: () => {
				this._onCloseDialog();
			},
		});
	}

	private _onOpenDialog() {
		store.set('isChatDialog', true);
	}

	private _onCloseDialog() {
		store.set('isChatDialog', false);
	}

	private _onSubmit(event: Event): void {
		event.preventDefault();
		const target = event.target as HTMLFormElement;

		const formData = serializerFormData(target);

		ChatController.createChatRoom(formData).finally(() =>
			this._onCloseDialog()
		);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
