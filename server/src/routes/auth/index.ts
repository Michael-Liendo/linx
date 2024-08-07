import login from '../../controllers/Auth/login';
import register from '../../controllers/Auth/register';

import { type IReply, userCreateSchema, userLoginSchema } from '@linx/shared';
import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';
import requestValidation from '../../utils/requestValidation';

export default function auth(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: DoneFuncWithErrOrRes,
) {
  fastify.route({
    method: 'POST',
    url: '/login',
    preHandler: requestValidation(userLoginSchema),
    handler: login,
  });

  fastify.route({
    method: 'POST',
    url: '/register',
    preHandler: requestValidation(userCreateSchema),
    handler: register,
  });

  done();
}
