import Component from '@/shared/utils/Component';
import template from './chatDialog.hbs';
import { validateNameWithRegx } from '@/shared/libs';
import { serializerFormData } from '@/shared/utils';
import ChatController from '@/app/controllers/ChatController';

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
			onClick: () => {
				this._dialogOpen();
			},
			onClose: () => {
				this._dialogClose();
			},
		});
	}

	private _dialogOpen(): void {
		const dialog = document.getElementById('dialog');
		(dialog as HTMLDialogElement).show();
	}

	private _dialogClose(): void {
		const dialog = document.getElementById('dialog');
		(dialog as HTMLDialogElement).close();
	}

	private _onSubmit(event: Event): void {
		event.preventDefault();
		const target = event.target as HTMLFormElement;

		const formData = serializerFormData(target);

		ChatController.createChatRoom(formData);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
