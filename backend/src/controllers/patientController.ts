import { Request, Response } from 'express';
import { PatientService } from '../services/patientService';

export class PatientController {
  static getAll(req: Request, res: Response): void { res.json({ success: true, data: PatientService.getAll(req.query.search as string) }); }
  static getById(req: Request, res: Response): void {
    const p = PatientService.getById(req.params.id);
    if (!p) { res.status(404).json({ success: false, message: 'Not found' }); return; }
    res.json({ success: true, data: p });
  }
  static create(req: Request, res: Response): void { res.status(201).json({ success: true, data: PatientService.create(req.body) }); }
  static addVitals(req: Request, res: Response): void { res.status(201).json({ success: true, data: PatientService.addVitals(req.params.id, req.body) }); }
}
