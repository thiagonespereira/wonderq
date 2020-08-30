const Logger = require('../../utils/logger');
const Message = require('../../models/message');

const Ping = (req, res) => {
    Logger.info('Testing if api is alive.');
    return res.send('pong');
};

const Produce = async (req, res) => {
    if (!req.body.message) {
        Logger.info('No message information.');
        res.status(400);
        return res.send('No message information.');
    }

    const messageBody = {
        message: req.body.message,
    };

    try {
        const message = await Message.query().insertGraphAndFetch(messageBody);

        return res.send({
            status: 'ok',
            message,
        });
    } catch (err) {
        Logger.info(`Something went wrong: ${err}`);
        res.status(500);
        return res.send('Something went wrong....');
    }
};

const Consume = async (req, res) => {
    try {
        const query = await Message.query()
            .where('messages.reserved', false)
            .where('messages.processed', false)
            .orderBy('id', 'asc')
            .limit(1);

        if (!query.length) {
            Logger.info('No messages in queue.');
            res.status(404);
            return res.send('No messages in queue.');
        }

        const message = query[0];

        const updatedMessage = await Message.query()
            .patchAndFetchById(message.id, { reserved: true });

        return res.send({
            status: 'ok',
            message: updatedMessage,
        });
    } catch (err) {
        Logger.info(`Something went wrong: ${err}`);
        res.status(500);
        return res.send('Something went wrong....');
    }
};

const Process = async (req, res) => {
    try {
        const message = await Message.query()
            .findOne({
                id: req.params.id,
            });

        if (!message) {
            Logger.info('No messages with this id.');
            res.status(404);
            return res.send('No messages with this id.');
        }

        if (!message.reserved) {
            Logger.info('Message not reserved. Cannot be processed.');
            res.status(400);
            return res.send('Message not reserved. Cannot be processed.');
        }

        if (message.processed) {
            Logger.info('Message already processed.');
            res.status(403);
            return res.send('Message already processed.');
        }

        const updatedMessage = await Message.query()
            .patchAndFetchById(message.id, { processed: true });

        return res.send({
            status: 'ok',
            message: updatedMessage,
        });
    } catch (err) {
        Logger.info(`Something went wrong: ${err}`);
        res.status(500);
        return res.send('Something went wrong....');
    }
};

module.exports = {
    Ping,
    Produce,
    Consume,
    Process,
};
