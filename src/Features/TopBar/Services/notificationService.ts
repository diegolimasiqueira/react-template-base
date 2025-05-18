import { httpClient } from './httpClient';
import { Notification } from '@/Features/TopBar/Types/notification';

export const notificationService = {
  async getNotifications(): Promise<Notification[]> {
    const response = await httpClient.get<Notification[]>('/notifications');
    return response.data;
  },

  async markAsRead(id: string): Promise<void> {
    await httpClient.patch(`/notifications/${id}/read`);
  },

  async markAllAsRead(): Promise<void> {
    await httpClient.patch('/notifications/read-all');
  },

  async deleteNotification(id: string): Promise<void> {
    await httpClient.delete(`/notifications/${id}`);
  }
}; 