import { Request, Response } from 'express';
import { ClinicalService } from '../services/clinicalService';
import { searchIcd10 } from '../utils/icd10Data';

export class ClinicalController {
  static getSoapNotes(req: Request, res: Response): void {
    const notes = ClinicalService.getSoapNotesByPatient(req.params.patientId);
    res.json({ success: true, data: notes });
  }

  static createSoapNote(req: Request, res: Response): void {
    const note = ClinicalService.createSoapNote(req.body);
    res.status(201).json({ success: true, data: note });
  }

  static checkSafety(req: Request, res: Response): void {
    const { patientId, medications } = req.body;
    const result = ClinicalService.verifySafety(patientId, medications || []);
    res.json({ success: true, data: result });
  }

  static searchDiagnoses(req: Request, res: Response): void {
    const q = (req.query.q as string) || '';
    const results = searchIcd10(q);
    res.json({ success: true, data: results });
  }
}
