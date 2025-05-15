import { HttpError } from "../errors/http.error.js";
import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger.js";

export const errorHandler = (err: Error | HttpError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpError) {
        logger.warn(`HTTP Error: ${err.statusCode} - ${err.message}`);
        return res.status(err.statusCode).json(err.toJSON())
    }

    logger.error(`Unexpected Error: ${err.message}\n${err.stack}`);
    res.status(500).json({
        statusCode: 500, 
        message: 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }), 
    })
}

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const error = new HttpError(404, `Not Found - ${req.method} ${req.originalUrl}`);
    next(error);
  };