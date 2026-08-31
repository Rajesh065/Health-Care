/**
 * RxNorm Medication Knowledge Base: Central Nervous System
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

export const RXNORM_CNS_DATASET: RxNormMedication[] = [
  {
    rxcui: '200013',
    ndcCode: 'NDC-0001-1001',
    brandName: 'Brand-CNS-001',
    genericName: 'Pharmaceutical Agent CNS-001 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-002',
    genericName: 'Pharmaceutical Agent CNS-002 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-003',
    genericName: 'Pharmaceutical Agent CNS-003 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-004',
    genericName: 'Pharmaceutical Agent CNS-004 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-005',
    genericName: 'Pharmaceutical Agent CNS-005 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-006',
    genericName: 'Pharmaceutical Agent CNS-006 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-007',
    genericName: 'Pharmaceutical Agent CNS-007 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-008',
    genericName: 'Pharmaceutical Agent CNS-008 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-009',
    genericName: 'Pharmaceutical Agent CNS-009 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-010',
    genericName: 'Pharmaceutical Agent CNS-010 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-011',
    genericName: 'Pharmaceutical Agent CNS-011 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-012',
    genericName: 'Pharmaceutical Agent CNS-012 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-013',
    genericName: 'Pharmaceutical Agent CNS-013 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-014',
    genericName: 'Pharmaceutical Agent CNS-014 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-015',
    genericName: 'Pharmaceutical Agent CNS-015 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-016',
    genericName: 'Pharmaceutical Agent CNS-016 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-017',
    genericName: 'Pharmaceutical Agent CNS-017 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-018',
    genericName: 'Pharmaceutical Agent CNS-018 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-019',
    genericName: 'Pharmaceutical Agent CNS-019 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-020',
    genericName: 'Pharmaceutical Agent CNS-020 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-021',
    genericName: 'Pharmaceutical Agent CNS-021 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-022',
    genericName: 'Pharmaceutical Agent CNS-022 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-023',
    genericName: 'Pharmaceutical Agent CNS-023 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-024',
    genericName: 'Pharmaceutical Agent CNS-024 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-025',
    genericName: 'Pharmaceutical Agent CNS-025 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-026',
    genericName: 'Pharmaceutical Agent CNS-026 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-027',
    genericName: 'Pharmaceutical Agent CNS-027 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-028',
    genericName: 'Pharmaceutical Agent CNS-028 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-029',
    genericName: 'Pharmaceutical Agent CNS-029 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-030',
    genericName: 'Pharmaceutical Agent CNS-030 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-031',
    genericName: 'Pharmaceutical Agent CNS-031 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-032',
    genericName: 'Pharmaceutical Agent CNS-032 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-033',
    genericName: 'Pharmaceutical Agent CNS-033 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-034',
    genericName: 'Pharmaceutical Agent CNS-034 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-035',
    genericName: 'Pharmaceutical Agent CNS-035 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-036',
    genericName: 'Pharmaceutical Agent CNS-036 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-037',
    genericName: 'Pharmaceutical Agent CNS-037 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-038',
    genericName: 'Pharmaceutical Agent CNS-038 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-039',
    genericName: 'Pharmaceutical Agent CNS-039 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-040',
    genericName: 'Pharmaceutical Agent CNS-040 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-041',
    genericName: 'Pharmaceutical Agent CNS-041 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-042',
    genericName: 'Pharmaceutical Agent CNS-042 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-043',
    genericName: 'Pharmaceutical Agent CNS-043 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-044',
    genericName: 'Pharmaceutical Agent CNS-044 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-045',
    genericName: 'Pharmaceutical Agent CNS-045 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-046',
    genericName: 'Pharmaceutical Agent CNS-046 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-047',
    genericName: 'Pharmaceutical Agent CNS-047 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-048',
    genericName: 'Pharmaceutical Agent CNS-048 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-049',
    genericName: 'Pharmaceutical Agent CNS-049 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-050',
    genericName: 'Pharmaceutical Agent CNS-050 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-051',
    genericName: 'Pharmaceutical Agent CNS-051 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-052',
    genericName: 'Pharmaceutical Agent CNS-052 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-053',
    genericName: 'Pharmaceutical Agent CNS-053 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-054',
    genericName: 'Pharmaceutical Agent CNS-054 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-055',
    genericName: 'Pharmaceutical Agent CNS-055 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-056',
    genericName: 'Pharmaceutical Agent CNS-056 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-057',
    genericName: 'Pharmaceutical Agent CNS-057 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-058',
    genericName: 'Pharmaceutical Agent CNS-058 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-059',
    genericName: 'Pharmaceutical Agent CNS-059 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-060',
    genericName: 'Pharmaceutical Agent CNS-060 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-061',
    genericName: 'Pharmaceutical Agent CNS-061 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-062',
    genericName: 'Pharmaceutical Agent CNS-062 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-063',
    genericName: 'Pharmaceutical Agent CNS-063 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-064',
    genericName: 'Pharmaceutical Agent CNS-064 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-065',
    genericName: 'Pharmaceutical Agent CNS-065 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-066',
    genericName: 'Pharmaceutical Agent CNS-066 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-067',
    genericName: 'Pharmaceutical Agent CNS-067 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-068',
    genericName: 'Pharmaceutical Agent CNS-068 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-069',
    genericName: 'Pharmaceutical Agent CNS-069 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-070',
    genericName: 'Pharmaceutical Agent CNS-070 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-071',
    genericName: 'Pharmaceutical Agent CNS-071 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-072',
    genericName: 'Pharmaceutical Agent CNS-072 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-073',
    genericName: 'Pharmaceutical Agent CNS-073 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-074',
    genericName: 'Pharmaceutical Agent CNS-074 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-075',
    genericName: 'Pharmaceutical Agent CNS-075 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-076',
    genericName: 'Pharmaceutical Agent CNS-076 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-077',
    genericName: 'Pharmaceutical Agent CNS-077 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-078',
    genericName: 'Pharmaceutical Agent CNS-078 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-079',
    genericName: 'Pharmaceutical Agent CNS-079 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-080',
    genericName: 'Pharmaceutical Agent CNS-080 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-081',
    genericName: 'Pharmaceutical Agent CNS-081 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-082',
    genericName: 'Pharmaceutical Agent CNS-082 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-083',
    genericName: 'Pharmaceutical Agent CNS-083 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-084',
    genericName: 'Pharmaceutical Agent CNS-084 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-085',
    genericName: 'Pharmaceutical Agent CNS-085 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-086',
    genericName: 'Pharmaceutical Agent CNS-086 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-087',
    genericName: 'Pharmaceutical Agent CNS-087 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-088',
    genericName: 'Pharmaceutical Agent CNS-088 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-089',
    genericName: 'Pharmaceutical Agent CNS-089 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-090',
    genericName: 'Pharmaceutical Agent CNS-090 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-091',
    genericName: 'Pharmaceutical Agent CNS-091 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-092',
    genericName: 'Pharmaceutical Agent CNS-092 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-093',
    genericName: 'Pharmaceutical Agent CNS-093 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-094',
    genericName: 'Pharmaceutical Agent CNS-094 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-095',
    genericName: 'Pharmaceutical Agent CNS-095 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-096',
    genericName: 'Pharmaceutical Agent CNS-096 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-097',
    genericName: 'Pharmaceutical Agent CNS-097 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-098',
    genericName: 'Pharmaceutical Agent CNS-098 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-099',
    genericName: 'Pharmaceutical Agent CNS-099 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-100',
    genericName: 'Pharmaceutical Agent CNS-100 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-101',
    genericName: 'Pharmaceutical Agent CNS-101 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-102',
    genericName: 'Pharmaceutical Agent CNS-102 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-103',
    genericName: 'Pharmaceutical Agent CNS-103 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-104',
    genericName: 'Pharmaceutical Agent CNS-104 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-105',
    genericName: 'Pharmaceutical Agent CNS-105 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-106',
    genericName: 'Pharmaceutical Agent CNS-106 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-107',
    genericName: 'Pharmaceutical Agent CNS-107 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-108',
    genericName: 'Pharmaceutical Agent CNS-108 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-109',
    genericName: 'Pharmaceutical Agent CNS-109 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-110',
    genericName: 'Pharmaceutical Agent CNS-110 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-111',
    genericName: 'Pharmaceutical Agent CNS-111 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-112',
    genericName: 'Pharmaceutical Agent CNS-112 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-113',
    genericName: 'Pharmaceutical Agent CNS-113 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-114',
    genericName: 'Pharmaceutical Agent CNS-114 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-115',
    genericName: 'Pharmaceutical Agent CNS-115 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-116',
    genericName: 'Pharmaceutical Agent CNS-116 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-117',
    genericName: 'Pharmaceutical Agent CNS-117 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-118',
    genericName: 'Pharmaceutical Agent CNS-118 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-119',
    genericName: 'Pharmaceutical Agent CNS-119 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-120',
    genericName: 'Pharmaceutical Agent CNS-120 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-121',
    genericName: 'Pharmaceutical Agent CNS-121 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-122',
    genericName: 'Pharmaceutical Agent CNS-122 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-123',
    genericName: 'Pharmaceutical Agent CNS-123 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-124',
    genericName: 'Pharmaceutical Agent CNS-124 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-125',
    genericName: 'Pharmaceutical Agent CNS-125 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-126',
    genericName: 'Pharmaceutical Agent CNS-126 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-127',
    genericName: 'Pharmaceutical Agent CNS-127 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-128',
    genericName: 'Pharmaceutical Agent CNS-128 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-129',
    genericName: 'Pharmaceutical Agent CNS-129 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-130',
    genericName: 'Pharmaceutical Agent CNS-130 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-131',
    genericName: 'Pharmaceutical Agent CNS-131 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-132',
    genericName: 'Pharmaceutical Agent CNS-132 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-133',
    genericName: 'Pharmaceutical Agent CNS-133 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-134',
    genericName: 'Pharmaceutical Agent CNS-134 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-135',
    genericName: 'Pharmaceutical Agent CNS-135 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-136',
    genericName: 'Pharmaceutical Agent CNS-136 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-137',
    genericName: 'Pharmaceutical Agent CNS-137 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-138',
    genericName: 'Pharmaceutical Agent CNS-138 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-139',
    genericName: 'Pharmaceutical Agent CNS-139 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-140',
    genericName: 'Pharmaceutical Agent CNS-140 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-141',
    genericName: 'Pharmaceutical Agent CNS-141 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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
    brandName: 'Brand-CNS-142',
    genericName: 'Pharmaceutical Agent CNS-142 (Dopamine Agonist)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Dopamine Agonist',
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
    brandName: 'Brand-CNS-143',
    genericName: 'Pharmaceutical Agent CNS-143 (Cholinesterase Inhibitor)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Cholinesterase Inhibitor',
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
    brandName: 'Brand-CNS-144',
    genericName: 'Pharmaceutical Agent CNS-144 (SSRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SSRI Antidepressant',
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
    brandName: 'Brand-CNS-145',
    genericName: 'Pharmaceutical Agent CNS-145 (SNRI Antidepressant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'SNRI Antidepressant',
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
    brandName: 'Brand-CNS-146',
    genericName: 'Pharmaceutical Agent CNS-146 (Atypical Antipsychotic)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Atypical Antipsychotic',
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
    brandName: 'Brand-CNS-147',
    genericName: 'Pharmaceutical Agent CNS-147 (Anticonvulsant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Anticonvulsant',
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
    brandName: 'Brand-CNS-148',
    genericName: 'Pharmaceutical Agent CNS-148 (Benzodiazepine)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Benzodiazepine',
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
    brandName: 'Brand-CNS-149',
    genericName: 'Pharmaceutical Agent CNS-149 (Stimulant)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Stimulant',
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
    brandName: 'Brand-CNS-150',
    genericName: 'Pharmaceutical Agent CNS-150 (Mood Stabilizer)',
    therapeuticClass: 'Central Nervous System',
    subClass: 'Mood Stabilizer',
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

export class RXNORM_CNS_Service {
  static search(query: string): RxNormMedication[] {
    const q = query.toLowerCase().trim();
    if (!q) return RXNORM_CNS_DATASET.slice(0, 20);
    return RXNORM_CNS_DATASET.filter(m => m.genericName.toLowerCase().includes(q) || m.brandName.toLowerCase().includes(q) || m.rxcui.includes(q));
  }
}
