import { Request, Response } from 'express';
import { EhrService } from '../services/ehrService';

export class EhrController {
  static getPatients(req: Request, res: Response): void { res.json({ success: true, data: EhrService.getPatients() }); }
  static getPatientById(req: Request, res: Response): void {
    const patient = EhrService.getPatientById(req.params.id);
    if (!patient) { res.status(404).json({ success: false, message: 'Patient not found' }); return; }
    res.json({ success: true, data: patient });
  }
  static createPatient(req: Request, res: Response): void {
    const newPatient = EhrService.createPatient(req.body);
    res.status(201).json({ success: true, data: newPatient });
  }
  static getAppointments(req: Request, res: Response): void { res.json({ success: true, data: EhrService.getAppointments() }); }
  static getClinicalNotes(req: Request, res: Response): void { res.json({ success: true, data: EhrService.getClinicalNotes() }); }
}
