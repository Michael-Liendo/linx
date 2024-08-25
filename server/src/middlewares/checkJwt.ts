import fastifyPlugin from 'fastify-plugin';

import Services from '../services/index.js';
import { UnauthorizedError } from '../utils/errorHandler.js';
import { Jwt } from '../utils/jwt.js';

import type { FastifyInstance, FastifyRequest } from 'fastify';
import type { Request } from '../types/index.js';

function getUser(fastify: FastifyInstance, _: unknown, done: () => void) {
  fastify.decorateRequest('user', undefined);
  fastify.addHook('preHandler', checkJwt);
  done();
}

async function checkJwt(request: Request) {
  const token = request.headers.authorization;

  if (!token) {
    throw new UnauthorizedError('Access denied Jwt is required');
  }

  try {
    const jwt = token;
    const payload = Jwt.verifyToken(`${jwt}`);
    const user = await Services.user.getByID(payload.id);

    if (!user) {
      throw new UnauthorizedError('Access denied');
    }

    request.user = user;
  } catch (error) {
    throw new UnauthorizedError(error as string);
  }
}

export default fastifyPlugin(getUser);
