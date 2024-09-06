import * as dotenv from 'dotenv';

import type { Knex } from 'knex';

dotenv.config();

const config: { [key: string]: Knex.Config } = {
	development: {
		client: 'pg',
		connection: {
			host: process.env.POSTGRES_HOST,
			user: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
		},
		pool: { min: 0, max: 10 },
	},
	staging: {
		client: 'pg',
		connection: {
			host: process.env.POSTGRES_HOST,
			user: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
		},
		pool: { min: 0, max: 10 },
	},
	production: {
		client: 'pg',
		connection: {
			host: '0.0.0.0',
			user: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
		},
		pool: { min: 0, max: 10 },
	},
};

module.exports = config;
