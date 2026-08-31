import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth';
import { UserRole } from '../models/types';
import { logger } from '../config/logger';

export function authorize(allowedRoles: UserRole[]) {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      logger.warn(`Forbidden access attempt by ${req.user.email} (Role: ${req.user.role}) on ${req.originalUrl}`);
      res.status(403).json({
        success: false,
        message: `Forbidden: Access requires one of roles: ${allowedRoles.join(', ')}. Current role: ${req.user.role}`
      });
      return;
    }

    next();
  };
}
