import create from '../../controllers/Link/create';
import checkJwt from '../../middlewares/checkJwt';

import { linkSchema } from '@linx/shared';
import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';
import requestValidation from '../../utils/requestValidation';

export default function link(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: DoneFuncWithErrOrRes,
) {
  fastify.register(checkJwt);

  fastify.route({
    method: 'POST',
    url: '/create',
    preHandler: requestValidation(linkSchema),
    handler: create,
  });

  done();
}
