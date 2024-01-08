/* eslint-disable @typescript-eslint/no-explicit-any */
import Component from './Component';
import Router from './Router';

export interface IWithRouter {
	router: typeof Router;
}

export function withRouter(Block: typeof Component<any>) {
	type Props = typeof Block extends typeof Component<
		infer P extends Record<string, any>
	>
		? P
		: any;

	return class WithRouter extends Block {
		constructor(props: Props & IWithRouter) {
			super({ ...props, router: Router });
		}
	};
}
