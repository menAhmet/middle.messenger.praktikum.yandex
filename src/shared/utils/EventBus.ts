import { Props } from './Component';

type ListenerType = Record<string, Array<(...args: Props[]) => void>>;

export class EventBus {
	private readonly _listeners: ListenerType = {};

	constructor() {
		this._listeners = {};
	}

	on(event: string, callback: (...args: Props[]) => void) {
		if (!this._listeners[event]) {
			this._listeners[event] = [];
		}
		this._listeners[event].push(callback);
	}

	off(event: string, callback: (...args: Props[]) => void) {
		if (!this._listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this._listeners[event] = this._listeners[event].filter(
			(listener) => listener !== callback
		);
	}

	emit(event: string, ...args: Props[]) {
		if (!this._listeners[event]) {
			return;
		}

		this._listeners[event].forEach((listener) => {
			listener(...args);
		});
	}
}
