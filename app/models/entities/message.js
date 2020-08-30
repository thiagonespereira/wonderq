// const assert = require('assert')
const Joi = require('joi');

module.exports = class Message {
    constructor(data) {
        const { value, error } = Joi.validate(data, Message.schema(), { abortEarly: false, stripUnknown: true });

        if (error) throw new TypeError(error);

        Object.assign(this, value);
        Object.preventExtensions(this);
    }

    static schema() {
        return Joi.object().keys({
            numId: Joi.number().allow(null),
            message: Joi.string().required(),
            createdAt: Joi.date(),
            updatedAt: Joi.date().allow(null),
        });
    }
};
