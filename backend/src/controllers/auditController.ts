import { Request, Response } from 'express';
import { AuditService } from '../services/auditService';
export class AuditController { static getLogs(req: Request, res: Response): void { res.json({ success: true, data: AuditService.getLogs() }); } }
