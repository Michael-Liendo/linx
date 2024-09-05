import auth from './auth';
import link from './link';
import user from './user';

import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';
import type { ErrorWithDetails } from '../utils/errorHandler';

export default function routes(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: () => void,
) {
  fastify.setErrorHandler((error: ErrorWithDetails, _, reply) => {
    if (error.statusCode >= 500) {
      fastify.log.error(error);
      console.error(error);
    } else if (error.statusCode >= 400) {
      fastify.log.info(error);
    }

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
  fastify.register(link, { prefix: '/links' });

  done();
}
