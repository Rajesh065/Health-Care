import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import { AuthRequest } from '../middleware/auth';

export class AuthController {
  static login(req: Request, res: Response): void {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ success: false, message: 'Email is required' });
      return;
    }
    const result = AuthService.login(email);
    if (!result) {
      res.status(401).json({ success: false, message: 'Invalid credentials or user not found' });
      return;
    }
    res.json({ success: true, data: result });
  }

  static getProfile(req: AuthRequest, res: Response): void {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthenticated' });
      return;
    }
    const user = AuthService.getCurrentUser(req.user.id);
    res.json({ success: true, data: user });
  }

  static listUsers(req: Request, res: Response): void {
    const users = AuthService.getAllUsers();
    res.json({ success: true, data: users });
  }
}
