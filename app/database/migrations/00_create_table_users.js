const tableName = 'messages';

exports.up = (knex) => knex.schema.createTable(tableName, (table) => {
    table.increments('num_id');
    table.string('message').notNullable();
    table.timestamp('created_at', { precision: 6, useTz: true }).notNullable().defaultTo(knex.fn.now(6));
    table.timestamp('updated_at', { precision: 6, useTz: true }).nullable();
});

exports.down = (knex) => knex.schema.dropTable(tableName);
