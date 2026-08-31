import { Request, Response } from 'express';
import { AppointmentService } from '../services/appointmentService';

export class AppointmentController {
  static getAll(req: Request, res: Response): void {
    const { doctorId, patientId, status } = req.query;
    const appointments = AppointmentService.getAll({
      doctorId: doctorId as string,
      patientId: patientId as string,
      status: status as any
    });
    res.json({ success: true, count: appointments.length, data: appointments });
  }

  static getById(req: Request, res: Response): void {
    const apt = AppointmentService.getById(req.params.id);
    if (!apt) {
      res.status(404).json({ success: false, message: 'Appointment not found' });
      return;
    }
    res.json({ success: true, data: apt });
  }

  static create(req: Request, res: Response): void {
    const newApt = AppointmentService.create(req.body);
    res.status(201).json({ success: true, data: newApt });
  }

  static updateStatus(req: Request, res: Response): void {
    const { status } = req.body;
    const apt = AppointmentService.updateStatus(req.params.id, status);
    if (!apt) {
      res.status(404).json({ success: false, message: 'Appointment not found' });
      return;
    }
    res.json({ success: true, data: apt });
  }
}
