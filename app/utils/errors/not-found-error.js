const WonderQError = require('./wonderq-error');

module.exports = class NotFoundError extends WonderQError {
    constructor(message = 'Not Found Error.', errorCode = 404) {
        super(message, errorCode);
    }
};
