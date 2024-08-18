import create from '../../controllers/Link/create';
import checkJwt from '../../middlewares/checkJwt';

import {
  LinkForCreateSchema,
  LinkForDeleteSchema,
  LinkForUpdateSchema,
} from '@linx/shared';
import requestValidation from '../../utils/requestValidation';

import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';
import { z } from 'zod';
import deleteById from '../../controllers/Link/delete';
import getAll from '../../controllers/Link/getAll';
import update from '../../controllers/Link/update';

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
    url: '/edit',
    preHandler: requestValidation(LinkForUpdateSchema),
    handler: update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/deleteById',
    preHandler: requestValidation(LinkForDeleteSchema),
    handler: deleteById,
  });

  done();
}
