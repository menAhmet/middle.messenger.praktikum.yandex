import Component from '@/shared/utils/Component';
import template from './input.hbs';

type InputType = 'email' | 'text' | 'phone' | 'tel';

interface IInput {
	value?: string;
	class?: string;
	placeholder?: string;
	name?: string;
	type?: InputType;
	message?: string;
	validate?: (value: string) => string;
	events?: {
		blur: (event: FocusEvent) => void;
	};
}

export class Input extends Component {
	constructor(props: IInput) {
		super({
			...props,
			events: {
				blur: (event: FocusEvent) => {
					this._validate(event);
				},
			},
		});
	}

	private _validate(event: FocusEvent): void {
		const { value } = event.target as HTMLInputElement;

		const error = document.querySelector(
			`#${this.props.name}`
		) as HTMLParagraphElement;

		const validate = (this.props as IInput).validate!(value);

		if (validate) {
			error.textContent = validate;
			error.classList.add('error');
		} else {
			error.textContent = '';
			error.classList.remove('error');
		}
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}
