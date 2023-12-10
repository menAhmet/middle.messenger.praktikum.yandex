import Component from '@/shared/utils/Component';
import template from './textarea.hbs';

interface ITextarea {
	class?: string;
}

export class Textarea extends Component {
	constructor(props: ITextarea) {
		super({ ...props });
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
