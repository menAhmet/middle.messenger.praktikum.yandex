import Component from '@/shared/utils/Component.ts';
import template from './listSearchUser.hbs';

interface IListSearchUser {
	name?: string;
	userId?: number;
	label?: string;
	onSelectRoom?: () => void;
	events?: {
		click: () => void;
	};
}

export class ListSearchUser extends Component {
	constructor(props: IListSearchUser) {
		super({
			...props,
			events: {
				click: () => {
					this._selectRoom(props.userId!);
				},
			},
		});
	}

	private _selectRoom(id: number): void {
		this.props.onSelectRoom?.call(this, id);
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
