class KVError extends Error {
    constructor(message, status = 500) {
        super(message)
        Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
        this.name = KVError.name // stack traces display correctly now
        this.status = status
    }
}

class MethodNotAllowedError extends KVError {
    constructor(message = 'Not a valid request method', status = 405) {
        super(message, status)
    }
}

class NotFoundError extends KVError {
    constructor(message = 'Not Found', status = 404) {
        super(message, status)
    }
}

class InternalError extends KVError {
    constructor(message = 'nternal Error in KV Asset Handler', status = 500) {
        super(message, status)
    }
}

exports.KVError = KVError;
exports.MethodNotAllowedError = MethodNotAllowedError;
exports.NotFoundError = NotFoundError;
exports.InternalError = InternalError;
