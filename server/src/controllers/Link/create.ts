import Services from '../../services';
import { BadRequestError } from '../../utils/errorHandler';

import type { ILinkForCreate } from '@linx/shared';
import type { Reply, Request } from '../../types';

export default async function create(request: Request, reply: Reply) {
  const { shorter_name, url } = request.body as ILinkForCreate;
  const user = request.user;

  if (!shorter_name || !url) {
    throw new BadRequestError('Please provide all required fields');
  }

  const link = await Services.link.create({
    shorter_name,
    url,
    user_id: user.id,
  });

  return reply.code(201).send({ message: 'Link created', data: { id: link } });
}
