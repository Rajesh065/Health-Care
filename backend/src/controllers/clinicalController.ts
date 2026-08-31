import { Request, Response } from 'express';
import { ClinicalService } from '../services/clinicalService';
import { searchIcd10 } from '../utils/icd10Data';

export class ClinicalController {
  static getSoapNotes(req: Request, res: Response): void { res.json({ success: true, data: ClinicalService.getSoapNotesByPatient(req.params.patientId) }); }
  static createSoapNote(req: Request, res: Response): void { res.status(201).json({ success: true, data: ClinicalService.createSoapNote(req.body) }); }
  static checkSafety(req: Request, res: Response): void { res.json({ success: true, data: ClinicalService.verifySafety(req.body.patientId, req.body.medications || []) }); }
  static searchDiagnoses(req: Request, res: Response): void { res.json({ success: true, data: searchIcd10(req.query.q as string || '') }); }
}
