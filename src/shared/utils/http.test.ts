import sinon, {
	SinonFakeXMLHttpRequest,
	SinonFakeXMLHttpRequestStatic,
} from 'sinon';
import HTTPTransport, { DataType } from './http.ts';
import { expect } from 'chai';

describe('HTTPTransport', () => {
	let xhr: SinonFakeXMLHttpRequestStatic;
	let instance: HTTPTransport;
	let requests: SinonFakeXMLHttpRequest[] = [];

	beforeEach(() => {
		xhr = sinon.useFakeXMLHttpRequest();

		// @ts-expect-error error
		global.XMLHttpRequest = xhr;

		xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
			requests.push(request);
		};
		instance = new HTTPTransport('/auth');
	});

	afterEach(() => {
		requests = [];
	});

	test('.get() should send GET request', () => {
		instance.get('/user');

		const [request] = requests;

		expect(request.method).to.eq('GET');
	});

	test('.post() should send POST request test data', () => {
		instance.post('/user', { key: 'value' } as DataType);

		const [request] = requests;
		expect(request.method).to.eq('POST');
	});

	test('.put() should send PUT request test data', () => {
		instance.put('/user', { key: 'value' } as DataType);

		const [request] = requests;

		expect(request.method).to.eq('PUT');
	});

	test('.delete() should send DELETE request', () => {
		instance.delete('/user');

		const [request] = requests;

		expect(request.method).to.eq('DELETE');
	});
});
