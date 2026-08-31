import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth';
import { mockDataStore } from '../models/mockData';
import { HipaaAuditLog } from '../models/types';

export function hipaaAuditMiddleware(action: HipaaAuditLog['action']) {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    const originalSend = res.send;

    res.send = function (body?: any): Response {
      const patientId = req.params.patientId || req.body?.patientId || req.query?.patientId as string | undefined;

      const logEntry: HipaaAuditLog = {
        id: 'audit-' + Math.random().toString(36).substring(2, 9),
        timestamp: new Date().toISOString(),
        userId: req.user ? req.user.id : 'anonymous',
        userName: req.user ? req.user.name : 'Unauthenticated',
        userRole: req.user ? req.user.role : 'PATIENT',
        action,
        patientId,
        resourcePath: req.originalUrl,
        ipAddress: req.ip || req.socket.remoteAddress || '127.0.0.1',
        userAgent: req.headers['user-agent'] || 'unknown',
        status: res.statusCode < 400 ? 'SUCCESS' : 'DENIED',
        details: `Method: ${req.method} | Status: ${res.statusCode}`
      };

      mockDataStore.auditLogs.unshift(logEntry);
      if (mockDataStore.auditLogs.length > 500) mockDataStore.auditLogs.pop();

      return originalSend.call(this, body);
    };

    next();
  };
}
