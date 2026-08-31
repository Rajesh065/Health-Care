import { Request, Response } from 'express';
import { TriageService } from '../services/triageService';

export class TriageController {
  static assess(req: Request, res: Response): void {
    const { symptoms, duration, severity } = req.body;
    if (!symptoms || !Array.isArray(symptoms)) {
      res.status(400).json({ success: false, message: 'symptoms array is required' });
      return;
    }
    const result = TriageService.assessSymptoms(symptoms, duration || '1 day', severity || 5);
    res.json({ success: true, data: result });
  }
}
