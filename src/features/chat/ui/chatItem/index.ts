import Component from '@/shared/utils/Component';
import template from './chatItem.hbs';
import { IUser } from '@/shared/types/auth.interface';

interface IChatItem {
	user?: IUser;
	title?: string;
	message?: string;
	onClick?: () => void;
	events?: {
		click: () => void;
	};
}

export class ChatItem extends Component {
	constructor(props: IChatItem) {
		super({
			...props,
			events: {
				click: () => {
					this._selectRoom(props.user!);
				},
			},
		});
	}

	private _selectRoom(user: IUser): void {
		this.props.onClick?.call(this, user);
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
