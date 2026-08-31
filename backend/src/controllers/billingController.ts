import { Request, Response } from 'express';
import { BillingService } from '../services/billingService';
import { CPT_DATABASE } from '../utils/cptCodes';
export class BillingController {
  static getInvoices(req: Request, res: Response): void { res.json({ success: true, data: BillingService.getInvoices() }); }
  static getCptCodes(req: Request, res: Response): void { res.json({ success: true, data: CPT_DATABASE }); }
}
