import database from './database';

import type { ILink, ILinkForCreate } from '@linx/shared';

export class Link {
  static async create(link: ILinkForCreate): Promise<string> {
    const [id] = await database<ILink>('links').insert(link).returning('id');
    return id.id;
  }

  static async getByShorterName(shorter_name: string): Promise<ILink> {
    const [link] = await database<ILink>('links')
      .select('*')
      .where({ shorter_name: shorter_name });
    return link;
  }

  static async getByID(ID: string): Promise<ILink[]> {
    const link = await database<ILink>('links')
      .select('*')
      .where({ user_id: ID });
    return link;
  }

  static async getUserLinks(userID: string): Promise<ILink[]> {
    const links = await database<ILink>('links')
      .select('*')
      .where({ user_id: userID });
    return links;
  }
}
