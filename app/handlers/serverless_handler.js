require('use-strict');
require('../database/initialize_database');

const awsServerlessExpress = require('aws-serverless-express');
const { eventContext } = require('aws-serverless-express/middleware');
const routes = require('../routes');

const server = awsServerlessExpress.createServer(routes);

routes.use(eventContext());

module.exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
