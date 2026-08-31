import { mockDataStore } from '../models/mockData';
import { User } from '../models/types';
import { signToken } from '../utils/jwt';

export class AuthService {
  static login(email: string): { user: User; token: string } | null {
    const user = mockDataStore.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) return null;
    return { user, token: signToken(user) };
  }
  static getCurrentUser(id: string): User | null { return mockDataStore.users.find(u => u.id === id) || null; }
  static getAllUsers(): User[] { return mockDataStore.users; }
}
