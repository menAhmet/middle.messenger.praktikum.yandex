import CAPI from '../api/ChatAPI';
import { DataType } from '@/shared/utils/http';
import { ChatAPI } from '../api/ChatAPI';
import store from '@/shared/utils/Store';
import MessageController from './MessageController';

class ChatController {
	private readonly api: ChatAPI;

	constructor() {
		this.api = CAPI;
	}

	async createChatRoom(data: DataType) {
		try {
			await this.api.create(data);
			this.fetchChats();
		} catch (error) {
			console.error(error);
		}
	}

	async fetchChats() {
		try {
			const chats = await this.api.read();

			chats.forEach(async (chat) => {
				const token = await this.getToken(chat.id);
				await MessageController.connect(chat.id, token);
			});

			store.set('chats', chats);
		} catch (error) {
			console.error(error);
		}
	}

	async deleteChatRoom(id: number) {
		try {
			await this.api.delete(id);

			this.fetchChats();
		} catch (error) {
			console.error(error);
		}
	}

	getToken(id: number) {
		return this.api.getToken(id);
	}

	selectRoom(id: number) {
		store.set('selectedRoom', id);
	}
}

export default new ChatController();
