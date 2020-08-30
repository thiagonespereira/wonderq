const WonderQError = require('./wonderq-error');

module.exports = class BadRequestError extends WonderQError {
    constructor(message = 'Bad Request Error.', errorCode = 400) {
        super(message, errorCode);
    }
};
