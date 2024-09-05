import * as dotenv from 'dotenv';
dotenv.config();

import cors from '@fastify/cors';
import Fastify from 'fastify';

import redirect from './controllers/Link/redirect';
import database from './repository/database';
import routes from './routes';

// Instantiate Fastify with some config
const fastify = Fastify();

// Cors
fastify.register(cors, {
	origin: process.env?.CORS_ORIGIN?.split(',') || '*',
});

// Declare a route
fastify.register(routes, {
	prefix: '/api',
});

fastify.route({
	method: 'GET',
	url: '/:shorter_name',
	handler: redirect,
});

// check database connection
database
	.raw('select 1')
	.then(() =>
		console.log(
			'[DATABASE] Connection to database has been established successfully',
		),
	)
	.catch((error) => {
		console.error('[DATABASE] Unable to connect to the database:', error);
		process.exit(1);
	});

// Run the server!
fastify.listen({ port: Number(process.env.PORT) || 3000 }, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`[SERVER] Server is now listening on ${address}`);
});
