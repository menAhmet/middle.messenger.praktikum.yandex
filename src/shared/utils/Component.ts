import { nanoid } from 'nanoid';
import { EventBus } from './EventBus';

export type Props = Record<string | symbol, unknown>;
export type Children = Record<string, Element | Component>;

class Component {
	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	};

	public id = nanoid(6);
	protected props: Props;
	protected refs: Record<string, Component> = {};
	public children: Record<string, Component>;
	private _eventBus: () => EventBus;
	private _element: HTMLElement | null = null;

	constructor(propsWithChildren = {}) {
		const eventBus = new EventBus();

		const { props, children } = this._getChildrenAndProps(propsWithChildren);

		this.props = this._makePropsProxy(props, this);
		this.children = children;

		this._eventBus = () => eventBus;

		this._registerEvents(eventBus);

		eventBus.emit(Component.EVENTS.INIT);
	}

	private _getChildrenAndProps(childrenAndProps: Props) {
		const props: Record<string, unknown> = {};
		const children: Record<string, Component> = {};

		Object.entries(childrenAndProps).forEach(([key, value]) => {
			if (value instanceof Component) {
				children[key] = value;
			} else {
				props[key] = value;
			}
		});

		return { props, children };
	}

	_addEvents() {
		const { events = {} } = this.props as {
			events: Record<string, () => void>;
		};

		Object.keys(events).forEach((eventName) => {
			this._element?.addEventListener(eventName, events[eventName]);
		});
	}

	_registerEvents(eventBus: EventBus) {
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
		Object.values(this.children).forEach((child) => {
			child.dispatchComponentDidMount();
		});
	}

	protected componentDidMount() {
		return true;
	}

	public dispatchComponentDidMount() {
		this._eventBus().emit(Component.EVENTS.FLOW_CDM);
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

		if (this._element) {
			this._element.replaceWith(newElement);
		}

		this._element = newElement;

		this._addEvents();
	}

	protected compile(template: (context: Props) => string, context) {
		const contextAndStubs = { ...context, __refs: this.refs };

		const html = template(contextAndStubs);

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

	_makePropsProxy(
		props: { [index: string | symbol]: unknown },
		self: Component
	) {
		return new Proxy(props, {
			get(target, prop) {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set(target, prop, value) {
				const oldTarget = { ...target };

				target[prop] = value;

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
