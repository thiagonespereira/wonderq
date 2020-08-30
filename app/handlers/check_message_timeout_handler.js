require('use-strict');
require('../database/initialize_database');
const moment = require('moment');
const Logger = require('../utils/logger');
const Message = require('../models/message');

module.exports.handler = async function CheckMessageTimeoutHandler() {
    const validStatusDate = moment().subtract(2, 'minutes').toISOString();

    const messages = await Message.query()
        .where('updatedAt', '<', validStatusDate)
        .where('messages.reserved', true)
        .where('messages.processed', false);

    for (const message of messages) {
        await message.$query().patchAndFetch({ reserved: false });
        Logger.info('Messages with timeout returned to not reserved state.');
    }
};
