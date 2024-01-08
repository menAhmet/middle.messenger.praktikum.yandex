export type Indexed<T = unknown> = {
	[key in string]: T;
};

export const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
	for (const p in rhs) {
		if (!Object.prototype.hasOwnProperty.call(rhs, p)) {
			continue;
		}

		try {
			if ((rhs[p] as Indexed).constructor === Object) {
				rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
			} else {
				lhs[p] = rhs[p];
			}
		} catch (e) {
			lhs[p] = rhs[p];
		}
	}

	return lhs;
};

export const set = (
	object: Indexed | unknown,
	path: string,
	value: unknown
): Indexed | unknown => {
	if (typeof object !== 'object' || object === null) {
		return object;
	}

	if (typeof path !== 'string') {
		throw new Error('path must be string');
	}

	const result = path.split('.').reduceRight<Indexed>(
		(acc, key) => ({
			[key]: acc,
		}),
		value as never
	);

	return merge(object as Indexed, result);
};

export const serializerFormData = (target: HTMLFormElement) => {
	const mapperFormData = Object.values(target)
		.filter((item) => item instanceof HTMLInputElement)
		.map((child) => [child.name, child.value]);

	return Object.fromEntries(mapperFormData);
};
