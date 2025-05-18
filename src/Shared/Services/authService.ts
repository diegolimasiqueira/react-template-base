import { User } from '@/Entities/User/Types/index';
import { httpClient } from './httpClient';

interface LoginResponse {
  token: string;
  user: User;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  return httpClient.post<LoginResponse>('/api/login', { email, password });
};

export const logout = async (): Promise<void> => {
  return httpClient.post('/api/logout');
};

export const getCurrentUser = async (): Promise<User> => {
  return httpClient.get<User>('/api/user/me');
};