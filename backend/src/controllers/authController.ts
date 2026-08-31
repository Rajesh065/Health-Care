import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
  static login(req: Request, res: Response): void {
    const result = AuthService.login(req.body.email);
    if (!result) { res.status(401).json({ success: false, message: 'Invalid user' }); return; }
    res.json({ success: true, data: result });
  }
  static getProfile(req: any, res: Response): void { res.json({ success: true, data: req.user }); }
  static listUsers(req: Request, res: Response): void { res.json({ success: true, data: AuthService.getAllUsers() }); }
}
