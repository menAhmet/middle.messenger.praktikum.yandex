import { IChat } from '@/shared/types/chat.interface';
import BaseAPI from './BaseAPI';
import { DataType } from '@/shared/utils/http';

type RToken = {
	token: string;
};

export class ChatAPI extends BaseAPI {
	constructor() {
		super('/chats');
	}

	create(data: DataType): Promise<unknown> {
		return this.http.post('', {
			data,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	delete(id: number): Promise<unknown> {
		const data = { chatId: id };

		return this.http.delete('', {
			data,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	read(): Promise<IChat[]> {
		return this.http.get('') as Promise<IChat[]>;
	}

	async getToken(id: number): Promise<string> {
		const response = await this.http.post(`/token/${id}`);
		return (response as RToken).token;
	}

	update = undefined;
}

export default new ChatAPI();
