import Component from '@/shared/utils/Component.ts';
import template from './avatar.hbs';

interface IAvatar {
	src?: string;
	class?: string;
}

export class Avatar extends Component {
	constructor(props: IAvatar) {
		super({ ...props });
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
