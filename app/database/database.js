const database = {
    client: process.env.DB_DRIVER,
    migrations: {
        directory: 'app/database/migrations',
    },
    seeds: {
        directory: 'app/database/seeds',
    },
    debug: process.env.STAGE === 'dev',
};

const drivers = {
    sqlite3: {
        connection: {
            filename: process.env.DB_FILENAME,
        },
        useNullAsDefault: true,
    },
    pg: {
        connection: {
            charset: 'utf8',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            pool: {
                min: 1,
                max: 1,
            },
        },
    },
};

module.exports = { ...database, ...drivers[process.env.DB_DRIVER] };
