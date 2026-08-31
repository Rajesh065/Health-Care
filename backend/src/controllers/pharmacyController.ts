import { Request, Response } from 'express';
import { PharmacyService } from '../services/pharmacyService';
import { AuthRequest } from '../middleware/auth';

export class PharmacyController {
  static getInventory(req: Request, res: Response): void {
    const items = PharmacyService.getInventory();
    res.json({ success: true, count: items.length, data: items });
  }

  static getPrescriptions(req: Request, res: Response): void {
    const status = req.query.status as any;
    const rxs = PharmacyService.getPrescriptions(status);
    res.json({ success: true, count: rxs.length, data: rxs });
  }

  static createPrescription(req: Request, res: Response): void {
    const rx = PharmacyService.createPrescription(req.body);
    res.status(201).json({ success: true, data: rx });
  }

  static dispense(req: AuthRequest, res: Response): void {
    const pharmacistName = req.user ? req.user.name : 'James Wilson, PharmD';
    const rx = PharmacyService.dispense(req.params.id, pharmacistName);
    if (!rx) {
      res.status(400).json({ success: false, message: 'Prescription cannot be dispensed or already dispensed.' });
      return;
    }
    res.json({ success: true, data: rx });
  }
}
