import Services from '../../services/index.js';
import { BadRequestError } from '../../utils/errorHandler.js';

import type { ILinkForCreate, IUser } from '@linx/shared';
import type { Reply, Request } from '../../types/index.js';

export default async function create(request: Request, reply: Reply) {
  const { shorter_name, url } = request.body as ILinkForCreate;
  const user = request.user as IUser;

  if (!shorter_name || !url) {
    throw new BadRequestError('Please provide all required fields');
  }

  const link = await Services.link.create({
    shorter_name,
    url,
    user_id: user.id,
  });

  return reply
    .code(201)
    .send({ success: true, message: 'Link created', data: { link: link } });
}
