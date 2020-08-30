const WonderQError = require('./wonderq-error');

module.exports = class ForbiddenError extends WonderQError {
    constructor(message = 'Forbidden Error.', errorCode = 403) {
        super(message, errorCode);
    }
};
