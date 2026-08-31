import { Request, Response } from 'express';
import { PatientService } from '../services/patientService';

export class PatientController {
  static getAll(req: Request, res: Response): void {
    const search = req.query.search as string | undefined;
    const patients = PatientService.getAll(search);
    res.json({ success: true, count: patients.length, data: patients });
  }

  static getById(req: Request, res: Response): void {
    const patient = PatientService.getById(req.params.id);
    if (!patient) {
      res.status(404).json({ success: false, message: 'Patient not found' });
      return;
    }
    res.json({ success: true, data: patient });
  }

  static create(req: Request, res: Response): void {
    const newPatient = PatientService.create(req.body);
    res.status(201).json({ success: true, data: newPatient });
  }

  static addVitals(req: Request, res: Response): void {
    const vital = PatientService.addVitals(req.params.id, req.body);
    if (!vital) {
      res.status(404).json({ success: false, message: 'Patient not found' });
      return;
    }
    res.status(201).json({ success: true, data: vital });
  }

  static addAllergy(req: Request, res: Response): void {
    const allergy = PatientService.addAllergy(req.params.id, req.body);
    if (!allergy) {
      res.status(404).json({ success: false, message: 'Patient not found' });
      return;
    }
    res.status(201).json({ success: true, data: allergy });
  }
}
