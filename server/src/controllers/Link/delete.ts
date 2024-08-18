import Services from '../../services';
import { BadRequestError } from '../../utils/errorHandler';

import type { ILinkForDelete } from '@linx/shared';
import type { Reply, Request } from '../../types';

export default async function deleteByID(request: Request, reply: Reply) {
  const { id } = request.params as ILinkForDelete;
  const user = request.user;

  const link = await Services.link.deleteByIdUser(id, user.id);

  return reply
    .code(202)
    .send({ success: true, message: 'Link Deleted', data: { link_id: link } });
}
