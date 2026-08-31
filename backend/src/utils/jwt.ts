import jwt from 'jsonwebtoken';
import { config } from '../config';
import { User } from '../models/types';

export function signToken(user: Pick<User, 'id' | 'email' | 'role' | 'name'>): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name
    },
    config.jwtSecret,
    { expiresIn: '24h' }
  );
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, config.jwtSecret);
  } catch (err) {
    return null;
  }
}
