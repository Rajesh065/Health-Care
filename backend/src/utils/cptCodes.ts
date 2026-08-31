export interface CptCodeEntry {
  code: string;
  description: string;
  category: 'CONSULTATION' | 'PHARMACY' | 'LAB' | 'ROOM_BED' | 'PROCEDURE';
  standardFee: number;
}

export const CPT_DATABASE: CptCodeEntry[] = [
  { code: '99213', description: 'Office or other outpatient visit, established patient (20-29 mins)', category: 'CONSULTATION', standardFee: 150.00 },
  { code: '99214', description: 'Office or other outpatient visit, established patient (30-39 mins)', category: 'CONSULTATION', standardFee: 220.00 },
  { code: '99203', description: 'Office visit, new patient (30-44 mins)', category: 'CONSULTATION', standardFee: 240.00 },
  { code: '99204', description: 'Office visit, new patient (45-59 mins)', category: 'CONSULTATION', standardFee: 310.00 },
  { code: '99442', description: 'Telehealth virtual medical discussion (11-20 mins)', category: 'CONSULTATION', standardFee: 110.00 },
  { code: '99443', description: 'Telehealth virtual medical discussion (21-30 mins)', category: 'CONSULTATION', standardFee: 160.00 },
  { code: '80053', description: 'Comprehensive Metabolic Panel (CMP Blood)', category: 'LAB', standardFee: 85.00 },
  { code: '85025', description: 'Complete Blood Count (CBC) with Automated Differential', category: 'LAB', standardFee: 65.00 },
  { code: '80061', description: 'Lipid Panel (Cholesterol, HDL, LDL, Triglycerides)', category: 'LAB', standardFee: 75.00 },
  { code: '83036', description: 'Hemoglobin A1c Glycated Protein', category: 'LAB', standardFee: 55.00 },
  { code: '71045', description: 'Chest X-Ray Single View', category: 'LAB', standardFee: 130.00 },
  { code: '70450', description: 'CT Head/Brain without Contrast', category: 'LAB', standardFee: 650.00 },
  { code: '93000', description: 'Electrocardiogram (ECG/EKG) 12-lead with interpretation', category: 'PROCEDURE', standardFee: 95.00 },
  { code: 'BED-ICU', description: 'Intensive Care Unit (ICU) Daily Room & Nursing', category: 'ROOM_BED', standardFee: 1800.00 },
  { code: 'BED-GEN', description: 'General Inpatient Ward Daily Room & Board', category: 'ROOM_BED', standardFee: 650.00 }
];
