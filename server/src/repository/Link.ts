import database from './database';

import type { ILinkForCreate } from '@linx/shared';

export class Link {
  static async createLink(link: ILinkForCreate): Promise<string> {
    const [id] = await database('links').insert(link).returning('id');
    return id;
  }
}
