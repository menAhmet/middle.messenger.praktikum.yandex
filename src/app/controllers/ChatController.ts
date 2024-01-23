import CAPI from '../api/ChatAPI';
import { DataType } from '@/shared/utils/http';
import { ChatAPI } from '../api/ChatAPI';
import store from '@/shared/utils/Store.ts';
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

	async addUserToChat(userId: number, chatId: number) {
		try {
			await this.api.addUserToChat([userId], chatId);
			await this.fetchChatsUsers(chatId);
		} catch (error) {
			console.error(error);
		}
	}

	async deleteUserToChat(userId: number, chatId: number) {
		try {
			await this.api.deleteUserToChat([userId], chatId);
			await this.fetchChatsUsers(chatId);
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

	async fetchChatsUsers(id: number) {
		try {
			const users = await this.api.readChatUsers(id);
			store.set('chatUsers', users);
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
		this.fetchChatsUsers(id);
		store.set('selectedRoom', id);
	}
}

export default new ChatController();
