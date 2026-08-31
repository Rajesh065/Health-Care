export interface CptCodeEntry { code: string; description: string; category: string; standardFee: number; }
export const CPT_DATABASE: CptCodeEntry[] = [
  { code: '99213', description: 'Office visit, established patient (20-29 mins)', category: 'CONSULTATION', standardFee: 150.00 },
  { code: '99214', description: 'Office visit, established patient (30-39 mins)', category: 'CONSULTATION', standardFee: 220.00 },
  { code: '80053', description: 'Comprehensive Metabolic Panel (CMP)', category: 'LAB', standardFee: 85.00 },
  { code: '85025', description: 'Complete Blood Count (CBC) with Differential', category: 'LAB', standardFee: 65.00 }
];
