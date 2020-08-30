const WonderQError = require('./wonderq-error');

module.exports = class UnauthorizedError extends WonderQError {
    constructor(message = 'Unauthorized Error.', errorCode = 401) {
        super(message, errorCode);
    }
};
