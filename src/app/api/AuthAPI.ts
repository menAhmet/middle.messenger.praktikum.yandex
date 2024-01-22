import { IUser } from '@/shared/types/auth.interface.ts';
import BaseAPI from './BaseAPI';
import { DataType } from '@/shared/utils/http';

export class AuthAPI extends BaseAPI {
	constructor() {
		super('/auth');
	}

	signin(data: DataType) {
		return this.http.post('/signin', {
			data,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	signup(data: DataType) {
		return this.http.post('/signup', {
			data,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	read(): Promise<IUser> {
		return this.http.get('/user') as Promise<IUser>;
	}

	logout() {
		return this.http.post('/logout');
	}

	create = undefined;
	update = undefined;
	delete = undefined;
}

export default new AuthAPI();
