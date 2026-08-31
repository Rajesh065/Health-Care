import { Request, Response } from 'express';
import { AuditService } from '../services/auditService';

export class AuditController {
  static getLogs(req: Request, res: Response): void {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 100;
    const logs = AuditService.getLogs(limit);
    res.json({ success: true, count: logs.length, data: logs });
  }
}
