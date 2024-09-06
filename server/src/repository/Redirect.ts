import type { IRedirect, IRedirectForCreate } from '@linx/shared';
import database from './database';

const Redirects = database<IRedirect>('redirects');

export class Redirect {
	static async create(redirectDTO: IRedirectForCreate): Promise<IRedirect> {
		const [redirect] = await Redirects.insert(redirectDTO).returning('*');

		return redirect;
	}
}
