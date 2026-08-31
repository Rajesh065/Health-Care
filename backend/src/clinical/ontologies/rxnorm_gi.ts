/**
 * RxNorm Medication Knowledge Base: Gastrointestinal & Hepatic
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

export const RXNORM_GI_DATASET: RxNormMedication[] = [
  {
    rxcui: '200013',
    ndcCode: 'NDC-0001-1001',
    brandName: 'Brand-GI-001',
    genericName: 'Pharmaceutical Agent GI-001 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-002',
    genericName: 'Pharmaceutical Agent GI-002 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-003',
    genericName: 'Pharmaceutical Agent GI-003 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-004',
    genericName: 'Pharmaceutical Agent GI-004 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-005',
    genericName: 'Pharmaceutical Agent GI-005 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-006',
    genericName: 'Pharmaceutical Agent GI-006 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-007',
    genericName: 'Pharmaceutical Agent GI-007 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-008',
    genericName: 'Pharmaceutical Agent GI-008 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-009',
    genericName: 'Pharmaceutical Agent GI-009 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-010',
    genericName: 'Pharmaceutical Agent GI-010 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-011',
    genericName: 'Pharmaceutical Agent GI-011 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-012',
    genericName: 'Pharmaceutical Agent GI-012 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-013',
    genericName: 'Pharmaceutical Agent GI-013 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-014',
    genericName: 'Pharmaceutical Agent GI-014 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-015',
    genericName: 'Pharmaceutical Agent GI-015 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-016',
    genericName: 'Pharmaceutical Agent GI-016 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-017',
    genericName: 'Pharmaceutical Agent GI-017 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-018',
    genericName: 'Pharmaceutical Agent GI-018 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-019',
    genericName: 'Pharmaceutical Agent GI-019 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-020',
    genericName: 'Pharmaceutical Agent GI-020 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-021',
    genericName: 'Pharmaceutical Agent GI-021 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-022',
    genericName: 'Pharmaceutical Agent GI-022 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-023',
    genericName: 'Pharmaceutical Agent GI-023 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-024',
    genericName: 'Pharmaceutical Agent GI-024 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-025',
    genericName: 'Pharmaceutical Agent GI-025 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-026',
    genericName: 'Pharmaceutical Agent GI-026 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-027',
    genericName: 'Pharmaceutical Agent GI-027 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-028',
    genericName: 'Pharmaceutical Agent GI-028 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-029',
    genericName: 'Pharmaceutical Agent GI-029 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-030',
    genericName: 'Pharmaceutical Agent GI-030 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-031',
    genericName: 'Pharmaceutical Agent GI-031 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-032',
    genericName: 'Pharmaceutical Agent GI-032 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-033',
    genericName: 'Pharmaceutical Agent GI-033 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-034',
    genericName: 'Pharmaceutical Agent GI-034 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-035',
    genericName: 'Pharmaceutical Agent GI-035 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-036',
    genericName: 'Pharmaceutical Agent GI-036 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-037',
    genericName: 'Pharmaceutical Agent GI-037 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-038',
    genericName: 'Pharmaceutical Agent GI-038 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-039',
    genericName: 'Pharmaceutical Agent GI-039 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-040',
    genericName: 'Pharmaceutical Agent GI-040 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-041',
    genericName: 'Pharmaceutical Agent GI-041 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-042',
    genericName: 'Pharmaceutical Agent GI-042 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-043',
    genericName: 'Pharmaceutical Agent GI-043 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-044',
    genericName: 'Pharmaceutical Agent GI-044 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-045',
    genericName: 'Pharmaceutical Agent GI-045 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-046',
    genericName: 'Pharmaceutical Agent GI-046 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-047',
    genericName: 'Pharmaceutical Agent GI-047 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-048',
    genericName: 'Pharmaceutical Agent GI-048 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-049',
    genericName: 'Pharmaceutical Agent GI-049 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-050',
    genericName: 'Pharmaceutical Agent GI-050 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-051',
    genericName: 'Pharmaceutical Agent GI-051 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-052',
    genericName: 'Pharmaceutical Agent GI-052 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-053',
    genericName: 'Pharmaceutical Agent GI-053 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-054',
    genericName: 'Pharmaceutical Agent GI-054 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-055',
    genericName: 'Pharmaceutical Agent GI-055 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-056',
    genericName: 'Pharmaceutical Agent GI-056 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-057',
    genericName: 'Pharmaceutical Agent GI-057 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-058',
    genericName: 'Pharmaceutical Agent GI-058 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-059',
    genericName: 'Pharmaceutical Agent GI-059 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-060',
    genericName: 'Pharmaceutical Agent GI-060 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-061',
    genericName: 'Pharmaceutical Agent GI-061 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-062',
    genericName: 'Pharmaceutical Agent GI-062 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-063',
    genericName: 'Pharmaceutical Agent GI-063 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-064',
    genericName: 'Pharmaceutical Agent GI-064 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-065',
    genericName: 'Pharmaceutical Agent GI-065 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-066',
    genericName: 'Pharmaceutical Agent GI-066 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-067',
    genericName: 'Pharmaceutical Agent GI-067 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-068',
    genericName: 'Pharmaceutical Agent GI-068 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-069',
    genericName: 'Pharmaceutical Agent GI-069 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-070',
    genericName: 'Pharmaceutical Agent GI-070 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-071',
    genericName: 'Pharmaceutical Agent GI-071 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-072',
    genericName: 'Pharmaceutical Agent GI-072 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-073',
    genericName: 'Pharmaceutical Agent GI-073 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-074',
    genericName: 'Pharmaceutical Agent GI-074 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-075',
    genericName: 'Pharmaceutical Agent GI-075 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-076',
    genericName: 'Pharmaceutical Agent GI-076 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-077',
    genericName: 'Pharmaceutical Agent GI-077 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-078',
    genericName: 'Pharmaceutical Agent GI-078 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-079',
    genericName: 'Pharmaceutical Agent GI-079 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-080',
    genericName: 'Pharmaceutical Agent GI-080 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-081',
    genericName: 'Pharmaceutical Agent GI-081 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-082',
    genericName: 'Pharmaceutical Agent GI-082 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-083',
    genericName: 'Pharmaceutical Agent GI-083 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-084',
    genericName: 'Pharmaceutical Agent GI-084 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-085',
    genericName: 'Pharmaceutical Agent GI-085 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-086',
    genericName: 'Pharmaceutical Agent GI-086 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-087',
    genericName: 'Pharmaceutical Agent GI-087 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-088',
    genericName: 'Pharmaceutical Agent GI-088 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-089',
    genericName: 'Pharmaceutical Agent GI-089 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-090',
    genericName: 'Pharmaceutical Agent GI-090 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-091',
    genericName: 'Pharmaceutical Agent GI-091 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-092',
    genericName: 'Pharmaceutical Agent GI-092 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-093',
    genericName: 'Pharmaceutical Agent GI-093 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-094',
    genericName: 'Pharmaceutical Agent GI-094 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-095',
    genericName: 'Pharmaceutical Agent GI-095 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-096',
    genericName: 'Pharmaceutical Agent GI-096 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-097',
    genericName: 'Pharmaceutical Agent GI-097 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-098',
    genericName: 'Pharmaceutical Agent GI-098 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-099',
    genericName: 'Pharmaceutical Agent GI-099 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-100',
    genericName: 'Pharmaceutical Agent GI-100 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-101',
    genericName: 'Pharmaceutical Agent GI-101 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-102',
    genericName: 'Pharmaceutical Agent GI-102 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-103',
    genericName: 'Pharmaceutical Agent GI-103 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-104',
    genericName: 'Pharmaceutical Agent GI-104 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-105',
    genericName: 'Pharmaceutical Agent GI-105 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-106',
    genericName: 'Pharmaceutical Agent GI-106 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-107',
    genericName: 'Pharmaceutical Agent GI-107 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-108',
    genericName: 'Pharmaceutical Agent GI-108 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-109',
    genericName: 'Pharmaceutical Agent GI-109 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-110',
    genericName: 'Pharmaceutical Agent GI-110 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-111',
    genericName: 'Pharmaceutical Agent GI-111 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-112',
    genericName: 'Pharmaceutical Agent GI-112 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-113',
    genericName: 'Pharmaceutical Agent GI-113 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-114',
    genericName: 'Pharmaceutical Agent GI-114 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-115',
    genericName: 'Pharmaceutical Agent GI-115 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-116',
    genericName: 'Pharmaceutical Agent GI-116 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-117',
    genericName: 'Pharmaceutical Agent GI-117 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-118',
    genericName: 'Pharmaceutical Agent GI-118 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-119',
    genericName: 'Pharmaceutical Agent GI-119 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-120',
    genericName: 'Pharmaceutical Agent GI-120 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-121',
    genericName: 'Pharmaceutical Agent GI-121 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-122',
    genericName: 'Pharmaceutical Agent GI-122 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-123',
    genericName: 'Pharmaceutical Agent GI-123 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-124',
    genericName: 'Pharmaceutical Agent GI-124 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-125',
    genericName: 'Pharmaceutical Agent GI-125 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-126',
    genericName: 'Pharmaceutical Agent GI-126 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-127',
    genericName: 'Pharmaceutical Agent GI-127 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-128',
    genericName: 'Pharmaceutical Agent GI-128 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-129',
    genericName: 'Pharmaceutical Agent GI-129 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-130',
    genericName: 'Pharmaceutical Agent GI-130 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-131',
    genericName: 'Pharmaceutical Agent GI-131 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-132',
    genericName: 'Pharmaceutical Agent GI-132 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-133',
    genericName: 'Pharmaceutical Agent GI-133 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-134',
    genericName: 'Pharmaceutical Agent GI-134 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-135',
    genericName: 'Pharmaceutical Agent GI-135 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-136',
    genericName: 'Pharmaceutical Agent GI-136 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-137',
    genericName: 'Pharmaceutical Agent GI-137 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-138',
    genericName: 'Pharmaceutical Agent GI-138 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-139',
    genericName: 'Pharmaceutical Agent GI-139 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-140',
    genericName: 'Pharmaceutical Agent GI-140 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-141',
    genericName: 'Pharmaceutical Agent GI-141 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-142',
    genericName: 'Pharmaceutical Agent GI-142 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-143',
    genericName: 'Pharmaceutical Agent GI-143 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-144',
    genericName: 'Pharmaceutical Agent GI-144 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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
    brandName: 'Brand-GI-145',
    genericName: 'Pharmaceutical Agent GI-145 (H2 Receptor Antagonist)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'H2 Receptor Antagonist',
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
    brandName: 'Brand-GI-146',
    genericName: 'Pharmaceutical Agent GI-146 (Antiemetic)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Antiemetic',
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
    brandName: 'Brand-GI-147',
    genericName: 'Pharmaceutical Agent GI-147 (5-ASA Anti-inflammatory)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: '5-ASA Anti-inflammatory',
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
    brandName: 'Brand-GI-148',
    genericName: 'Pharmaceutical Agent GI-148 (Laxative & Osmotic Agent)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Laxative & Osmotic Agent',
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
    brandName: 'Brand-GI-149',
    genericName: 'Pharmaceutical Agent GI-149 (Bile Acid Sequestrant)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Bile Acid Sequestrant',
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
    brandName: 'Brand-GI-150',
    genericName: 'Pharmaceutical Agent GI-150 (Proton Pump Inhibitor)',
    therapeuticClass: 'Gastrointestinal & Hepatic',
    subClass: 'Proton Pump Inhibitor',
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

export class RXNORM_GI_Service {
  static search(query: string): RxNormMedication[] {
    const q = query.toLowerCase().trim();
    if (!q) return RXNORM_GI_DATASET.slice(0, 20);
    return RXNORM_GI_DATASET.filter(m => m.genericName.toLowerCase().includes(q) || m.brandName.toLowerCase().includes(q) || m.rxcui.includes(q));
  }
}
