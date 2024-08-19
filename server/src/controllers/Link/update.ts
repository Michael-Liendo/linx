import Services from '../../services/index.js';

import type { ILinkForUpdate } from '@linx/shared';
import type { Reply, Request } from '../../types/index.js';

export default async function update(request: Request, reply: Reply) {
  const data = request.body as ILinkForUpdate;
  const { id } = request.params as { id: string };
  const user = request.user;

  const link = await Services.link.update(user.id, { id, ...data });
  return reply.code(200).send({
    success: true,
    message: 'Link modified successfully',
    data: { link: link },
  });
}
