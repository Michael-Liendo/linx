import me from '../../controllers/User/me';
import checkJwt from '../../middlewares/checkJwt';

import type { FastifyInstance, RegisterOptions } from 'fastify';

export default function user(
	fastify: FastifyInstance,
	_: RegisterOptions,
	done: () => void,
) {
	fastify.register(checkJwt);

	fastify.route({
		method: 'GET',
		url: '/me',
		handler: me,
	});

	done();
}
