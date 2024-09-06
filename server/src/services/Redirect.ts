import type { IRedirectForCreate } from '@linx/shared';
import Repository from '../repository';

export default class Redirect {
	static async create(redirectDTO: IRedirectForCreate) {
		const redirect = await Repository.redirect.create(redirectDTO);
		return redirect;
	}
}
