import { Request, Response } from 'express';
import { HospitalService } from '../services/hospitalService';

export class HospitalController {
  static getBeds(req: Request, res: Response): void {
    const beds = HospitalService.getBeds();
    res.json({ success: true, data: beds });
  }

  static getOccupancy(req: Request, res: Response): void {
    const stats = HospitalService.getOccupancyStats();
    res.json({ success: true, data: stats });
  }

  static getShifts(req: Request, res: Response): void {
    const shifts = HospitalService.getStaffShifts();
    res.json({ success: true, data: shifts });
  }
}
