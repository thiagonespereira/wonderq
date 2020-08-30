const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const Logger = require('../utils/logger');

const {
    Ping,
    Produce,
    Consume,
    Process,
} = require('./message_functions');

const app = express();

app.use(cors({
    exposedHeaders: 'X-Authorization, X-Total-Count',
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (request, response, next) => {
    Logger.info('Received request', request.originalUrl);
    Logger.info({ query: JSON.stringify(request.query) });
    Logger.info({ params: JSON.stringify(request.params) });
    Logger.info({ body: JSON.stringify(request.body) });

    next();
});

app.use(async (req, res, next) => {
    if (!req.body.apiKey) {
        Logger.info('Request made with no API key.');
        res.status(403);
        return res.send('No api key.');
    }
    if (req.body.apiKey !== process.env.SERVICE_AUTH_KEY) {
        Logger.info('Request made with invalid API key.');
        res.status(401);
        return res.send('Invalid api key.');
    }

    return next();
});

app.post('/ping', Ping);
app.post('/produce', Produce);
app.post('/consume', Consume);
app.post('/process/:id', Process);

module.exports = app;
