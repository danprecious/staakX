import { Request, Response, NextFunction } from 'express';

export function validateSession(req: Request, res: Response, next: NextFunction) {
  if (!req.session) {
    const error = new Error('Session not initialized');
    console.error('Session middleware not properly configured');
    return next(error);
  }

  console.log('Session keys:', Object.keys(req.session));

  next();
}