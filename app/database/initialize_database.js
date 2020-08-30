const { Model, knexSnakeCaseMappers } = require('objection');
const knex = require('knex');
const database = require('./database');

const { postProcessResponse, wrapIdentifier } = knexSnakeCaseMappers();

const settings = {
    ...database,
    postProcessResponse,
    wrapIdentifier,
};

const modelKnex = knex(settings);

Model.knex(modelKnex);

module.exports = modelKnex;
