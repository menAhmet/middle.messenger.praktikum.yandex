import Component from '@/shared/utils/Component.ts';
import template from './dialog.hbs';

interface IDialog {
	id?: string;
	open?: boolean;
}

export class Dialog extends Component {
	constructor(props: IDialog) {
		super({
			...props,
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
