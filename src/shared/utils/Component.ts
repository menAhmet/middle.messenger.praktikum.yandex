/* eslint-disable @typescript-eslint/no-explicit-any */
import { nanoid } from 'nanoid';
import { EventBus } from './EventBus';

export type Props = Record<string | symbol, unknown>;
export type Children = Record<string, Element | Component>;

class Component<P extends Record<string, any> = any> {
	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	} as const;

	public id = nanoid(6);
	protected props: P;
	protected refs: Record<string, Component> = {};
	public children: Record<string, Component | Component[]>;
	private _eventBus: () => EventBus;
	private _element: HTMLElement | null = null;

	constructor(propsWithChildren: P) {
		const eventBus = new EventBus();

		const { props, children } = this._getChildrenAndProps(propsWithChildren);

		this.props = this._makePropsProxy(props, this);
		this.children = children;

		this._eventBus = () => eventBus;

		this._registerEvents(eventBus);

		eventBus.emit(Component.EVENTS.INIT);
	}

	private _getChildrenAndProps(childrenAndProps: P): {
		props: P;
		children: Record<string, Component | Component[]>;
	} {
		const props: Record<string, unknown> = {};
		const children: Record<string, Component | Component[]> = {};

		Object.entries(childrenAndProps).forEach(([key, value]) => {
			if (value instanceof Component) {
				children[key as string] = value;
			} else {
				props[key as string] = value;
			}
		});

		return { props: props as P, children };
	}

	private _addEvents() {
		const { events = {} } = this.props as P;

		Object.keys(events).forEach((eventName) => {
			this._element?.addEventListener(eventName, events[eventName]);
		});
	}

	private _removeEvents() {
		const { events = {} } = this.props as P;
		if (this._element) {
			Object.keys(events).forEach((eventName) => {
				(this._element as HTMLElement).removeEventListener(
					eventName,
					events[eventName]
				);
			});
		}
	}

	private _registerEvents(eventBus: EventBus) {
		eventBus.on(Component.EVENTS.INIT, this._init.bind(this));
		eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	private _init() {
		this.init();

		this._eventBus().emit(Component.EVENTS.FLOW_RENDER);
	}

	protected init() {}

	private _componentDidMount() {
		this.componentDidMount();
	}

	protected componentDidMount() {
		return true;
	}

	public dispatchComponentDidMount() {
		this._eventBus().emit(Component.EVENTS.FLOW_CDM);

		Object.values(this.children).forEach((child) => {
			if (Array.isArray(child)) {
				child.forEach((ch) => ch.dispatchComponentDidMount());
			} else {
				child.dispatchComponentDidMount();
			}
		});
	}

	private _componentDidUpdate() {
		if (this.componentDidUpdate()) {
			this._eventBus().emit(Component.EVENTS.FLOW_RENDER);
		}
	}

	protected componentDidUpdate() {
		return true;
	}

	setProps = (nextProps: Props) => {
		if (!nextProps) return;

		Object.assign(this.props, nextProps);
	};

	get element() {
		return this._element;
	}

	private _render() {
		const fragment = this.render();

		const newElement = fragment.firstElementChild as HTMLElement;

		this._removeEvents();

		if (this._element) {
			this._element.replaceWith(newElement);
		}

		this._element = newElement;

		this._addEvents();
	}

	protected compile(template: (context: Component) => string, context: Props) {
		const contextAndStubs = { ...context, __refs: this.refs, __children: [] };

		const html = template(contextAndStubs as never);

		const temp = document.createElement('template');

		temp.innerHTML = html;

		contextAndStubs.__children?.forEach(
			({ embed }: { embed: (fragment: DocumentFragment) => void }) => {
				embed(temp.content);
			}
		);

		return temp.content;
	}

	protected render(): DocumentFragment {
		return new DocumentFragment();
	}

	getContent() {
		return this.element;
	}

	private _makePropsProxy(props: P, self: Component) {
		return new Proxy(props, {
			get(target, prop: string) {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set(target, prop, value) {
				const oldTarget = { ...target };

				target[prop as keyof P] = value;

				self._eventBus().emit(Component.EVENTS.FLOW_CDU, oldTarget, target);
				return true;
			},
			deleteProperty() {
				throw new Error('Нет доступа');
			},
		});
	}

	_createDocumentElement(tagName: string) {
		return document.createElement(tagName);
	}

	show() {
		this.getContent()!.style.display = 'block';
	}

	hide() {
		this.getContent()!.style.display = 'none';
	}
}
export default Component;
