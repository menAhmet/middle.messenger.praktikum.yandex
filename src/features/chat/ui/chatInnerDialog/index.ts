import Component from '@/shared/utils/Component.ts';
import template from './chatInnerDialog.hbs';
import { validateNameWithRegx } from '@/shared/libs/index.ts';
import UserController from '@/app/controllers/UserController.ts';
import store from '@/shared/utils/Store.ts';
import ChatController from '@/app/controllers/ChatController.ts';

export class ChatInnerDialog extends Component {
	constructor() {
		super({
			validate: {
				title: validateNameWithRegx,
			},
			searchUsers: store.getState().searchUsers,
			chatUsers: store.getState().chatUsers,
			isOpen: store.getState().isChatInnerDialog,
			onOpenDialog: () => {
				this._onOpenDialog();
			},
			onCloseDialog: () => {
				this._onCloseDialog();
			},
			onSearchUsers: () => {
				this._searchUsers();
			},
			onAddUserToChat: (id: number) => {
				this._addUserToChat(id);
			},
			onRemoveUserToChat: (id: number) => {
				this._removeUserToChat(id);
			},
		});
	}

	private _onOpenDialog() {
		store.set('isChatInnerDialog', true);
	}

	private _onCloseDialog() {
		store.set('isChatInnerDialog', false);
		store.set('searchUsers', []);
	}

	private _searchUsers(): void {
		const userValue = document.getElementById('addUser') as HTMLInputElement;
		UserController.searchUsers({ login: userValue.value });
	}

	private _addUserToChat(id: number): void {
		const roomId = store.getState().selectedRoom;
		ChatController.addUserToChat(id, roomId!).finally(() =>
			this._onCloseDialog()
		);
	}

	private _removeUserToChat(id: number): void {
		const roomId = store.getState().selectedRoom;
		ChatController.deleteUserToChat(id, roomId!).finally(() =>
			this._onCloseDialog()
		);
	}

	render() {
		return this.compile(template, this.props);
	}
}
