import { Request, Response } from 'express';
import { PharmacyService } from '../services/pharmacyService';

export class PharmacyController {
  static getInventory(req: Request, res: Response): void { res.json({ success: true, data: PharmacyService.getInventory() }); }
  static getPrescriptions(req: Request, res: Response): void { res.json({ success: true, data: PharmacyService.getPrescriptions() }); }
  static dispense(req: any, res: Response): void { res.json({ success: true, data: PharmacyService.dispense(req.params.id, req.user?.name || 'Pharmacist') }); }
}
