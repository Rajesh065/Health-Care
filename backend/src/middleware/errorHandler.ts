import { Request, Response, NextFunction } from 'express';
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
  res.status(err.statusCode || 500).json({ success: false, error: { message: err.message || 'Internal Server Error' } });
}
