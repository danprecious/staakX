export class HttpError extends Error {
    constructor (
        public statusCode: number,
        public message: string,
        public details?: any,
    ) {
        super(message);
        Object.setPrototypeOf(this, HttpError.prototype);
    }

    toJSON() {
        return {
            statusCode: this.statusCode,
            message: this.message, 
            ...(this.details && { details: this.details } ),
        }
    }
}

export class NotFoundError extends HttpError {
    constructor (entity: string, details?: any) {
        super(404,  `${entity} not found`, details); 
    }
}

export class ValidationError extends HttpError {
    constructor (details: any) {
        super (422, `validation error`, details);
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