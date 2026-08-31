import { Request, Response } from 'express';
import { LabService } from '../services/labService';
export class LabController { static getAll(req: Request, res: Response): void { res.json({ success: true, data: LabService.getAll() }); } }
