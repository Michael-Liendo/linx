import login from '../../controllers/Auth/login';
import register from '../../controllers/Auth/register';

import type { IReply } from '@linx/shared';
import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';

export default function auth(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: DoneFuncWithErrOrRes,
) {
  fastify.post<{ Reply: IReply }>('/login', login);
  fastify.post<{ Reply: IReply }>('/register', register);

  done();
}
