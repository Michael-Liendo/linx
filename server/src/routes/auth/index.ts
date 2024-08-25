import login from '../../controllers/Auth/login.js';
import register from '../../controllers/Auth/register.js';

import { type IReply, UserCreateSchema, UserLoginSchema } from '@linx/shared';
import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';
import requestValidation from '../../utils/requestValidation.js';

export default function auth(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: DoneFuncWithErrOrRes,
) {
  fastify.route({
    method: 'POST',
    url: '/login',
    preHandler: requestValidation(UserLoginSchema),
    handler: login,
  });

  fastify.route({
    method: 'POST',
    url: '/register',
    preHandler: requestValidation(UserCreateSchema),
    handler: register,
  });

  done();
}
