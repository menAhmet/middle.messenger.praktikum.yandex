import Component from '@/shared/utils/Component.ts';
import template from './textarea.hbs';

interface ITextarea {
	class?: string;
	id?: string;
}

export class Textarea extends Component {
	constructor(props: ITextarea) {
		super({ ...props });
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
