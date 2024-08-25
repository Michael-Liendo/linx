import me from '../../controllers/User/me.js';
import checkJwt from '../../middlewares/checkJwt.js';

import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';

export default function user(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: () => void,
) {
  fastify.register(checkJwt);

  fastify.route({
    method: 'GET',
    url: '/me',
    handler: me,
  });

  done();
}
