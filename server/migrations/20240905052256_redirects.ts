import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
	await knex.schema.createTable('redirects', (table) => {
		table
			.uuid('id')
			.unique()
			.defaultTo(knex.raw('uuid_generate_v4()'))
			.primary();
		table.uuid('link_id').references('id').inTable('links');
		table.string('ip').notNullable();
		table.string('user_agent');
		table.string('sec_ch_ua_platform');
		table.string('accept_language');

		table.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable('redirects');
}
