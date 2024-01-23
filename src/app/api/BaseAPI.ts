import HTTPTransport from '@/shared/utils/http.ts';

export default abstract class BaseAPI {
	protected http: HTTPTransport;

	protected constructor(endpoint: string) {
		this.http = new HTTPTransport(endpoint);
	}

	public abstract create?(data: unknown): Promise<unknown>;

	public abstract read?(identifier?: string | number): Promise<unknown>;

	public abstract update?(
		data: unknown,
		identifier?: string | number
	): Promise<unknown>;

	public abstract delete?(identifier: string | number): Promise<unknown>;
}
