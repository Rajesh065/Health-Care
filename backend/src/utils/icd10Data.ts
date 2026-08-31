export interface Icd10Entry { code: string; description: string; category: string; }
export const ICD10_DATABASE: Icd10Entry[] = [
  { code: 'I10', description: 'Essential (primary) hypertension', category: 'Cardiovascular' },
  { code: 'I25.10', description: 'Atherosclerotic heart disease of native coronary artery', category: 'Cardiovascular' },
  { code: 'E11.9', description: 'Type 2 diabetes mellitus without complications', category: 'Endocrine' },
  { code: 'J45.909', description: 'Unspecified asthma, uncomplicated', category: 'Respiratory' },
  { code: 'K21.9', description: 'Gastro-esophageal reflux disease without esophagitis', category: 'Gastrointestinal' },
  { code: 'F41.1', description: 'Generalized anxiety disorder', category: 'Psychiatric' }
];

export function searchIcd10(query: string): Icd10Entry[] {
  const q = query.toLowerCase().trim();
  if (!q) return ICD10_DATABASE;
  return ICD10_DATABASE.filter(i => i.code.toLowerCase().includes(q) || i.description.toLowerCase().includes(q));
}
