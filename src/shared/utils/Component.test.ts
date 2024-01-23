import esmock from 'esmock';
import { expect } from 'chai';
import sinon from 'sinon';
import type ComponentType from './Component.ts';

const eventBusMock = {
	on: sinon.fake(),
	emit: sinon.fake(),
};

describe('Component', async () => {
	const { default: Block } = (await esmock('./Component', {
		'./EventBus': {
			EventBus: class {
				emit = eventBusMock.emit;
				on = eventBusMock.on;
			},
		},
	})) as { default: typeof ComponentType };

	class ComponentMock extends Block {}

	test('should fire init event on initialization', () => {
		new ComponentMock({});

		expect(eventBusMock.emit.calledWith('init')).to.eq(true);
	});

	test('should fire CDU event on props update', () => {
		const components = new ComponentMock({});

		components.setProps({ test: 'test' });

		expect(eventBusMock.emit.calledWith('flow:component-did-update')).to.eq(
			true
		);
	});
});
