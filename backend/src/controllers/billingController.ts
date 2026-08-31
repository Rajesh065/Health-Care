import { Request, Response } from 'express';
import { BillingService } from '../services/billingService';
import { CPT_DATABASE } from '../utils/cptCodes';

export class BillingController {
  static getInvoices(req: Request, res: Response): void {
    const invoices = BillingService.getInvoices();
    res.json({ success: true, count: invoices.length, data: invoices });
  }

  static getClaims(req: Request, res: Response): void {
    const claims = BillingService.getClaims();
    res.json({ success: true, count: claims.length, data: claims });
  }

  static createInvoice(req: Request, res: Response): void {
    const invoice = BillingService.createInvoice(req.body);
    res.status(201).json({ success: true, data: invoice });
  }

  static payInvoice(req: Request, res: Response): void {
    const { amount, paymentMethod } = req.body;
    const invoice = BillingService.payInvoice(req.params.id, amount, paymentMethod);
    if (!invoice) {
      res.status(404).json({ success: false, message: 'Invoice not found' });
      return;
    }
    res.json({ success: true, data: invoice });
  }

  static getCptCodes(req: Request, res: Response): void {
    res.json({ success: true, data: CPT_DATABASE });
  }
}
