import { User } from '@/Features/Auth/Types/auth';
import { httpClient } from './httpClient';

interface LoginResponse {
  token: string;
  user: User;
}

class AuthService {
  async login(email: string, password: string): Promise<User> {
    const response = await httpClient.post<LoginResponse>('/api/login', { email, password });
    localStorage.setItem('token', response.token);
    return response.user;
  }

  async logout(): Promise<void> {
    await httpClient.post('/api/logout');
    localStorage.removeItem('token');
  }

  async resetPassword(email: string): Promise<void> {
    await httpClient.post('/api/reset-password', { email });
  }

  async getCurrentUser(): Promise<User> {
    return httpClient.get<User>('/api/user/me');
  }
}

export const authService = new AuthService(); 