import Component from '@/shared/utils/Component';
import template from './chatLayout.hbs';
import { render } from '@/shared/utils';
import { validateSearchWithRegx } from '@/shared/libs';

export class ChatLayout extends Component {
	constructor() {
		super({
			validate: {
				search: validateSearchWithRegx,
			},
			onClick: () => {
				render('profile');
			},
		});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
