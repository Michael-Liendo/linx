import create from '../../controllers/Link/create';
import checkJwt from '../../middlewares/checkJwt';

import type { IReply } from '@linx/shared';
import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';

export default function link(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: DoneFuncWithErrOrRes,
) {
  fastify.register(checkJwt);

  fastify.post<{ Reply: IReply }>('/create', create);

  done();
}
