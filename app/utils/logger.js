const { createLogger, transports } = require('winston');

module.exports = createLogger({
    level: process.env.LOG_LEVEL,
    transports: new (transports.Console)({
        handleExceptions: true,
        timestamp: true,
    }),
    silent: !process.env.LOG_LEVEL,
});
