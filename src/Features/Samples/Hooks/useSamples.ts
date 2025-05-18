import { useState, useEffect } from 'react';
import { sampleService } from '@/Features/Samples/Services/sampleService';
import { Sample } from '@/Features/Samples/Types/sample';

export const useSamples = () => {
  const [samples, setSamples] = useState<Sample[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSamples = async () => {
    try {
      setLoading(true);
      const data = await sampleService.getSamples();
      setSamples(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch samples');
      console.error('Error fetching samples:', err);
    } finally {
      setLoading(false);
    }
  };

  const createSample = async (sample: Omit<Sample, 'id'>) => {
    try {
      const newSample = await sampleService.createSample(sample);
      setSamples(prev => [...prev, newSample]);
      return newSample;
    } catch (err) {
      setError('Failed to create sample');
      throw err;
    }
  };

  const updateSample = async (id: number, sample: Partial<Sample>) => {
    try {
      const updatedSample = await sampleService.updateSample(id, sample);
      setSamples(prev => prev.map(s => s.id === id ? updatedSample : s));
      return updatedSample;
    } catch (err) {
      setError('Failed to update sample');
      throw err;
    }
  };

  const deleteSample = async (id: number) => {
    try {
      await sampleService.deleteSample(id);
      setSamples(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      setError('Failed to delete sample');
      throw err;
    }
  };

  useEffect(() => {
    fetchSamples();
  }, []);

  return {
    samples,
    loading,
    error,
    fetchSamples,
    createSample,
    updateSample,
    deleteSample
  };
}; 