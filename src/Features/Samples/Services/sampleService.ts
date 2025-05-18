import { httpClient } from '@/Features/TopBar/Services/httpClient';
import { Sample } from '@/Features/Samples/Types/sample';

export const sampleService = {
  async getSamples(): Promise<Sample[]> {
    const response = await httpClient.get<Sample[]>('/samples');
    return response.data;
  },

  async getSampleById(id: number): Promise<Sample> {
    const response = await httpClient.get<Sample>(`/samples/${id}`);
    return response.data;
  },

  async createSample(sample: Omit<Sample, 'id'>): Promise<Sample> {
    const response = await httpClient.post<Sample>('/samples', sample);
    return response.data;
  },

  async updateSample(id: number, sample: Partial<Sample>): Promise<Sample> {
    const response = await httpClient.patch<Sample>(`/samples/${id}`, sample);
    return response.data;
  },

  async deleteSample(id: number): Promise<void> {
    await httpClient.delete(`/samples/${id}`);
  }
}; 