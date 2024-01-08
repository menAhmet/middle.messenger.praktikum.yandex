import Component from '@/shared/utils/Component';
import template from './dialog.hbs';

export class Dialog extends Component {
	constructor() {
		super({});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
