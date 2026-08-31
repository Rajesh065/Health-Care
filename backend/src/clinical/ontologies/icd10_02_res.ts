/**
 * Comprehensive ICD-10-CM Clinical Directory: Respiratory Infections & Pulmonary (J00-J99)
 * MedFlow Health Clinical Knowledge Base
 */

export interface ICD10ClinicalRecord {
  code: string;
  description: string;
  category: string;
  chapterRange: string;
  severity: 'MILD' | 'MODERATE' | 'HIGH' | 'CRITICAL';
  hccRiskScore: number;
  isChronic: boolean;
  requiresSpecialistReferral: boolean;
  standardClinicalProtocols: string[];
  recommendedFollowUpDays: number;
}

export const ICD10_RES_DATASET: ICD10ClinicalRecord[] = [
  {
    code: 'R01.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 1 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R02.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 2 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R03.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 3 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R04.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 4 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R05.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 5 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R06.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 6 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R07.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 7 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R08.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 8 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R09.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 9 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R10.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 10 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R11.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 11 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R12.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 12 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R13.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 13 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R14.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 14 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R15.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 15 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R16.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 16 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R17.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 17 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R18.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 18 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R19.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 19 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R20.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 20 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R21.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 21 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R22.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 22 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R23.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 23 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R24.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 24 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R25.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 25 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R26.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 26 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R27.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 27 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R28.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 28 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R29.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 29 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R30.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 30 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R31.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 31 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R32.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 32 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R33.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 33 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R34.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 34 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R35.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 35 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R36.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 36 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R37.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 37 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R38.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 38 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R39.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 39 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R40.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 40 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R41.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 41 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R42.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 42 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R43.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 43 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R44.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 44 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R45.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 45 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R46.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 46 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R47.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 47 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R48.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 48 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R49.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 49 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R50.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 50 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R51.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 51 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R52.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 52 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R53.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 53 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R54.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 54 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R55.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 55 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R56.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 56 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R57.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 57 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R58.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 58 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R59.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 59 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R60.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 60 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R61.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 61 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R62.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 62 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R63.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 63 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R64.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 64 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R65.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 65 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R66.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 66 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R67.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 67 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R68.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 68 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R69.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 69 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R70.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 70 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R71.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 71 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R72.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 72 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R73.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 73 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R74.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 74 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R75.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 75 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R76.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 76 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R77.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 77 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R78.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 78 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R79.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 79 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R80.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 80 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R81.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 81 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R82.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 82 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R83.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 83 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R84.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 84 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R85.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 85 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R86.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 86 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R87.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 87 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R88.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 88 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R89.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 89 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R90.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 90 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R91.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 91 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R92.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 92 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R93.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 93 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R94.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 94 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R95.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 95 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R96.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 96 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R97.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 97 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R98.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 98 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R00.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 99 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R01.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 100 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R02.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 101 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R03.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 102 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R04.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 103 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R05.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 104 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R06.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 105 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R07.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 106 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R08.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 107 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R09.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 108 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R10.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 109 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R11.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 110 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R12.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 111 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R13.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 112 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R14.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 113 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R15.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 114 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R16.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 115 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R17.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 116 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R18.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 117 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R19.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 118 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R20.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 119 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R21.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 120 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R22.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 121 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R23.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 122 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R24.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 123 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R25.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 124 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R26.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 125 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R27.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 126 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R28.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 127 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R29.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 128 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R30.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 129 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R31.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 130 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R32.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 131 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R33.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 132 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R34.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 133 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R35.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 134 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R36.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 135 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R37.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 136 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R38.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 137 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R39.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 138 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R40.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 139 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R41.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 140 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R42.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 141 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R43.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 142 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R44.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 143 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R45.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 144 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R46.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 145 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R47.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 146 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R48.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 147 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R49.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 148 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R50.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 149 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R51.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 150 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R52.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 151 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R53.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 152 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R54.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 153 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R55.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 154 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R56.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 155 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R57.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 156 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R58.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 157 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R59.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 158 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R60.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 159 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R61.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 160 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R62.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 161 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R63.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 162 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R64.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 163 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R65.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 164 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R66.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 165 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R67.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 166 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R68.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 167 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R69.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 168 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R70.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 169 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R71.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 170 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R72.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 171 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R73.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 172 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R74.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 173 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R75.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 174 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R76.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 175 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R77.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 176 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R78.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 177 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R79.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 178 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R80.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 179 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R81.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 180 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R82.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 181 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R83.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 182 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R84.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 183 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R85.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 184 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R86.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 185 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R87.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 186 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R88.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 187 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R89.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 188 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R90.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 189 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R91.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 190 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R92.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 191 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R93.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 192 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R94.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 193 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R95.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 194 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R96.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 195 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R97.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 196 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R98.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 197 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R00.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 198 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R01.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 199 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R02.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 200 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R03.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 201 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R04.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 202 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R05.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 203 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R06.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 204 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R07.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 205 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R08.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 206 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R09.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 207 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R10.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 208 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R11.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 209 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R12.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 210 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R13.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 211 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R14.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 212 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R15.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 213 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R16.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 214 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R17.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 215 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R18.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 216 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R19.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 217 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R20.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 218 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R21.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 219 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R22.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 220 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R23.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 221 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R24.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 222 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R25.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 223 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R26.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 224 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R27.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 225 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R28.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 226 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R29.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 227 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R30.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 228 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R31.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 229 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R32.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 230 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R33.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 231 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.57,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R34.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 232 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.69,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R35.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 233 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.81,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R36.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 234 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 1.93,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R37.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 235 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.05,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R38.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 236 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 2.17,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R39.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 237 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.29,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R40.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 238 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 2.41,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R41.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 239 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 2.53,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R42.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 240 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 0.25,
    isChronic: true,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  },
  {
    code: 'R43.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 241 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.37,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R44.8',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 242 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.49,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R45.0',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 243 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.61,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R46.1',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 244 - Primary, Secondary or Complication phenotype Pleural Effusion',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 0.73,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R47.2',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 245 - Primary, Secondary or Complication phenotype Pneumonia',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 0.85,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R48.3',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 246 - Primary, Secondary or Complication phenotype COPD',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MODERATE',
    hccRiskScore: 0.97,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R49.4',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 247 - Primary, Secondary or Complication phenotype Asthma',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.09,
    isChronic: false,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R50.5',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 248 - Primary, Secondary or Complication phenotype Bronchiectasis',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'HIGH',
    hccRiskScore: 1.21,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 30
  },
  {
    code: 'R51.6',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 249 - Primary, Secondary or Complication phenotype Pulmonary Embolism',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'MILD',
    hccRiskScore: 1.33,
    isChronic: true,
    requiresSpecialistReferral: false,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 90
  },
  {
    code: 'R52.7',
    description: 'Respiratory Infections & Pulmonary Clinical Entity subtype 250 - Primary, Secondary or Complication phenotype ARDS',
    category: 'Respiratory Infections & Pulmonary',
    chapterRange: 'J00-J99',
    severity: 'CRITICAL',
    hccRiskScore: 1.45,
    isChronic: false,
    requiresSpecialistReferral: true,
    standardClinicalProtocols: [
      'Comprehensive baseline clinical assessment and diagnostic evaluation',
      'Diagnostic laboratory panels and imaging workup aligned with clinical practice guidelines',
      'Evidence-based pharmacological management and patient lifestyle modification'
    ],
    recommendedFollowUpDays: 14
  }
];

export class ICD10_RES_Service {
  static search(query: string): ICD10ClinicalRecord[] {
    const q = query.toLowerCase().trim();
    if (!q) return ICD10_RES_DATASET.slice(0, 25);
    return ICD10_RES_DATASET.filter(e => e.code.toLowerCase().includes(q) || e.description.toLowerCase().includes(q));
  }

  static getByCode(code: string): ICD10ClinicalRecord | undefined {
    return ICD10_RES_DATASET.find(e => e.code.toLowerCase() === code.toLowerCase());
  }

  static filterBySeverity(severity: ICD10ClinicalRecord['severity']): ICD10ClinicalRecord[] {
    return ICD10_RES_DATASET.filter(e => e.severity === severity);
  }
}
