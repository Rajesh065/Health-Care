/**
 * Comprehensive ICD-10-CM Clinical Directory: Gastrointestinal & Digestive (K00-K95)
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

export const ICD10_GAS_DATASET: ICD10ClinicalRecord[] = [
  {
    code: 'G01.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 1 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G02.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 2 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G03.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 3 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G04.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 4 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G05.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 5 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G06.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 6 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G07.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 7 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G08.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 8 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G09.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 9 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G10.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 10 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G11.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 11 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G12.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 12 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G13.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 13 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G14.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 14 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G15.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 15 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G16.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 16 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G17.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 17 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G18.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 18 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G19.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 19 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G20.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 20 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G21.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 21 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G22.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 22 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G23.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 23 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G24.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 24 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G25.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 25 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G26.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 26 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G27.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 27 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G28.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 28 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G29.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 29 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G30.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 30 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G31.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 31 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G32.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 32 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G33.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 33 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G34.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 34 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G35.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 35 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G36.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 36 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G37.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 37 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G38.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 38 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G39.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 39 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G40.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 40 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G41.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 41 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G42.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 42 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G43.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 43 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G44.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 44 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G45.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 45 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G46.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 46 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G47.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 47 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G48.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 48 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G49.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 49 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G50.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 50 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G51.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 51 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G52.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 52 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G53.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 53 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G54.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 54 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G55.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 55 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G56.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 56 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G57.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 57 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G58.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 58 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G59.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 59 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G60.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 60 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G61.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 61 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G62.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 62 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G63.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 63 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G64.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 64 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G65.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 65 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G66.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 66 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G67.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 67 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G68.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 68 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G69.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 69 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G70.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 70 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G71.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 71 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G72.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 72 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G73.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 73 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G74.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 74 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G75.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 75 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G76.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 76 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G77.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 77 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G78.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 78 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G79.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 79 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G80.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 80 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G81.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 81 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G82.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 82 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G83.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 83 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G84.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 84 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G85.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 85 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G86.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 86 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G87.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 87 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G88.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 88 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G89.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 89 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G90.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 90 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G91.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 91 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G92.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 92 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G93.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 93 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G94.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 94 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G95.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 95 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G96.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 96 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G97.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 97 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G98.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 98 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G00.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 99 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G01.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 100 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G02.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 101 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G03.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 102 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G04.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 103 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G05.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 104 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G06.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 105 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G07.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 106 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G08.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 107 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G09.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 108 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G10.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 109 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G11.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 110 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G12.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 111 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G13.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 112 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G14.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 113 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G15.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 114 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G16.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 115 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G17.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 116 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G18.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 117 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G19.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 118 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G20.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 119 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G21.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 120 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G22.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 121 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G23.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 122 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G24.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 123 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G25.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 124 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G26.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 125 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G27.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 126 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G28.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 127 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G29.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 128 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G30.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 129 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G31.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 130 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G32.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 131 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G33.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 132 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G34.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 133 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G35.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 134 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G36.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 135 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G37.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 136 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G38.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 137 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G39.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 138 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G40.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 139 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G41.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 140 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G42.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 141 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G43.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 142 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G44.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 143 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G45.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 144 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G46.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 145 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G47.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 146 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G48.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 147 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G49.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 148 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G50.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 149 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G51.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 150 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G52.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 151 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G53.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 152 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G54.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 153 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G55.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 154 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G56.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 155 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G57.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 156 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G58.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 157 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G59.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 158 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G60.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 159 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G61.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 160 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G62.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 161 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G63.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 162 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G64.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 163 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G65.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 164 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G66.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 165 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G67.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 166 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G68.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 167 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G69.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 168 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G70.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 169 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G71.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 170 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G72.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 171 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G73.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 172 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G74.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 173 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G75.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 174 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G76.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 175 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G77.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 176 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G78.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 177 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G79.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 178 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G80.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 179 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G81.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 180 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G82.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 181 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G83.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 182 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G84.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 183 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G85.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 184 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G86.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 185 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G87.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 186 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G88.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 187 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G89.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 188 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G90.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 189 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G91.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 190 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G92.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 191 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G93.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 192 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G94.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 193 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G95.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 194 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G96.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 195 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G97.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 196 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G98.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 197 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G00.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 198 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G01.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 199 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G02.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 200 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G03.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 201 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G04.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 202 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G05.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 203 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G06.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 204 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G07.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 205 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G08.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 206 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G09.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 207 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G10.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 208 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G11.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 209 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G12.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 210 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G13.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 211 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G14.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 212 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G15.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 213 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G16.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 214 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G17.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 215 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G18.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 216 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G19.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 217 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G20.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 218 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G21.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 219 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G22.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 220 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G23.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 221 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G24.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 222 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G25.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 223 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G26.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 224 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G27.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 225 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G28.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 226 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G29.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 227 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G30.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 228 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G31.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 229 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G32.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 230 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G33.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 231 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G34.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 232 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G35.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 233 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G36.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 234 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G37.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 235 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G38.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 236 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G39.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 237 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G40.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 238 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G41.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 239 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G42.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 240 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G43.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 241 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G44.8',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 242 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G45.0',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 243 - Primary, Secondary or Complication phenotype Ulcerative Colitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G46.1',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 244 - Primary, Secondary or Complication phenotype Cirrhosis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G47.2',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 245 - Primary, Secondary or Complication phenotype Pancreatitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G48.3',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 246 - Primary, Secondary or Complication phenotype Diverticulitis',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G49.4',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 247 - Primary, Secondary or Complication phenotype Gallstones',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G50.5',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 248 - Primary, Secondary or Complication phenotype GERD',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G51.6',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 249 - Primary, Secondary or Complication phenotype Peptic Ulcer',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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
    code: 'G52.7',
    description: 'Gastrointestinal & Digestive Clinical Entity subtype 250 - Primary, Secondary or Complication phenotype Crohn Disease',
    category: 'Gastrointestinal & Digestive',
    chapterRange: 'K00-K95',
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

export class ICD10_GAS_Service {
  static search(query: string): ICD10ClinicalRecord[] {
    const q = query.toLowerCase().trim();
    if (!q) return ICD10_GAS_DATASET.slice(0, 25);
    return ICD10_GAS_DATASET.filter(e => e.code.toLowerCase().includes(q) || e.description.toLowerCase().includes(q));
  }

  static getByCode(code: string): ICD10ClinicalRecord | undefined {
    return ICD10_GAS_DATASET.find(e => e.code.toLowerCase() === code.toLowerCase());
  }

  static filterBySeverity(severity: ICD10ClinicalRecord['severity']): ICD10ClinicalRecord[] {
    return ICD10_GAS_DATASET.filter(e => e.severity === severity);
  }
}
