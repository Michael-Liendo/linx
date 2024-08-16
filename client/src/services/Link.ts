import { z } from 'zod';
import { LinkSchema } from '@linx/shared';
import fetch from '../utils/fetch';

import type { ILinkForCreate } from '@linx/shared';

export default class Link {
  static async getAll() {
    try {
      const request = await fetch('/links/getAll');

      const body = await request.json();

      return z.array(LinkSchema).parse(body.data.links);
    } catch (error) {
      console.error('LinkService', error);
      throw error;
    }
  }

  static async create(link: ILinkForCreate) {
    try {
      const request = await fetch('/links/create', {
        body: JSON.stringify(link),
      });
      const body = await request.json();

      return LinkSchema.parse(body.data.link);
    } catch (e) {
      console.log('LinkService', e);
      throw e;
    }
  }
}
