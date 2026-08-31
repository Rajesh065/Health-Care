import { Request, Response } from 'express';
import { AppointmentService } from '../services/appointmentService';

export class AppointmentController {
  static getAll(req: Request, res: Response): void { res.json({ success: true, data: AppointmentService.getAll() }); }
  static updateStatus(req: Request, res: Response): void { res.json({ success: true, data: AppointmentService.updateStatus(req.params.id, req.body.status) }); }
}
