import Services from '../../services/index.js';
import { BadRequestError } from '../../utils/errorHandler.js';

import type { ILinkForCreate, IUser } from '@linx/shared';
import type { Reply, Request } from '../../types/index.js';

export default async function getAll(request: Request, reply: Reply) {
  const user = request.user as IUser;

  const links = await Services.link.getAllByUser(user.id);

  return reply
    .code(200)
    .send({ success: true, message: 'All links listed', data: { links } });
}
