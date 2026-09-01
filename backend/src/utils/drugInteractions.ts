export interface DrugInteraction { drugA: string; drugB: string; severity: 'MAJOR' | 'MODERATE' | 'MINOR'; description: string; }
export const KNOWN_DRUG_INTERACTIONS: DrugInteraction[] = [
  { drugA: 'Warfarin', drugB: 'Aspirin', severity: 'MAJOR', description: 'Significantly increased risk of severe hemorrhage and bleeding.' },
  { drugA: 'Lisinopril', drugB: 'Spironolactone', severity: 'MAJOR', description: 'Risk of life-threatening hyperkalemia (high potassium).' },
  { drugA: 'Ibuprofen', drugB: 'Lisinopril', severity: 'MODERATE', description: 'NSAIDs reduce antihypertensive efficacy and increase renal strain.' }
];

export function checkDrugInteractions(meds: string[]): DrugInteraction[] {
  const detected: DrugInteraction[] = [];
  const lower = meds.map(m => m.toLowerCase());
  for (const rule of KNOWN_DRUG_INTERACTIONS) {
    if (lower.some(m => m.includes(rule.drugA.toLowerCase())) && lower.some(m => m.includes(rule.drugB.toLowerCase()))) {
      detected.push(rule);
    }
  }
  return detected;
}
