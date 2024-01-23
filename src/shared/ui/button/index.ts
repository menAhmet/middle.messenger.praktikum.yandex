import Component from '@/shared/utils/Component.ts';
import template from './button.hbs';

type ButtonType = 'button' | 'submit';

interface IButton {
	label?: string;
	class?: string;
	type?: ButtonType;
	onClick?: () => void;
	events?: {
		click: () => void;
	};
}

export class Button extends Component {
	constructor(props: IButton) {
		super({
			...props,
			events: {
				click: props.onClick,
			},
		});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
