import type { Reply, Request } from '../../types';

export default async function me(request: Request, reply: Reply) {
  const { password, ...user } = request.user;
  return reply.code(200).send({ message: 'Ok', data: { user } });
}
