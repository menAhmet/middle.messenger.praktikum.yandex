import { IUser } from './auth.interface';

export interface IChat {
	id: number;
	title: string;
	avatar: string;
	unread_count: number;
	last_message: {
		user: IUser;
		time: string;
		content: string;
	};
}
