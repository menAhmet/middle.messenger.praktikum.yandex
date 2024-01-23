import Component from '@/shared/utils/Component.ts';
import template from './signIn.hbs';

export class SignInPage extends Component {
	constructor() {
		super({});
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
