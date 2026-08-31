import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth';
import { mockDataStore } from '../models/mockData';

export function hipaaAuditMiddleware(action: string) {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    const originalSend = res.send;
    res.send = function (body?: any): Response {
      const patientId = req.params.patientId || req.body?.patientId || req.query?.patientId as string | undefined;
      mockDataStore.auditLogs.unshift({
        id: 'audit-' + Math.random().toString(36).substring(2, 9),
        timestamp: new Date().toISOString(),
        userId: req.user ? req.user.id : 'anonymous',
        userName: req.user ? req.user.name : 'Unauthenticated',
        userRole: req.user ? req.user.role : 'PATIENT',
        action,
        patientId,
        resourcePath: req.originalUrl,
        ipAddress: req.ip || '127.0.0.1',
        userAgent: req.headers['user-agent'] || 'unknown',
        status: res.statusCode < 400 ? 'SUCCESS' : 'DENIED'
      });
      return originalSend.call(this, body);
    };
    next();
  };
}
