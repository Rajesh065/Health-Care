import { Request, Response } from 'express';
import { LabService } from '../services/labService';
import { AuthRequest } from '../middleware/auth';

export class LabController {
  static getAll(req: Request, res: Response): void {
    const status = req.query.status as any;
    const orders = LabService.getAll(status);
    res.json({ success: true, count: orders.length, data: orders });
  }

  static getById(req: Request, res: Response): void {
    const order = LabService.getById(req.params.id);
    if (!order) {
      res.status(404).json({ success: false, message: 'Lab order not found' });
      return;
    }
    res.json({ success: true, data: order });
  }

  static createOrder(req: Request, res: Response): void {
    const order = LabService.createOrder(req.body);
    res.status(201).json({ success: true, data: order });
  }

  static updateResults(req: AuthRequest, res: Response): void {
    const techName = req.user ? req.user.name : 'David Zhao, MLS';
    const order = LabService.updateResults(req.params.id, req.body.results, techName);
    if (!order) {
      res.status(404).json({ success: false, message: 'Lab order not found' });
      return;
    }
    res.json({ success: true, data: order });
  }
}
