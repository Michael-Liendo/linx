import Repository from '../repository/index.js';
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../utils/errorHandler.js';

import type { ILink, ILinkForCreate, ILinkForUpdate } from '@linx/shared';

export default class Link {
  static async create(link_dto: ILinkForCreate): Promise<ILink> {
    const check = await Repository.link.getByShorterName(link_dto.shorter_name);
    // todo: improve this
    if (check)
      throw new BadRequestError('Exists the shorter name, please select other');

    const link = await Repository.link.create(link_dto);

    return link;
  }

  static async getAllByUser(user_id: string): Promise<ILink[]> {
    const links = await Repository.link.getUserLinks(user_id);
    return links;
  }

  static async getByShorterName(shorter_name: string) {
    const link = await Repository.link.getByShorterName(shorter_name);
    if (!link) throw new NotFoundError('Link not found');

    return link;
  }

  static async update(user_id: string, link_dto: ILinkForUpdate) {
    try {
      const check = await Repository.link.getById(link_dto.id);
      if (check?.user_id !== user_id)
        throw new UnauthorizedError('You no are the owner of this link');
      const check_name = await Repository.link.getByShorterName(
        link_dto.shorter_name,
      );
      // todo: improve this
      if (check_name)
        throw new BadRequestError(
          'Exists the shorter name, please select other',
        );

      const link = await Repository.link.update(link_dto.id, link_dto);

      return link;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async deleteByIdUser(
    link_id: string,
    user_id: string,
  ): Promise<string> {
    const check = await Repository.link.getById(link_id);
    if (check?.user_id !== user_id)
      throw new UnauthorizedError('You no are the owner of this link');

    const deleted_link_id = await Repository.link.deleteById(link_id);
    return deleted_link_id;
  }
}
