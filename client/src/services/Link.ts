import { LinkSchema } from '@linx/shared';
import { z } from 'zod';
import fetch from '../utils/fetch';

import type {
  ILinkForCreate,
  ILinkForUpdate,
  ILinkForUpdateDTO,
} from '@linx/shared';

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
        method: 'POST',
        body: JSON.stringify(link),
      });
      const body = await request.json();

      return LinkSchema.parse(body.data.link);
    } catch (e) {
      console.log('LinkService', e);
      throw e;
    }
  }

  static async update(link: ILinkForUpdateDTO, id: string) {
    try {
      const request = await fetch(`/links/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify(link),
      });
      const body = await request.json();

      return LinkSchema.parse(body.data.link);
    } catch (e) {
      console.log('LinkService', e);
      throw e;
    }
  }

  static async deleteById(link_id: string) {
    try {
      const request = await fetch(`/links/deleteById/${link_id}`, {
        method: 'DELETE',
      });
      const body = await request.json();

      return body.data.link_id as string;
    } catch (error) {
      console.error('link delete services', error);
      throw error;
    }
  }
}
