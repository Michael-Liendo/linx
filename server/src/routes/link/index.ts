import create from '../../controllers/Link/create.js';
import checkJwt from '../../middlewares/checkJwt.js';

import { LinkForCreateSchema, LinkForUpdateSchema } from '@linx/shared';
import requestValidation from '../../utils/requestValidation.js';

import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';
import { z } from 'zod';
import deleteById from '../../controllers/Link/delete.js';
import getAll from '../../controllers/Link/getAll.js';
import update from '../../controllers/Link/update.js';

export default function link(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: DoneFuncWithErrOrRes,
) {
  fastify.register(checkJwt);

  fastify.route({
    method: 'GET',
    url: '/getAll',
    handler: getAll,
  });

  fastify.route({
    method: 'POST',
    url: '/create',
    preHandler: requestValidation(LinkForCreateSchema),
    handler: create,
  });

  fastify.route({
    method: 'PUT',
    url: '/edit/:id',
    preHandler: requestValidation(LinkForUpdateSchema),
    handler: update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/deleteById/:id',
    handler: deleteById,
  });

  done();
}
