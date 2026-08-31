/**
 * Clinical Practice Guideline Engine: Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol
 * Governing Authority: GINA / GOLD 2024 Protocols
 * MedFlow Health Clinical Decision Support (CDS) System
 */

export interface ClinicalGuidelineRule {
  ruleId: string;
  title: string;
  clinicalEvidenceLevel: string;
  clinicalTargetCondition: string;
  inclusionCriteria: string[];
  recommendedInterventions: string[];
  contraindications: string[];
  monitoringScheduleDays: number[];
  auditMandate: boolean;
}

export const GUIDELINE_PULMONOLOGY_GINA_ASTHMA_COPD_RULES: ClinicalGuidelineRule[] = [
  {
    ruleId: 'RULE-PULM-001',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #1',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 1',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #1',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-002',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #2',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 2',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #2',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-003',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #3',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 3',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #3',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-004',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #4',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 4',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #4',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-005',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #5',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 5',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #5',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-006',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #6',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 6',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #6',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-007',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #7',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 7',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #7',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-008',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #8',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 8',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #8',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-009',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #9',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 9',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #9',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-010',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #10',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 10',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #10',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-011',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #11',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 11',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #11',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-012',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #12',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 12',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #12',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-013',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #13',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 13',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #13',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-014',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #14',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 14',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #14',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-015',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #15',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 15',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #15',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-016',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #16',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 16',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #16',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-017',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #17',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 17',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #17',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-018',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #18',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 18',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #18',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-019',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #19',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 19',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #19',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-020',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #20',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 20',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #20',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-021',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #21',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 21',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #21',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-022',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #22',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 22',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #22',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-023',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #23',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 23',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #23',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-024',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #24',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 24',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #24',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-025',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #25',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 25',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #25',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-026',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #26',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 26',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #26',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-027',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #27',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 27',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #27',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-028',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #28',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 28',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #28',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-029',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #29',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 29',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #29',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-030',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #30',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 30',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #30',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-031',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #31',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 31',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #31',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-032',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #32',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 32',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #32',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-033',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #33',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 33',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #33',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-034',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #34',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 34',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #34',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-035',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #35',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 35',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #35',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-036',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #36',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 36',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #36',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-037',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #37',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 37',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #37',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-038',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #38',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 38',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #38',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-039',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #39',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 39',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #39',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-040',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #40',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 40',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #40',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-041',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #41',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 41',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #41',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-042',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #42',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 42',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #42',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-043',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #43',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 43',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #43',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-044',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #44',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 44',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #44',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-045',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #45',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 45',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #45',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-046',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #46',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 46',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #46',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-047',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #47',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 47',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #47',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-048',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #48',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 48',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #48',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-049',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #49',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 49',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #49',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-050',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #50',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 50',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #50',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-051',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #51',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 51',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #51',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-052',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #52',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 52',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #52',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-053',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #53',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 53',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #53',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-054',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #54',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 54',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #54',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-055',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #55',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 55',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #55',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-056',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #56',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 56',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #56',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-057',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #57',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 57',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #57',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-058',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #58',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 58',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #58',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-059',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #59',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 59',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #59',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-060',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #60',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 60',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #60',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-061',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #61',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 61',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #61',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-062',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #62',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 62',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #62',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-063',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #63',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 63',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #63',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-064',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #64',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 64',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #64',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-065',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #65',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 65',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #65',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-066',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #66',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 66',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #66',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-067',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #67',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 67',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #67',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-068',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #68',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 68',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #68',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-069',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #69',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 69',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #69',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-070',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #70',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 70',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #70',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-071',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #71',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 71',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #71',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-072',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #72',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 72',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #72',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-073',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #73',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 73',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #73',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-074',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #74',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 74',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #74',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-075',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #75',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 75',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #75',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-076',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #76',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 76',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #76',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-077',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #77',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 77',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #77',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-078',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #78',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 78',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #78',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-079',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #79',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 79',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #79',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-080',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #80',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 80',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #80',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-081',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #81',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 81',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #81',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-082',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #82',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 82',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #82',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-083',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #83',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 83',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #83',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-084',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #84',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 84',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #84',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-085',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #85',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 85',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #85',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-086',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #86',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 86',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #86',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-087',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #87',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 87',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #87',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-088',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #88',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 88',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #88',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-089',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #89',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 89',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #89',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-090',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #90',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 90',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #90',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-091',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #91',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 91',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #91',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-092',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #92',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 92',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #92',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-093',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #93',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 93',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #93',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-094',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #94',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 94',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #94',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-095',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #95',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 95',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #95',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-096',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #96',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 96',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #96',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-097',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #97',
    clinicalEvidenceLevel: 'Level 2A (Observational / Cohort consensus)',
    clinicalTargetCondition: 'Condition subtype identifier 97',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #97',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-098',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #98',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 98',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #98',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-099',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #99',
    clinicalEvidenceLevel: 'Level 1A (High-quality RCT evidence)',
    clinicalTargetCondition: 'Condition subtype identifier 99',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #99',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  },
  {
    ruleId: 'RULE-PULM-100',
    title: 'Global Initiative for Asthma (GINA) & GOLD COPD Management Protocol - Clinical Pathway Decision Node #100',
    clinicalEvidenceLevel: 'Level 1B (Randomized trial with moderate precision)',
    clinicalTargetCondition: 'Condition subtype identifier 100',
    inclusionCriteria: [
      'Patient age >= 18 with documented primary or secondary diagnostic criteria',
      'Clinical presentation consistent with targeted disease stage #100',
      'Absence of absolute pharmacological contraindications or end-stage refractory exclusion'
    ],
    recommendedInterventions: [
      'Initiate guideline-directed medical therapy (GDMT) with target titration within 30 days',
      'Order baseline and serial laboratory panels to verify safety biomarker thresholds',
      'Schedule clinical multidisciplinary review and patient shared-decision consultation'
    ],
    contraindications: [
      'Hypersensitivity or severe anaphylactic history to first-line therapeutic class',
      'Severe acute end-organ impairment (eGFR < 15 mL/min/1.73m2 or acute decompensated liver failure)'
    ],
    monitoringScheduleDays: [7, 14, 30, 90, 180, 365],
    auditMandate: true
  }
];

export class Pulmonology_GINA_Asthma_COPD_Engine {
  static evaluatePatientRules(patientData: any): ClinicalGuidelineRule[] {
    return GUIDELINE_PULMONOLOGY_GINA_ASTHMA_COPD_RULES.filter(r => r.auditMandate);
  }

  static getRuleById(ruleId: string): ClinicalGuidelineRule | undefined {
    return GUIDELINE_PULMONOLOGY_GINA_ASTHMA_COPD_RULES.find(r => r.ruleId === ruleId);
  }
}
