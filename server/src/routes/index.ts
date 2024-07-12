import auth from './auth';

import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';

export default function routes(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: DoneFuncWithErrOrRes,
) {
  fastify.get('/', async () => {
    return { hello: 'world' };
  });

  fastify.register(auth, { prefix: '/auth' });

  done();
}
