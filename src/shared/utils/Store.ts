import { set } from './helpers';
import { IUser } from '../types/auth.interface';
import Component from './Component';
import { EventBus } from './EventBus';
import { IChat } from '../types/chat.interface';
import { IMessage } from '../types';

export enum StoreEvents {
	Updated = 'updated',
}

interface State {
	user: IUser;
	chatUsers: IChat[];
	searchUsers: IUser[];
	chats: IChat[];
	messages: Record<number, IMessage[]>;
	selectedRoom?: number;
	isChatInnerDialog: boolean;
	isChatDialog: boolean;
}

export class Store extends EventBus {
	private state: State = {} as State;

	public set(keypath: keyof State, data: unknown) {
		set(this.state, keypath, data);

		this.emit(StoreEvents.Updated, this.getState() as never);
	}

	public getState() {
		return this.state;
	}
}

const store = new Store();

export function withStore<SP>(mapStateToProps: (state: State) => SP) {
	return function wrap<P>(Block: typeof Component) {
		return class WithStore extends Block {
			constructor(props: Omit<P, keyof SP>) {
				let previousState = mapStateToProps(store.getState());

				super({ ...(props as P), ...previousState });

				store.on(StoreEvents.Updated, () => {
					const stateProps = mapStateToProps(store.getState());

					previousState = stateProps;

					this.setProps({ ...stateProps } as never);
				});
			}
		};
	};
}

export default store;
