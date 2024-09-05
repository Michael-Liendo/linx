import login from '../../controllers/Auth/login';
import register from '../../controllers/Auth/register';

import { UserCreateSchema, UserLoginSchema } from '@linx/shared';
import type { FastifyInstance, RegisterOptions } from 'fastify';
import requestValidation from '../../utils/requestValidation';

export default function auth(
	fastify: FastifyInstance,
	_: RegisterOptions,
	done: () => void,
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
