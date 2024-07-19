import auth from './auth';
import user from './user';

import type { ErrorWithDetails } from '../utils/errorHandler';
import type {
  DoneFuncWithErrOrRes,
  FastifyError,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';

export default function routes(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: DoneFuncWithErrOrRes,
) {
  fastify.setErrorHandler((error: ErrorWithDetails, _, reply) => {
    return reply.code(error.statusCode || 500).send({
      error: error.name || 'INTERNAL_SERVER_ERROR',
      message: error.message,
      details: error.details,
    });
  });

  fastify.get('/', async () => {
    return { hello: 'world' };
  });

  fastify.register(auth, { prefix: '/auth' });
  fastify.register(user, { prefix: '/user' });

  done();
}
