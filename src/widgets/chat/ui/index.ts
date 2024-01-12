import Component from '@/shared/utils/Component';
import template from './chatLayout.hbs';
import { validateSearchWithRegx } from '@/shared/libs';
import { withStore } from '@/shared/utils/Store';
import ChatController from '@/app/controllers/ChatController';
import { IUser } from '@/shared/types/auth.interface';

export class ChatLayoutBase extends Component {
	constructor() {
		super({
			validate: {
				search: validateSearchWithRegx,
			},
			onClick: (user: IUser) => {
				ChatController.selectRoom(user.id);
			},
			onRemoveRoomById: (roomId: number) => {
				ChatController.deleteChatRoom(roomId);
			},
		});
		ChatController.fetchChats();
	}

	protected render(): DocumentFragment {
		return this.compile(template, { ...this.props });
	}
}

const withChats = withStore((state) => ({
	chats: [...(state.chats || [])],
	chatUsers: [...(state.chatUsers || [])],
	selectedRoom: (state.chats || []).find(({ id }) => id === state.selectedRoom),
	messages: (state.messages || {})[state.selectedRoom as number] || [],
}));
export const ChatLayout = withChats(ChatLayoutBase);
