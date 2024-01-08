import BaseAPI from './BaseAPI';
import { DataType } from '@/shared/utils/http';

export class UserAPI extends BaseAPI {
	constructor() {
		super('/user');
	}

	update(data: DataType): Promise<unknown> {
		return this.http.put('/profile', {
			data,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	updatePassword(data: DataType): Promise<unknown> {
		return this.http.put('/password', {
			data,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	updateAavatar(data: FormData): Promise<unknown> {
		return this.http.put('/profile/avatar', { data });
	}

	read = undefined;
	create = undefined;
	delete = undefined;
}

export default new UserAPI();
