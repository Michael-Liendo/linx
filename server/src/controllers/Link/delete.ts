import Services from '../../services/index.js';
import { BadRequestError } from '../../utils/errorHandler.js';

import type { ILinkForDelete, IUser } from '@linx/shared';
import type { Reply, Request } from '../../types/index.js';

export default async function deleteByID(request: Request, reply: Reply) {
  const { id } = request.params as ILinkForDelete;
  const user = request.user as IUser;

  const link = await Services.link.deleteByIdUser(id, user.id);

  return reply
    .code(202)
    .send({ success: true, message: 'Link Deleted', data: { link_id: link } });
}
