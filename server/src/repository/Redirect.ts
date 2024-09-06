import type { IRedirect, IRedirectForCreate } from '@linx/shared';
import database from './database';

export class Redirect {
	static async create(redirectDTO: IRedirectForCreate): Promise<IRedirect> {
		const [redirect] = await database<IRedirect>('redirects')
			.insert(redirectDTO)
			.returning('*');

		return redirect;
	}
}
