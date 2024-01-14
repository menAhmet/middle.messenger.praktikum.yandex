const enum METHODS {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export type DataType = Record<string, string | number | Array<string | number>>;

type Options = {
	headers?: Record<string, string>;
	method?: METHODS;
	timeout?: number;
	data?: DataType | FormData;
};

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;

//function queryStringify(data: Options['data']): string {
//	if (!data) throw new Error('Данные должны быть объектными!');

//	const keys = Object.keys(data);
//	return keys.reduce((result, key, index) => {
//		return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
//	}, '?');
//}

class HTTPTransport {
	static API_URL = 'https://ya-praktikum.tech/api/v2';
	protected endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
	}

	public get: HTTPMethod = (path, options = {}) => {
		return this.request(
			this.endpoint + path,
			{ ...options, method: METHODS.GET },
			options.timeout
		);
	};

	public post: HTTPMethod = (path, options = {}) => {
		return this.request(
			this.endpoint + path,
			{ ...options, method: METHODS.POST },
			options.timeout
		);
	};

	public put: HTTPMethod = (path, options = {}) => {
		return this.request(
			this.endpoint + path,
			{ ...options, method: METHODS.PUT },
			options.timeout
		);
	};

	public delete: HTTPMethod = (path, options = {}) => {
		return this.request(
			this.endpoint + path,
			{ ...options, method: METHODS.DELETE },
			options.timeout
		);
	};

	public request = (url: string, options: Options = {}, timeout = 5000) => {
		const { headers = {}, method, data } = options;

		return new Promise((resolve, reject) => {
			if (!method) {
				reject('No method');
				return;
			}

			const xhr = new XMLHttpRequest();
			const isGet = method === METHODS.GET;

			xhr.open(method, url);

			Object.keys(headers).forEach((key) => {
				xhr.setRequestHeader(key, headers[key]);
			});

			xhr.onreadystatechange = () => {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status < 400) {
						resolve(xhr.response);
					} else {
						reject(xhr.response);
					}
				}
			};

			xhr.onload = () => {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;

			xhr.timeout = timeout;
			xhr.ontimeout = reject;

			xhr.withCredentials = true;
			xhr.responseType = 'json';

			if (isGet || !data) {
				xhr.send();
			} else if (data instanceof FormData) {
				xhr.send(data);
			} else {
				xhr.send(JSON.stringify(data));
			}
		});
	};
}

export default HTTPTransport;
