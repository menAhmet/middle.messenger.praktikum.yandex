import Component from '@/shared/utils/Component';
import { IWithRouter, withRouter } from '@/shared/utils/withRouter';
import template from './link.hbs';

interface ILinkProps extends IWithRouter {
	to: string;
	label: string;
	events?: {
		click: () => void;
	};
}

class BaseLink extends Component<ILinkProps> {
	constructor(props: ILinkProps) {
		super({
			...props,
			events: {
				click: () => this.navigate(),
			},
		});
	}

	navigate() {
		this.props.router.go(this.props.to);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const Link = withRouter(BaseLink);
