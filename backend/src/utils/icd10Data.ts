export interface Icd10Entry {
  code: string;
  description: string;
  category: string;
}

export const ICD10_DATABASE: Icd10Entry[] = [
  { code: 'I10', description: 'Essential (primary) hypertension', category: 'Cardiovascular' },
  { code: 'I25.10', description: 'Atherosclerotic heart disease of native coronary artery', category: 'Cardiovascular' },
  { code: 'I50.9', description: 'Heart failure, unspecified', category: 'Cardiovascular' },
  { code: 'I48.91', description: 'Unspecified atrial fibrillation', category: 'Cardiovascular' },
  { code: 'E11.9', description: 'Type 2 diabetes mellitus without complications', category: 'Endocrine' },
  { code: 'E11.65', description: 'Type 2 diabetes mellitus with hyperglycemia', category: 'Endocrine' },
  { code: 'E03.9', description: 'Hypothyroidism, unspecified', category: 'Endocrine' },
  { code: 'E78.5', description: 'Hyperlipidemia, unspecified', category: 'Endocrine' },
  { code: 'J45.909', description: 'Unspecified asthma, uncomplicated', category: 'Respiratory' },
  { code: 'J44.9', description: 'Chronic obstructive pulmonary disease, unspecified', category: 'Respiratory' },
  { code: 'J18.9', description: 'Pneumonia, unspecified organism', category: 'Respiratory' },
  { code: 'J06.9', description: 'Acute upper respiratory infection, unspecified', category: 'Respiratory' },
  { code: 'K21.9', description: 'Gastro-esophageal reflux disease without esophagitis', category: 'Gastrointestinal' },
  { code: 'K58.9', description: 'Irritable bowel syndrome without diarrhea', category: 'Gastrointestinal' },
  { code: 'K29.70', description: 'Gastritis, unspecified, without bleeding', category: 'Gastrointestinal' },
  { code: 'M54.5', description: 'Low back pain', category: 'Musculoskeletal' },
  { code: 'M17.9', description: 'Osteoarthritis of knee, unspecified', category: 'Musculoskeletal' },
  { code: 'M25.511', description: 'Pain in right shoulder', category: 'Musculoskeletal' },
  { code: 'F41.1', description: 'Generalized anxiety disorder', category: 'Psychiatric' },
  { code: 'F32.9', description: 'Major depressive disorder, single episode, unspecified', category: 'Psychiatric' },
  { code: 'G43.909', description: 'Migraine, unspecified, not intractable', category: 'Neurological' },
  { code: 'G47.00', description: 'Insomnia, unspecified', category: 'Neurological' },
  { code: 'N39.0', description: 'Urinary tract infection, site not specified', category: 'Genitourinary' },
  { code: 'N18.3', description: 'Chronic kidney disease, stage 3 (moderate)', category: 'Genitourinary' },
  { code: 'L20.9', description: 'Atopic dermatitis, unspecified', category: 'Dermatological' },
  { code: 'R05.9', description: 'Cough, unspecified', category: 'Symptoms' },
  { code: 'R50.9', description: 'Fever, unspecified', category: 'Symptoms' },
  { code: 'R07.9', description: 'Chest pain, unspecified', category: 'Symptoms' },
  { code: 'R53.83', description: 'Other fatigue', category: 'Symptoms' },
  { code: 'R42', description: 'Dizziness and giddiness', category: 'Symptoms' }
];

export function searchIcd10(query: string): Icd10Entry[] {
  const q = query.toLowerCase().trim();
  if (!q) return ICD10_DATABASE.slice(0, 10);
  return ICD10_DATABASE.filter(
    item => item.code.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
  );
}
