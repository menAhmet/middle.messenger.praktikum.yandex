import store from '@/shared/utils/Store';
import UAPI from '../api/UserAPI';
import { UserAPI } from '../api/UserAPI';
import { DataType } from '@/shared/utils/http';

class UserController {
	private readonly api: UserAPI;

	constructor() {
		this.api = UAPI;
	}

	async changeUser(data: DataType) {
		try {
			await this.api.update(data);
		} catch (error) {
			console.error(error);
		}
	}

	async changePassword(data: DataType) {
		try {
			await this.api.updatePassword(data);
		} catch (error) {
			console.error(error);
		}
	}

	async changeAvatar(data: FormData) {
		try {
			const user = await this.api.updateAavatar(data);
			store.set('user', user);
		} catch (error) {
			console.error(error);
		}
	}

	async searchUsers(data: DataType) {
		try {
			const users = await this.api.search(data);
			store.set('searchUsers', users);
		} catch (error) {
			console.error(error);
		}
	}
}

export default new UserController();
