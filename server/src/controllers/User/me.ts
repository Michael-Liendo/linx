import { Reply, Request } from '../../types';

export default async function me(request: Request, reply: Reply) {
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  const { password, ...user } = request.user;
  try {
    return reply.code(200).send({ message: 'Ok', data: { user } });
  } catch (error) {
    return reply.code(500).send({
      message: 'Internal server error',
      error: error.message as string,
    });
  }
}
