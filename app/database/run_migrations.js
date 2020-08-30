const Logger = require('../utils/logger');

module.exports = class RunMigrations {
    constructor(knex) {
        this.knex = knex;
    }

    async migrate() {
        Logger.info('Running migrations...');
        const info = await this.knex.migrate.latest();
        if (info.length === 0) {
            Logger.info('Already up to date');
        } else {
            Logger.info(`Batch ${info[0]} run: ${info[1].length} migrations \n`);
            Logger.info(info[1].join('\n'));
        }
    }

    async rollback() {
        Logger.info('Rollback migrations...');
        const info = await this.knex.migrate.rollback();
        if (info.length === 0) {
            Logger.info('Already up to date');
        } else {
            Logger.info(`Batch ${info[0]} run: ${info[1].length} migrations \n`);
            Logger.info(info[1].join('\n'));
        }
    }
};
