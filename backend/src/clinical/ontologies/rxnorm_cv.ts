/**
 * RxNorm Medication Knowledge Base: Cardiovascular Agents
 * MedFlow Health Clinical Pharmacology Suite
 */

export interface RxNormMedication {
  rxcui: string;
  ndcCode: string;
  brandName: string;
  genericName: string;
  therapeuticClass: string;
  subClass: string;
  standardDosage: string;
  dosageForm: string;
  route: string;
  halfLifeHours: number;
  bioavailabilityPercent: number;
  pregnancyCategory: string;
  renalAdjustmentRequired: boolean;
  hepaticAdjustmentRequired: boolean;
  blackBoxWarnings: string[];
}

export const RXNORM_CV_DATASET: RxNormMedication[] = [
  {
    rxcui: '200013',
    ndcCode: 'NDC-0001-1001',
    brandName: 'Brand-CV-001',
    genericName: 'Pharmaceutical Agent CV-001 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '20mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 5,
    bioavailabilityPercent: 46,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200026',
    ndcCode: 'NDC-0002-1002',
    brandName: 'Brand-CV-002',
    genericName: 'Pharmaceutical Agent CV-002 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 6,
    bioavailabilityPercent: 47,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200039',
    ndcCode: 'NDC-0003-1003',
    brandName: 'Brand-CV-003',
    genericName: 'Pharmaceutical Agent CV-003 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '40mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 7,
    bioavailabilityPercent: 48,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200052',
    ndcCode: 'NDC-0004-1004',
    brandName: 'Brand-CV-004',
    genericName: 'Pharmaceutical Agent CV-004 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 8,
    bioavailabilityPercent: 49,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200065',
    ndcCode: 'NDC-0005-1005',
    brandName: 'Brand-CV-005',
    genericName: 'Pharmaceutical Agent CV-005 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '60mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 9,
    bioavailabilityPercent: 50,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200078',
    ndcCode: 'NDC-0006-1006',
    brandName: 'Brand-CV-006',
    genericName: 'Pharmaceutical Agent CV-006 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 10,
    bioavailabilityPercent: 51,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200091',
    ndcCode: 'NDC-0007-1007',
    brandName: 'Brand-CV-007',
    genericName: 'Pharmaceutical Agent CV-007 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '80mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 11,
    bioavailabilityPercent: 52,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200104',
    ndcCode: 'NDC-0008-1008',
    brandName: 'Brand-CV-008',
    genericName: 'Pharmaceutical Agent CV-008 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 12,
    bioavailabilityPercent: 53,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200117',
    ndcCode: 'NDC-0009-1009',
    brandName: 'Brand-CV-009',
    genericName: 'Pharmaceutical Agent CV-009 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '100mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 13,
    bioavailabilityPercent: 54,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200130',
    ndcCode: 'NDC-0010-1010',
    brandName: 'Brand-CV-010',
    genericName: 'Pharmaceutical Agent CV-010 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 14,
    bioavailabilityPercent: 55,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200143',
    ndcCode: 'NDC-0011-1011',
    brandName: 'Brand-CV-011',
    genericName: 'Pharmaceutical Agent CV-011 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '20mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 15,
    bioavailabilityPercent: 56,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200156',
    ndcCode: 'NDC-0012-1012',
    brandName: 'Brand-CV-012',
    genericName: 'Pharmaceutical Agent CV-012 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 16,
    bioavailabilityPercent: 57,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200169',
    ndcCode: 'NDC-0013-1013',
    brandName: 'Brand-CV-013',
    genericName: 'Pharmaceutical Agent CV-013 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '40mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 17,
    bioavailabilityPercent: 58,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200182',
    ndcCode: 'NDC-0014-1014',
    brandName: 'Brand-CV-014',
    genericName: 'Pharmaceutical Agent CV-014 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 18,
    bioavailabilityPercent: 59,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200195',
    ndcCode: 'NDC-0015-1015',
    brandName: 'Brand-CV-015',
    genericName: 'Pharmaceutical Agent CV-015 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '60mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 19,
    bioavailabilityPercent: 60,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200208',
    ndcCode: 'NDC-0016-1016',
    brandName: 'Brand-CV-016',
    genericName: 'Pharmaceutical Agent CV-016 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 20,
    bioavailabilityPercent: 61,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200221',
    ndcCode: 'NDC-0017-1017',
    brandName: 'Brand-CV-017',
    genericName: 'Pharmaceutical Agent CV-017 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '80mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 21,
    bioavailabilityPercent: 62,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200234',
    ndcCode: 'NDC-0018-1018',
    brandName: 'Brand-CV-018',
    genericName: 'Pharmaceutical Agent CV-018 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 22,
    bioavailabilityPercent: 63,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200247',
    ndcCode: 'NDC-0019-1019',
    brandName: 'Brand-CV-019',
    genericName: 'Pharmaceutical Agent CV-019 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '100mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 23,
    bioavailabilityPercent: 64,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200260',
    ndcCode: 'NDC-0020-1020',
    brandName: 'Brand-CV-020',
    genericName: 'Pharmaceutical Agent CV-020 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 24,
    bioavailabilityPercent: 65,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200273',
    ndcCode: 'NDC-0021-1021',
    brandName: 'Brand-CV-021',
    genericName: 'Pharmaceutical Agent CV-021 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '20mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 25,
    bioavailabilityPercent: 66,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200286',
    ndcCode: 'NDC-0022-1022',
    brandName: 'Brand-CV-022',
    genericName: 'Pharmaceutical Agent CV-022 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 26,
    bioavailabilityPercent: 67,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200299',
    ndcCode: 'NDC-0023-1023',
    brandName: 'Brand-CV-023',
    genericName: 'Pharmaceutical Agent CV-023 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '40mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 27,
    bioavailabilityPercent: 68,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200312',
    ndcCode: 'NDC-0024-1024',
    brandName: 'Brand-CV-024',
    genericName: 'Pharmaceutical Agent CV-024 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 28,
    bioavailabilityPercent: 69,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200325',
    ndcCode: 'NDC-0025-1025',
    brandName: 'Brand-CV-025',
    genericName: 'Pharmaceutical Agent CV-025 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '60mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 29,
    bioavailabilityPercent: 70,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200338',
    ndcCode: 'NDC-0026-1026',
    brandName: 'Brand-CV-026',
    genericName: 'Pharmaceutical Agent CV-026 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 30,
    bioavailabilityPercent: 71,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200351',
    ndcCode: 'NDC-0027-1027',
    brandName: 'Brand-CV-027',
    genericName: 'Pharmaceutical Agent CV-027 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '80mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 31,
    bioavailabilityPercent: 72,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200364',
    ndcCode: 'NDC-0028-1028',
    brandName: 'Brand-CV-028',
    genericName: 'Pharmaceutical Agent CV-028 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 32,
    bioavailabilityPercent: 73,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200377',
    ndcCode: 'NDC-0029-1029',
    brandName: 'Brand-CV-029',
    genericName: 'Pharmaceutical Agent CV-029 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '100mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 33,
    bioavailabilityPercent: 74,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200390',
    ndcCode: 'NDC-0030-1030',
    brandName: 'Brand-CV-030',
    genericName: 'Pharmaceutical Agent CV-030 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 34,
    bioavailabilityPercent: 75,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200403',
    ndcCode: 'NDC-0031-1031',
    brandName: 'Brand-CV-031',
    genericName: 'Pharmaceutical Agent CV-031 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '20mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 35,
    bioavailabilityPercent: 76,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200416',
    ndcCode: 'NDC-0032-1032',
    brandName: 'Brand-CV-032',
    genericName: 'Pharmaceutical Agent CV-032 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 36,
    bioavailabilityPercent: 77,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200429',
    ndcCode: 'NDC-0033-1033',
    brandName: 'Brand-CV-033',
    genericName: 'Pharmaceutical Agent CV-033 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '40mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 37,
    bioavailabilityPercent: 78,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200442',
    ndcCode: 'NDC-0034-1034',
    brandName: 'Brand-CV-034',
    genericName: 'Pharmaceutical Agent CV-034 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 38,
    bioavailabilityPercent: 79,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200455',
    ndcCode: 'NDC-0035-1035',
    brandName: 'Brand-CV-035',
    genericName: 'Pharmaceutical Agent CV-035 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '60mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 39,
    bioavailabilityPercent: 80,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200468',
    ndcCode: 'NDC-0036-1036',
    brandName: 'Brand-CV-036',
    genericName: 'Pharmaceutical Agent CV-036 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 4,
    bioavailabilityPercent: 81,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200481',
    ndcCode: 'NDC-0037-1037',
    brandName: 'Brand-CV-037',
    genericName: 'Pharmaceutical Agent CV-037 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '80mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 5,
    bioavailabilityPercent: 82,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200494',
    ndcCode: 'NDC-0038-1038',
    brandName: 'Brand-CV-038',
    genericName: 'Pharmaceutical Agent CV-038 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 6,
    bioavailabilityPercent: 83,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200507',
    ndcCode: 'NDC-0039-1039',
    brandName: 'Brand-CV-039',
    genericName: 'Pharmaceutical Agent CV-039 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '100mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 7,
    bioavailabilityPercent: 84,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200520',
    ndcCode: 'NDC-0040-1040',
    brandName: 'Brand-CV-040',
    genericName: 'Pharmaceutical Agent CV-040 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 8,
    bioavailabilityPercent: 85,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200533',
    ndcCode: 'NDC-0041-1041',
    brandName: 'Brand-CV-041',
    genericName: 'Pharmaceutical Agent CV-041 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '20mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 9,
    bioavailabilityPercent: 86,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200546',
    ndcCode: 'NDC-0042-1042',
    brandName: 'Brand-CV-042',
    genericName: 'Pharmaceutical Agent CV-042 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 10,
    bioavailabilityPercent: 87,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200559',
    ndcCode: 'NDC-0043-1043',
    brandName: 'Brand-CV-043',
    genericName: 'Pharmaceutical Agent CV-043 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '40mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 11,
    bioavailabilityPercent: 88,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200572',
    ndcCode: 'NDC-0044-1044',
    brandName: 'Brand-CV-044',
    genericName: 'Pharmaceutical Agent CV-044 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 12,
    bioavailabilityPercent: 89,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200585',
    ndcCode: 'NDC-0045-1045',
    brandName: 'Brand-CV-045',
    genericName: 'Pharmaceutical Agent CV-045 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '60mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 13,
    bioavailabilityPercent: 90,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200598',
    ndcCode: 'NDC-0046-1046',
    brandName: 'Brand-CV-046',
    genericName: 'Pharmaceutical Agent CV-046 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 14,
    bioavailabilityPercent: 91,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200611',
    ndcCode: 'NDC-0047-1047',
    brandName: 'Brand-CV-047',
    genericName: 'Pharmaceutical Agent CV-047 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '80mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 15,
    bioavailabilityPercent: 92,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200624',
    ndcCode: 'NDC-0048-1048',
    brandName: 'Brand-CV-048',
    genericName: 'Pharmaceutical Agent CV-048 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 16,
    bioavailabilityPercent: 93,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200637',
    ndcCode: 'NDC-0049-1049',
    brandName: 'Brand-CV-049',
    genericName: 'Pharmaceutical Agent CV-049 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '100mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 17,
    bioavailabilityPercent: 94,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200650',
    ndcCode: 'NDC-0050-1050',
    brandName: 'Brand-CV-050',
    genericName: 'Pharmaceutical Agent CV-050 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 18,
    bioavailabilityPercent: 45,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200663',
    ndcCode: 'NDC-0051-1051',
    brandName: 'Brand-CV-051',
    genericName: 'Pharmaceutical Agent CV-051 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '20mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 19,
    bioavailabilityPercent: 46,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200676',
    ndcCode: 'NDC-0052-1052',
    brandName: 'Brand-CV-052',
    genericName: 'Pharmaceutical Agent CV-052 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 20,
    bioavailabilityPercent: 47,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200689',
    ndcCode: 'NDC-0053-1053',
    brandName: 'Brand-CV-053',
    genericName: 'Pharmaceutical Agent CV-053 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '40mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 21,
    bioavailabilityPercent: 48,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200702',
    ndcCode: 'NDC-0054-1054',
    brandName: 'Brand-CV-054',
    genericName: 'Pharmaceutical Agent CV-054 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 22,
    bioavailabilityPercent: 49,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200715',
    ndcCode: 'NDC-0055-1055',
    brandName: 'Brand-CV-055',
    genericName: 'Pharmaceutical Agent CV-055 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '60mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 23,
    bioavailabilityPercent: 50,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200728',
    ndcCode: 'NDC-0056-1056',
    brandName: 'Brand-CV-056',
    genericName: 'Pharmaceutical Agent CV-056 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 24,
    bioavailabilityPercent: 51,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200741',
    ndcCode: 'NDC-0057-1057',
    brandName: 'Brand-CV-057',
    genericName: 'Pharmaceutical Agent CV-057 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '80mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 25,
    bioavailabilityPercent: 52,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200754',
    ndcCode: 'NDC-0058-1058',
    brandName: 'Brand-CV-058',
    genericName: 'Pharmaceutical Agent CV-058 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 26,
    bioavailabilityPercent: 53,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200767',
    ndcCode: 'NDC-0059-1059',
    brandName: 'Brand-CV-059',
    genericName: 'Pharmaceutical Agent CV-059 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '100mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 27,
    bioavailabilityPercent: 54,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200780',
    ndcCode: 'NDC-0060-1060',
    brandName: 'Brand-CV-060',
    genericName: 'Pharmaceutical Agent CV-060 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 28,
    bioavailabilityPercent: 55,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200793',
    ndcCode: 'NDC-0061-1061',
    brandName: 'Brand-CV-061',
    genericName: 'Pharmaceutical Agent CV-061 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '20mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 29,
    bioavailabilityPercent: 56,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200806',
    ndcCode: 'NDC-0062-1062',
    brandName: 'Brand-CV-062',
    genericName: 'Pharmaceutical Agent CV-062 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 30,
    bioavailabilityPercent: 57,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200819',
    ndcCode: 'NDC-0063-1063',
    brandName: 'Brand-CV-063',
    genericName: 'Pharmaceutical Agent CV-063 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '40mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 31,
    bioavailabilityPercent: 58,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200832',
    ndcCode: 'NDC-0064-1064',
    brandName: 'Brand-CV-064',
    genericName: 'Pharmaceutical Agent CV-064 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 32,
    bioavailabilityPercent: 59,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200845',
    ndcCode: 'NDC-0065-1065',
    brandName: 'Brand-CV-065',
    genericName: 'Pharmaceutical Agent CV-065 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '60mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 33,
    bioavailabilityPercent: 60,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200858',
    ndcCode: 'NDC-0066-1066',
    brandName: 'Brand-CV-066',
    genericName: 'Pharmaceutical Agent CV-066 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 34,
    bioavailabilityPercent: 61,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200871',
    ndcCode: 'NDC-0067-1067',
    brandName: 'Brand-CV-067',
    genericName: 'Pharmaceutical Agent CV-067 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '80mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 35,
    bioavailabilityPercent: 62,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200884',
    ndcCode: 'NDC-0068-1068',
    brandName: 'Brand-CV-068',
    genericName: 'Pharmaceutical Agent CV-068 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 36,
    bioavailabilityPercent: 63,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200897',
    ndcCode: 'NDC-0069-1069',
    brandName: 'Brand-CV-069',
    genericName: 'Pharmaceutical Agent CV-069 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '100mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 37,
    bioavailabilityPercent: 64,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200910',
    ndcCode: 'NDC-0070-1070',
    brandName: 'Brand-CV-070',
    genericName: 'Pharmaceutical Agent CV-070 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 38,
    bioavailabilityPercent: 65,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200923',
    ndcCode: 'NDC-0071-1071',
    brandName: 'Brand-CV-071',
    genericName: 'Pharmaceutical Agent CV-071 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '20mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 39,
    bioavailabilityPercent: 66,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200936',
    ndcCode: 'NDC-0072-1072',
    brandName: 'Brand-CV-072',
    genericName: 'Pharmaceutical Agent CV-072 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 4,
    bioavailabilityPercent: 67,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200949',
    ndcCode: 'NDC-0073-1073',
    brandName: 'Brand-CV-073',
    genericName: 'Pharmaceutical Agent CV-073 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '40mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 5,
    bioavailabilityPercent: 68,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200962',
    ndcCode: 'NDC-0074-1074',
    brandName: 'Brand-CV-074',
    genericName: 'Pharmaceutical Agent CV-074 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 6,
    bioavailabilityPercent: 69,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '200975',
    ndcCode: 'NDC-0075-1075',
    brandName: 'Brand-CV-075',
    genericName: 'Pharmaceutical Agent CV-075 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '60mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 7,
    bioavailabilityPercent: 70,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '200988',
    ndcCode: 'NDC-0076-1076',
    brandName: 'Brand-CV-076',
    genericName: 'Pharmaceutical Agent CV-076 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 8,
    bioavailabilityPercent: 71,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201001',
    ndcCode: 'NDC-0077-1077',
    brandName: 'Brand-CV-077',
    genericName: 'Pharmaceutical Agent CV-077 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '80mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 9,
    bioavailabilityPercent: 72,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201014',
    ndcCode: 'NDC-0078-1078',
    brandName: 'Brand-CV-078',
    genericName: 'Pharmaceutical Agent CV-078 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 10,
    bioavailabilityPercent: 73,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201027',
    ndcCode: 'NDC-0079-1079',
    brandName: 'Brand-CV-079',
    genericName: 'Pharmaceutical Agent CV-079 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '100mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 11,
    bioavailabilityPercent: 74,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201040',
    ndcCode: 'NDC-0080-1080',
    brandName: 'Brand-CV-080',
    genericName: 'Pharmaceutical Agent CV-080 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 12,
    bioavailabilityPercent: 75,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201053',
    ndcCode: 'NDC-0081-1081',
    brandName: 'Brand-CV-081',
    genericName: 'Pharmaceutical Agent CV-081 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '20mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 13,
    bioavailabilityPercent: 76,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201066',
    ndcCode: 'NDC-0082-1082',
    brandName: 'Brand-CV-082',
    genericName: 'Pharmaceutical Agent CV-082 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 14,
    bioavailabilityPercent: 77,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201079',
    ndcCode: 'NDC-0083-1083',
    brandName: 'Brand-CV-083',
    genericName: 'Pharmaceutical Agent CV-083 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '40mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 15,
    bioavailabilityPercent: 78,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201092',
    ndcCode: 'NDC-0084-1084',
    brandName: 'Brand-CV-084',
    genericName: 'Pharmaceutical Agent CV-084 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 16,
    bioavailabilityPercent: 79,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201105',
    ndcCode: 'NDC-0085-1085',
    brandName: 'Brand-CV-085',
    genericName: 'Pharmaceutical Agent CV-085 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '60mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 17,
    bioavailabilityPercent: 80,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201118',
    ndcCode: 'NDC-0086-1086',
    brandName: 'Brand-CV-086',
    genericName: 'Pharmaceutical Agent CV-086 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 18,
    bioavailabilityPercent: 81,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201131',
    ndcCode: 'NDC-0087-1087',
    brandName: 'Brand-CV-087',
    genericName: 'Pharmaceutical Agent CV-087 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '80mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 19,
    bioavailabilityPercent: 82,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201144',
    ndcCode: 'NDC-0088-1088',
    brandName: 'Brand-CV-088',
    genericName: 'Pharmaceutical Agent CV-088 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 20,
    bioavailabilityPercent: 83,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201157',
    ndcCode: 'NDC-0089-1089',
    brandName: 'Brand-CV-089',
    genericName: 'Pharmaceutical Agent CV-089 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '100mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 21,
    bioavailabilityPercent: 84,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201170',
    ndcCode: 'NDC-0090-1090',
    brandName: 'Brand-CV-090',
    genericName: 'Pharmaceutical Agent CV-090 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 22,
    bioavailabilityPercent: 85,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201183',
    ndcCode: 'NDC-0091-1091',
    brandName: 'Brand-CV-091',
    genericName: 'Pharmaceutical Agent CV-091 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '20mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 23,
    bioavailabilityPercent: 86,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201196',
    ndcCode: 'NDC-0092-1092',
    brandName: 'Brand-CV-092',
    genericName: 'Pharmaceutical Agent CV-092 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 24,
    bioavailabilityPercent: 87,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201209',
    ndcCode: 'NDC-0093-1093',
    brandName: 'Brand-CV-093',
    genericName: 'Pharmaceutical Agent CV-093 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '40mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 25,
    bioavailabilityPercent: 88,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201222',
    ndcCode: 'NDC-0094-1094',
    brandName: 'Brand-CV-094',
    genericName: 'Pharmaceutical Agent CV-094 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 26,
    bioavailabilityPercent: 89,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201235',
    ndcCode: 'NDC-0095-1095',
    brandName: 'Brand-CV-095',
    genericName: 'Pharmaceutical Agent CV-095 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '60mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 27,
    bioavailabilityPercent: 90,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201248',
    ndcCode: 'NDC-0096-1096',
    brandName: 'Brand-CV-096',
    genericName: 'Pharmaceutical Agent CV-096 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 28,
    bioavailabilityPercent: 91,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201261',
    ndcCode: 'NDC-0097-1097',
    brandName: 'Brand-CV-097',
    genericName: 'Pharmaceutical Agent CV-097 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '80mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 29,
    bioavailabilityPercent: 92,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201274',
    ndcCode: 'NDC-0098-1098',
    brandName: 'Brand-CV-098',
    genericName: 'Pharmaceutical Agent CV-098 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 30,
    bioavailabilityPercent: 93,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201287',
    ndcCode: 'NDC-0000-1099',
    brandName: 'Brand-CV-099',
    genericName: 'Pharmaceutical Agent CV-099 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '100mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 31,
    bioavailabilityPercent: 94,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201300',
    ndcCode: 'NDC-0001-1100',
    brandName: 'Brand-CV-100',
    genericName: 'Pharmaceutical Agent CV-100 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 32,
    bioavailabilityPercent: 45,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201313',
    ndcCode: 'NDC-0002-1101',
    brandName: 'Brand-CV-101',
    genericName: 'Pharmaceutical Agent CV-101 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '20mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 33,
    bioavailabilityPercent: 46,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201326',
    ndcCode: 'NDC-0003-1102',
    brandName: 'Brand-CV-102',
    genericName: 'Pharmaceutical Agent CV-102 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 34,
    bioavailabilityPercent: 47,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201339',
    ndcCode: 'NDC-0004-1103',
    brandName: 'Brand-CV-103',
    genericName: 'Pharmaceutical Agent CV-103 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '40mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 35,
    bioavailabilityPercent: 48,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201352',
    ndcCode: 'NDC-0005-1104',
    brandName: 'Brand-CV-104',
    genericName: 'Pharmaceutical Agent CV-104 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 36,
    bioavailabilityPercent: 49,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201365',
    ndcCode: 'NDC-0006-1105',
    brandName: 'Brand-CV-105',
    genericName: 'Pharmaceutical Agent CV-105 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '60mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 37,
    bioavailabilityPercent: 50,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201378',
    ndcCode: 'NDC-0007-1106',
    brandName: 'Brand-CV-106',
    genericName: 'Pharmaceutical Agent CV-106 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 38,
    bioavailabilityPercent: 51,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201391',
    ndcCode: 'NDC-0008-1107',
    brandName: 'Brand-CV-107',
    genericName: 'Pharmaceutical Agent CV-107 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '80mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 39,
    bioavailabilityPercent: 52,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201404',
    ndcCode: 'NDC-0009-1108',
    brandName: 'Brand-CV-108',
    genericName: 'Pharmaceutical Agent CV-108 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 4,
    bioavailabilityPercent: 53,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201417',
    ndcCode: 'NDC-0010-1109',
    brandName: 'Brand-CV-109',
    genericName: 'Pharmaceutical Agent CV-109 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '100mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 5,
    bioavailabilityPercent: 54,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201430',
    ndcCode: 'NDC-0011-1110',
    brandName: 'Brand-CV-110',
    genericName: 'Pharmaceutical Agent CV-110 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 6,
    bioavailabilityPercent: 55,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201443',
    ndcCode: 'NDC-0012-1111',
    brandName: 'Brand-CV-111',
    genericName: 'Pharmaceutical Agent CV-111 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '20mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 7,
    bioavailabilityPercent: 56,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201456',
    ndcCode: 'NDC-0013-1112',
    brandName: 'Brand-CV-112',
    genericName: 'Pharmaceutical Agent CV-112 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 8,
    bioavailabilityPercent: 57,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201469',
    ndcCode: 'NDC-0014-1113',
    brandName: 'Brand-CV-113',
    genericName: 'Pharmaceutical Agent CV-113 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '40mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 9,
    bioavailabilityPercent: 58,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201482',
    ndcCode: 'NDC-0015-1114',
    brandName: 'Brand-CV-114',
    genericName: 'Pharmaceutical Agent CV-114 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 10,
    bioavailabilityPercent: 59,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201495',
    ndcCode: 'NDC-0016-1115',
    brandName: 'Brand-CV-115',
    genericName: 'Pharmaceutical Agent CV-115 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '60mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 11,
    bioavailabilityPercent: 60,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201508',
    ndcCode: 'NDC-0017-1116',
    brandName: 'Brand-CV-116',
    genericName: 'Pharmaceutical Agent CV-116 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 12,
    bioavailabilityPercent: 61,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201521',
    ndcCode: 'NDC-0018-1117',
    brandName: 'Brand-CV-117',
    genericName: 'Pharmaceutical Agent CV-117 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '80mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 13,
    bioavailabilityPercent: 62,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201534',
    ndcCode: 'NDC-0019-1118',
    brandName: 'Brand-CV-118',
    genericName: 'Pharmaceutical Agent CV-118 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 14,
    bioavailabilityPercent: 63,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201547',
    ndcCode: 'NDC-0020-1119',
    brandName: 'Brand-CV-119',
    genericName: 'Pharmaceutical Agent CV-119 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '100mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 15,
    bioavailabilityPercent: 64,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201560',
    ndcCode: 'NDC-0021-1120',
    brandName: 'Brand-CV-120',
    genericName: 'Pharmaceutical Agent CV-120 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 16,
    bioavailabilityPercent: 65,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201573',
    ndcCode: 'NDC-0022-1121',
    brandName: 'Brand-CV-121',
    genericName: 'Pharmaceutical Agent CV-121 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '20mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 17,
    bioavailabilityPercent: 66,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201586',
    ndcCode: 'NDC-0023-1122',
    brandName: 'Brand-CV-122',
    genericName: 'Pharmaceutical Agent CV-122 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 18,
    bioavailabilityPercent: 67,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201599',
    ndcCode: 'NDC-0024-1123',
    brandName: 'Brand-CV-123',
    genericName: 'Pharmaceutical Agent CV-123 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '40mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 19,
    bioavailabilityPercent: 68,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201612',
    ndcCode: 'NDC-0025-1124',
    brandName: 'Brand-CV-124',
    genericName: 'Pharmaceutical Agent CV-124 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 20,
    bioavailabilityPercent: 69,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201625',
    ndcCode: 'NDC-0026-1125',
    brandName: 'Brand-CV-125',
    genericName: 'Pharmaceutical Agent CV-125 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '60mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 21,
    bioavailabilityPercent: 70,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201638',
    ndcCode: 'NDC-0027-1126',
    brandName: 'Brand-CV-126',
    genericName: 'Pharmaceutical Agent CV-126 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 22,
    bioavailabilityPercent: 71,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201651',
    ndcCode: 'NDC-0028-1127',
    brandName: 'Brand-CV-127',
    genericName: 'Pharmaceutical Agent CV-127 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '80mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 23,
    bioavailabilityPercent: 72,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201664',
    ndcCode: 'NDC-0029-1128',
    brandName: 'Brand-CV-128',
    genericName: 'Pharmaceutical Agent CV-128 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 24,
    bioavailabilityPercent: 73,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201677',
    ndcCode: 'NDC-0030-1129',
    brandName: 'Brand-CV-129',
    genericName: 'Pharmaceutical Agent CV-129 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '100mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 25,
    bioavailabilityPercent: 74,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201690',
    ndcCode: 'NDC-0031-1130',
    brandName: 'Brand-CV-130',
    genericName: 'Pharmaceutical Agent CV-130 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 26,
    bioavailabilityPercent: 75,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201703',
    ndcCode: 'NDC-0032-1131',
    brandName: 'Brand-CV-131',
    genericName: 'Pharmaceutical Agent CV-131 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '20mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 27,
    bioavailabilityPercent: 76,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201716',
    ndcCode: 'NDC-0033-1132',
    brandName: 'Brand-CV-132',
    genericName: 'Pharmaceutical Agent CV-132 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 28,
    bioavailabilityPercent: 77,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201729',
    ndcCode: 'NDC-0034-1133',
    brandName: 'Brand-CV-133',
    genericName: 'Pharmaceutical Agent CV-133 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '40mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 29,
    bioavailabilityPercent: 78,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201742',
    ndcCode: 'NDC-0035-1134',
    brandName: 'Brand-CV-134',
    genericName: 'Pharmaceutical Agent CV-134 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 30,
    bioavailabilityPercent: 79,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201755',
    ndcCode: 'NDC-0036-1135',
    brandName: 'Brand-CV-135',
    genericName: 'Pharmaceutical Agent CV-135 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '60mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 31,
    bioavailabilityPercent: 80,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201768',
    ndcCode: 'NDC-0037-1136',
    brandName: 'Brand-CV-136',
    genericName: 'Pharmaceutical Agent CV-136 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 32,
    bioavailabilityPercent: 81,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201781',
    ndcCode: 'NDC-0038-1137',
    brandName: 'Brand-CV-137',
    genericName: 'Pharmaceutical Agent CV-137 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '80mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 33,
    bioavailabilityPercent: 82,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201794',
    ndcCode: 'NDC-0039-1138',
    brandName: 'Brand-CV-138',
    genericName: 'Pharmaceutical Agent CV-138 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 34,
    bioavailabilityPercent: 83,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201807',
    ndcCode: 'NDC-0040-1139',
    brandName: 'Brand-CV-139',
    genericName: 'Pharmaceutical Agent CV-139 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '100mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 35,
    bioavailabilityPercent: 84,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201820',
    ndcCode: 'NDC-0041-1140',
    brandName: 'Brand-CV-140',
    genericName: 'Pharmaceutical Agent CV-140 (PCSK9 Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'PCSK9 Inhibitor',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 36,
    bioavailabilityPercent: 85,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201833',
    ndcCode: 'NDC-0042-1141',
    brandName: 'Brand-CV-141',
    genericName: 'Pharmaceutical Agent CV-141 (Anticoagulant)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Anticoagulant',
    standardDosage: '20mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 37,
    bioavailabilityPercent: 86,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201846',
    ndcCode: 'NDC-0043-1142',
    brandName: 'Brand-CV-142',
    genericName: 'Pharmaceutical Agent CV-142 (Antiplatelet)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiplatelet',
    standardDosage: '30mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 38,
    bioavailabilityPercent: 87,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201859',
    ndcCode: 'NDC-0044-1143',
    brandName: 'Brand-CV-143',
    genericName: 'Pharmaceutical Agent CV-143 (Antihypertensive)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antihypertensive',
    standardDosage: '40mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 39,
    bioavailabilityPercent: 88,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201872',
    ndcCode: 'NDC-0045-1144',
    brandName: 'Brand-CV-144',
    genericName: 'Pharmaceutical Agent CV-144 (Beta Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Beta Blocker',
    standardDosage: '50mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 4,
    bioavailabilityPercent: 89,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201885',
    ndcCode: 'NDC-0046-1145',
    brandName: 'Brand-CV-145',
    genericName: 'Pharmaceutical Agent CV-145 (ACE Inhibitor)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'ACE Inhibitor',
    standardDosage: '60mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 5,
    bioavailabilityPercent: 90,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201898',
    ndcCode: 'NDC-0047-1146',
    brandName: 'Brand-CV-146',
    genericName: 'Pharmaceutical Agent CV-146 (Angiotensin Receptor Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Angiotensin Receptor Blocker',
    standardDosage: '70mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 6,
    bioavailabilityPercent: 91,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201911',
    ndcCode: 'NDC-0048-1147',
    brandName: 'Brand-CV-147',
    genericName: 'Pharmaceutical Agent CV-147 (Calcium Channel Blocker)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Calcium Channel Blocker',
    standardDosage: '80mg',
    dosageForm: 'Capsule',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 7,
    bioavailabilityPercent: 92,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201924',
    ndcCode: 'NDC-0049-1148',
    brandName: 'Brand-CV-148',
    genericName: 'Pharmaceutical Agent CV-148 (Direct Vasodilator)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Direct Vasodilator',
    standardDosage: '90mg',
    dosageForm: 'Tablet',
    route: 'Oral',
    halfLifeHours: 8,
    bioavailabilityPercent: 93,
    pregnancyCategory: 'A',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  },
  {
    rxcui: '201937',
    ndcCode: 'NDC-0050-1149',
    brandName: 'Brand-CV-149',
    genericName: 'Pharmaceutical Agent CV-149 (Antiarrhythmic)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Antiarrhythmic',
    standardDosage: '100mg',
    dosageForm: 'Injectable Solution',
    route: 'Oral',
    halfLifeHours: 9,
    bioavailabilityPercent: 94,
    pregnancyCategory: 'C',
    renalAdjustmentRequired: false,
    hepaticAdjustmentRequired: false,
    blackBoxWarnings: [
      Avoid sudden discontinuation to prevent rebound clinical exacerbation.
    ]
  },
  {
    rxcui: '201950',
    ndcCode: 'NDC-0051-1150',
    brandName: 'Brand-CV-150',
    genericName: 'Pharmaceutical Agent CV-150 (Statin)',
    therapeuticClass: 'Cardiovascular Agents',
    subClass: 'Statin',
    standardDosage: '10mg',
    dosageForm: 'Tablet',
    route: 'Intravenous / Subcutaneous',
    halfLifeHours: 10,
    bioavailabilityPercent: 45,
    pregnancyCategory: 'B',
    renalAdjustmentRequired: true,
    hepaticAdjustmentRequired: true,
    blackBoxWarnings: [
      Monitor liver transaminases periodically during prolonged therapy.
    ]
  }
];

export class RXNORM_CV_Service {
  static search(query: string): RxNormMedication[] {
    const q = query.toLowerCase().trim();
    if (!q) return RXNORM_CV_DATASET.slice(0, 20);
    return RXNORM_CV_DATASET.filter(m => m.genericName.toLowerCase().includes(q) || m.brandName.toLowerCase().includes(q) || m.rxcui.includes(q));
  }
}
