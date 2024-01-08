import Router from '@/shared/utils/Router';
import API, { AuthAPI } from '../api/AuthAPI';
import { DataType } from '@/shared/utils/http';
import store from '@/shared/utils/Store';

class AuthController {
	private readonly api: AuthAPI;

	constructor() {
		this.api = API;
	}

	async signin(data: DataType) {
		try {
			await this.api.signin(data);
			await this.fetchUser();

			Router.go('/profile');
		} catch (error) {
			console.error(error);
		}
	}

	async signup(data: DataType) {
		try {
			await this.api.signup(data);

			await this.fetchUser();

			Router.go('/signin');
		} catch (error) {
			console.error(error);
		}
	}

	async fetchUser() {
		const user = await this.api.read();
		store.set('user', user);
	}

	async logout() {
		try {
			//MessagesController.closeAll();

			await this.api.logout();

			Router.go('/');
		} catch (error) {
			console.error(error);
		}
	}
}

export default new AuthController();
