import me from '../../controllers/User/me.js';
import checkJwt from '../../middlewares/checkJwt.js';

import type { IReply } from '@linx/shared';
import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';

export default function user(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: DoneFuncWithErrOrRes,
) {
  fastify.register(checkJwt);

  fastify.route({
    method: 'GET',
    url: '/me',
    handler: me,
  });

  done();
}
