export type ShipType = 'Cargo' | 'Tanker' | 'Container' | 'Bulk Carrier';

export interface Ship {
  name: string;
  type: ShipType;
  imoNumber: string;
  flag: string;
  length: number;
  beam: number;
  draft: number;
  grossTonnage: number;
  yearBuilt: number;
  status: 'Active' | 'Inactive' | 'Maintenance';
  description: string;
} 