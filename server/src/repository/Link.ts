import database from './database';

import type { ILink, ILinkForCreate } from '@linx/shared';

export class Link {
  static async create(linkDTO: ILinkForCreate): Promise<ILink> {
    const [link] = await database<ILink>('links')
      .insert(linkDTO)
      .returning('*')
      .orderBy('created_at');
    return link;
  }

  static async getByShorterName(shorter_name: string): Promise<ILink> {
    const [link] = await database<ILink>('links')
      .select('*')
      .where({ shorter_name: shorter_name });
    return link;
  }

  static async getById(id: string): Promise<ILink> {
    const [link] = await database<ILink>('links').select('*').where({ id: id });
    return link;
  }

  static async getUserLinks(userId: string): Promise<ILink[]> {
    const links = await database<ILink>('links')
      .select('*')
      .where({ user_id: userId })
      .orderBy('created_at', 'desc');

    return links;
  }
  static async deleteById(linkId: string): Promise<string> {
    const _link = await database<ILink>('links').where('id', linkId).delete();
    return linkId;
  }
}
