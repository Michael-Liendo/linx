import { LinkSchema } from '@linx/shared';
import { z } from 'zod';
import fetch from '../utils/fetch';

export default class Link {
  static async getAll() {
    try {
      const request = await fetch('/links/getAll');

      const response = await request.json();

      return z.array(LinkSchema).parse(response.data.links);
    } catch (error) {
      console.error('LinkService', error);
      throw error;
    }
  }
}
