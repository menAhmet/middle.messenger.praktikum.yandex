import Component from '@/shared/utils/Component.ts';
import template from './chatHeader.hbs';
import { IChat } from '@/shared/types/index.ts';

interface IChatHeader {
	selectedRoom?: IChat;
	users?: IChat[];
	onRemoveRoomById?: (roomId: string) => void;
}

export class ChatHeader extends Component {
	constructor(props: IChatHeader) {
		super({
			...props,
			onRemove: () => {
				this._onRemoveRoom(props.selectedRoom!);
			},
		});
	}

	private _onRemoveRoom(chat: IChat): void {
		this.props.onRemoveRoomById?.call(this, chat.id);
	}

	protected render(): DocumentFragment {
		return this.compile(template, { ...this.props });
	}
}
