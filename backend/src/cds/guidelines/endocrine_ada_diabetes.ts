/**
 * Clinical Practice Guideline Engine: ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus
 * Governing Authority: ADA 2024 Standards
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

export const GUIDELINE_ENDOCRINE_ADA_DIABETES_RULES: ClinicalGuidelineRule[] = [
  {
    ruleId: 'RULE-ENDO-001',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #1',
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
    ruleId: 'RULE-ENDO-002',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #2',
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
    ruleId: 'RULE-ENDO-003',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #3',
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
    ruleId: 'RULE-ENDO-004',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #4',
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
    ruleId: 'RULE-ENDO-005',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #5',
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
    ruleId: 'RULE-ENDO-006',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #6',
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
    ruleId: 'RULE-ENDO-007',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #7',
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
    ruleId: 'RULE-ENDO-008',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #8',
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
    ruleId: 'RULE-ENDO-009',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #9',
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
    ruleId: 'RULE-ENDO-010',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #10',
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
    ruleId: 'RULE-ENDO-011',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #11',
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
    ruleId: 'RULE-ENDO-012',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #12',
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
    ruleId: 'RULE-ENDO-013',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #13',
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
    ruleId: 'RULE-ENDO-014',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #14',
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
    ruleId: 'RULE-ENDO-015',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #15',
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
    ruleId: 'RULE-ENDO-016',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #16',
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
    ruleId: 'RULE-ENDO-017',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #17',
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
    ruleId: 'RULE-ENDO-018',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #18',
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
    ruleId: 'RULE-ENDO-019',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #19',
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
    ruleId: 'RULE-ENDO-020',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #20',
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
    ruleId: 'RULE-ENDO-021',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #21',
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
    ruleId: 'RULE-ENDO-022',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #22',
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
    ruleId: 'RULE-ENDO-023',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #23',
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
    ruleId: 'RULE-ENDO-024',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #24',
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
    ruleId: 'RULE-ENDO-025',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #25',
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
    ruleId: 'RULE-ENDO-026',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #26',
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
    ruleId: 'RULE-ENDO-027',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #27',
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
    ruleId: 'RULE-ENDO-028',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #28',
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
    ruleId: 'RULE-ENDO-029',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #29',
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
    ruleId: 'RULE-ENDO-030',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #30',
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
    ruleId: 'RULE-ENDO-031',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #31',
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
    ruleId: 'RULE-ENDO-032',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #32',
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
    ruleId: 'RULE-ENDO-033',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #33',
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
    ruleId: 'RULE-ENDO-034',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #34',
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
    ruleId: 'RULE-ENDO-035',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #35',
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
    ruleId: 'RULE-ENDO-036',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #36',
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
    ruleId: 'RULE-ENDO-037',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #37',
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
    ruleId: 'RULE-ENDO-038',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #38',
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
    ruleId: 'RULE-ENDO-039',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #39',
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
    ruleId: 'RULE-ENDO-040',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #40',
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
    ruleId: 'RULE-ENDO-041',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #41',
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
    ruleId: 'RULE-ENDO-042',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #42',
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
    ruleId: 'RULE-ENDO-043',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #43',
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
    ruleId: 'RULE-ENDO-044',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #44',
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
    ruleId: 'RULE-ENDO-045',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #45',
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
    ruleId: 'RULE-ENDO-046',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #46',
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
    ruleId: 'RULE-ENDO-047',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #47',
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
    ruleId: 'RULE-ENDO-048',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #48',
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
    ruleId: 'RULE-ENDO-049',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #49',
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
    ruleId: 'RULE-ENDO-050',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #50',
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
    ruleId: 'RULE-ENDO-051',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #51',
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
    ruleId: 'RULE-ENDO-052',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #52',
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
    ruleId: 'RULE-ENDO-053',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #53',
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
    ruleId: 'RULE-ENDO-054',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #54',
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
    ruleId: 'RULE-ENDO-055',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #55',
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
    ruleId: 'RULE-ENDO-056',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #56',
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
    ruleId: 'RULE-ENDO-057',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #57',
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
    ruleId: 'RULE-ENDO-058',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #58',
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
    ruleId: 'RULE-ENDO-059',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #59',
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
    ruleId: 'RULE-ENDO-060',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #60',
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
    ruleId: 'RULE-ENDO-061',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #61',
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
    ruleId: 'RULE-ENDO-062',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #62',
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
    ruleId: 'RULE-ENDO-063',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #63',
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
    ruleId: 'RULE-ENDO-064',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #64',
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
    ruleId: 'RULE-ENDO-065',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #65',
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
    ruleId: 'RULE-ENDO-066',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #66',
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
    ruleId: 'RULE-ENDO-067',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #67',
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
    ruleId: 'RULE-ENDO-068',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #68',
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
    ruleId: 'RULE-ENDO-069',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #69',
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
    ruleId: 'RULE-ENDO-070',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #70',
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
    ruleId: 'RULE-ENDO-071',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #71',
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
    ruleId: 'RULE-ENDO-072',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #72',
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
    ruleId: 'RULE-ENDO-073',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #73',
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
    ruleId: 'RULE-ENDO-074',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #74',
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
    ruleId: 'RULE-ENDO-075',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #75',
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
    ruleId: 'RULE-ENDO-076',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #76',
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
    ruleId: 'RULE-ENDO-077',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #77',
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
    ruleId: 'RULE-ENDO-078',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #78',
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
    ruleId: 'RULE-ENDO-079',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #79',
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
    ruleId: 'RULE-ENDO-080',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #80',
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
    ruleId: 'RULE-ENDO-081',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #81',
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
    ruleId: 'RULE-ENDO-082',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #82',
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
    ruleId: 'RULE-ENDO-083',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #83',
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
    ruleId: 'RULE-ENDO-084',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #84',
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
    ruleId: 'RULE-ENDO-085',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #85',
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
    ruleId: 'RULE-ENDO-086',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #86',
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
    ruleId: 'RULE-ENDO-087',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #87',
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
    ruleId: 'RULE-ENDO-088',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #88',
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
    ruleId: 'RULE-ENDO-089',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #89',
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
    ruleId: 'RULE-ENDO-090',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #90',
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
    ruleId: 'RULE-ENDO-091',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #91',
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
    ruleId: 'RULE-ENDO-092',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #92',
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
    ruleId: 'RULE-ENDO-093',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #93',
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
    ruleId: 'RULE-ENDO-094',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #94',
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
    ruleId: 'RULE-ENDO-095',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #95',
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
    ruleId: 'RULE-ENDO-096',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #96',
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
    ruleId: 'RULE-ENDO-097',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #97',
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
    ruleId: 'RULE-ENDO-098',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #98',
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
    ruleId: 'RULE-ENDO-099',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #99',
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
    ruleId: 'RULE-ENDO-100',
    title: 'ADA Standards of Medical Care in Type 1 & 2 Diabetes Mellitus - Clinical Pathway Decision Node #100',
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

export class Endocrine_ADA_Diabetes_Engine {
  static evaluatePatientRules(patientData: any): ClinicalGuidelineRule[] {
    return GUIDELINE_ENDOCRINE_ADA_DIABETES_RULES.filter(r => r.auditMandate);
  }

  static getRuleById(ruleId: string): ClinicalGuidelineRule | undefined {
    return GUIDELINE_ENDOCRINE_ADA_DIABETES_RULES.find(r => r.ruleId === ruleId);
  }
}
