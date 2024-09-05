import type { IUser } from '@linx/shared';
import type { Reply, Request } from '../../types';

export default async function me(request: Request, reply: Reply) {
  const { password, ...user } = request.user as IUser;
  return reply.code(200).send({ success: true, message: 'Ok', data: { user } });
}
