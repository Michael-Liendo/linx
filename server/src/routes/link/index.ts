import create from '../../controllers/Link/create';
import checkJwt from '../../middlewares/checkJwt';

import { LinkForCreateSchema, LinkForUpdateSchema } from '@linx/shared';
import requestValidation from '../../utils/requestValidation';

import type { FastifyInstance, RegisterOptions } from 'fastify';
import deleteById from '../../controllers/Link/delete';
import getAll from '../../controllers/Link/getAll';
import update from '../../controllers/Link/update';

export default function link(
	fastify: FastifyInstance,
	_: RegisterOptions,
	done: () => void,
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
