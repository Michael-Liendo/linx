import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await knex.schema.createTable('links', (table) => {
    table
      .uuid('id')
      .unique()
      .defaultTo(knex.raw('uuid_generate_v4()'))
      .primary();
    table.string('url').notNullable();
    table.string('user_id').references('id').inTable('user');
    table.string('shorter_name').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('links');
}
