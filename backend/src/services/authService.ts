import { mockDataStore } from '../models/mockData';
import { User, UserRole } from '../models/types';
import { signToken } from '../utils/jwt';

export class AuthService {
  static login(email: string): { user: User; token: string } | null {
    const user = mockDataStore.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) return null;
    const token = signToken(user);
    return { user, token };
  }

  static getCurrentUser(id: string): User | null {
    return mockDataStore.users.find(u => u.id === id) || null;
  }

  static getAllUsers(): User[] {
    return mockDataStore.users;
  }
}
