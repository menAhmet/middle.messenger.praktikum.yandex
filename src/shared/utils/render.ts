import Component from './Component.ts';

export const render = (query: string, block: Component) => {
	const root = document.querySelector(query);

	if (root === null) {
		throw new Error(`root not found by selector "${query}"`);
	}

	root.innerHTML = '';

	root.append(block.getContent()!);

	return root;
};
