import Component from '@/shared/utils/Component.ts';
import template from './signUp.hbs';
export class SignUpPage extends Component {
	constructor() {
		super({});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
