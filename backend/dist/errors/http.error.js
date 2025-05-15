export class HttpError extends Error {
    statusCode;
    message;
    details;
    constructor(statusCode, message, details) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.details = details;
        Object.setPrototypeOf(this, HttpError.prototype);
    }
    toJSON() {
        return {
            statusCode: this.statusCode,
            message: this.message,
            ...(this.details && { details: this.details }),
        };
    }
}
export class NotFoundError extends HttpError {
    constructor(entity, details) {
        super(404, `${entity} not found`, details);
    }
}
export class ValidationError extends HttpError {
    constructor(details) {
        super(422, `validation error`, details);
    }
}
export class UnauthorizedError extends HttpError {
    constructor(message = 'Unauthorized') {
        super(401, message);
    }
}
export class ForbiddenError extends HttpError {
    constructor(message = 'Forbidden') {
        super(403, message);
    }
}
