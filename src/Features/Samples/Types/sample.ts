export interface Sample {
  id: number;
  name: string;
  description: string;
  status: SampleStatus;
  createdAt: string;
}

export type SampleStatus = 'active' | 'inactive'; 