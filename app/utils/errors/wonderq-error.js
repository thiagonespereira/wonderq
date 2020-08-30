module.exports = class WonderQError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.name = errorCode;
        this.message = message;
        this.statusCode = errorCode;
    }
};
