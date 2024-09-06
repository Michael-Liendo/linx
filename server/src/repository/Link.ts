import database from './database';

import type { ILink, ILinkForCreate, ILinkForUpdate } from '@linx/shared';

const Links = database<ILink>('links');
export class Link {
	static async create(linkDTO: ILinkForCreate): Promise<ILink> {
		const [link] = await Links.insert(linkDTO)
			.returning('*')
			.orderBy('created_at');
		return link;
	}

	static async getByShorterName(
		shorter_name: string,
	): Promise<ILink | undefined> {
		const link = await Links.select('*')
			.where({ shorter_name: shorter_name })
			.first();

		return link;
	}

	static async getById(id: string): Promise<ILink | undefined> {
		const link = await Links.select('*').where({ id: id }).first();
		return link;
	}

	static async getUserLinks(userId: string): Promise<ILink[]> {
		const links = await Links.select('*')
			.where({ user_id: userId })
			.orderBy('created_at', 'desc');

		return links;
	}

	static async update(linkId: string, linkDTO: ILinkForUpdate): Promise<ILink> {
		const [link] = await Links.update({ ...linkDTO, updated_at: new Date() })
			.where({ id: linkId })
			.returning('*');
		return link;
	}

	static async deleteById(linkId: string): Promise<string> {
		const _link = await Links.where('id', linkId).delete();
		return linkId;
	}
}
