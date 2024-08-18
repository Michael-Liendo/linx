import Services from '../../services';
import { BadRequestError } from '../../utils/errorHandler';

import type { ILinkForUpdate } from '@linx/shared';
import type { Reply, Request } from '../../types';

export default async function update(request: Request, reply: Reply) {
  const data = request.body as ILinkForUpdate;
  const user = request.user;

  const link = await Services.link.update(user.id, data);
  return reply.code(201).send({
    success: true,
    message: 'Link modified successfully',
    data: { link: link },
  });
}
