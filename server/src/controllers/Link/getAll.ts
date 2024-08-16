import Services from '../../services';
import { BadRequestError } from '../../utils/errorHandler';

import type { ILinkForCreate } from '@linx/shared';
import type { Reply, Request } from '../../types';

export default async function getAll(request: Request, reply: Reply) {
  const user = request.user;

  const links = await Services.link.getAllByUser(user.id);

  return reply
    .code(200)
    .send({ success: true, message: 'All links listed', data: { links } });
}
