const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const Logger = require('../utils/logger');
const ForbiddenError = require('../utils/errors/forbidden-error');

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
        res.status(403);
        res.send('No api key.');
        throw new ForbiddenError('No api key.');
    }
    if (req.body.apiKey !== process.env.SERVICE_AUTH_KEY) throw new UnauthorizedError('Invalid api key.');
    next();
});

app.get('/ping', (req, res) => res.send('pong'));

app.use('/messages', require('./messages'));

module.exports = app;
