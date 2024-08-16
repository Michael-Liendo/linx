import Repository from '../repository';
import { BadRequestError } from '../utils/errorHandler';

import type { ILink, ILinkForCreate } from '@linx/shared';

export default class Link {
  static async create(link_dto: ILinkForCreate): Promise<string> {
    const check = await Repository.link.getByShorterName(link_dto.shorter_name);
    if (check)
      throw new BadRequestError('Exists the shorter name, please select other');

    const link = await Repository.link.create(link_dto);

    return link;
  }

  static async getAllByUser(user_id: string): Promise<ILink[]> {
    const links = await Repository.link.getByID(user_id);
    return links;
  }
}
