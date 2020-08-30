require('use-strict');
require('../database/initialize_database');

const knex = require('knex')(require('../database/database'));
const RunMigrations = require('../database/run_migrations');

module.exports.handler = async function runMigrationsHandler() {
    const runMigrations = new RunMigrations(knex, true);
    await runMigrations.migrate();
    await knex.destroy();
};
