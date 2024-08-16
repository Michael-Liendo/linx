import Services from '../../services';
import { BadRequestError } from '../../utils/errorHandler';

import type { ILinkForCreate } from '@linx/shared';
import type { Reply, Request } from '../../types';

export default async function redirect(request: Request, reply: Reply) {
  const shorter_name = (request.params as { shorter_name: string })
    .shorter_name;

  const link = await Services.link.getByShorterName(shorter_name);

  return reply.redirect(link.url);
}
