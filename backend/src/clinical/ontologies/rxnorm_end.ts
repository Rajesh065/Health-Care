/**
 * RxNorm Medication Knowledge Base: Endocrine & Metabolic
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

export const RXNORM_END_DATASET: RxNormMedication[] = [
  {
    rxcui: '200013',
    ndcCode: 'NDC-0001-1001',
    brandName: 'Brand-END-001',
    genericName: 'Pharmaceutical Agent END-001 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-002',
    genericName: 'Pharmaceutical Agent END-002 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-003',
    genericName: 'Pharmaceutical Agent END-003 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-004',
    genericName: 'Pharmaceutical Agent END-004 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-005',
    genericName: 'Pharmaceutical Agent END-005 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-006',
    genericName: 'Pharmaceutical Agent END-006 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-007',
    genericName: 'Pharmaceutical Agent END-007 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-008',
    genericName: 'Pharmaceutical Agent END-008 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-009',
    genericName: 'Pharmaceutical Agent END-009 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-010',
    genericName: 'Pharmaceutical Agent END-010 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-011',
    genericName: 'Pharmaceutical Agent END-011 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-012',
    genericName: 'Pharmaceutical Agent END-012 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-013',
    genericName: 'Pharmaceutical Agent END-013 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-014',
    genericName: 'Pharmaceutical Agent END-014 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-015',
    genericName: 'Pharmaceutical Agent END-015 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-016',
    genericName: 'Pharmaceutical Agent END-016 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-017',
    genericName: 'Pharmaceutical Agent END-017 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-018',
    genericName: 'Pharmaceutical Agent END-018 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-019',
    genericName: 'Pharmaceutical Agent END-019 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-020',
    genericName: 'Pharmaceutical Agent END-020 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-021',
    genericName: 'Pharmaceutical Agent END-021 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-022',
    genericName: 'Pharmaceutical Agent END-022 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-023',
    genericName: 'Pharmaceutical Agent END-023 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-024',
    genericName: 'Pharmaceutical Agent END-024 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-025',
    genericName: 'Pharmaceutical Agent END-025 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-026',
    genericName: 'Pharmaceutical Agent END-026 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-027',
    genericName: 'Pharmaceutical Agent END-027 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-028',
    genericName: 'Pharmaceutical Agent END-028 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-029',
    genericName: 'Pharmaceutical Agent END-029 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-030',
    genericName: 'Pharmaceutical Agent END-030 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-031',
    genericName: 'Pharmaceutical Agent END-031 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-032',
    genericName: 'Pharmaceutical Agent END-032 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-033',
    genericName: 'Pharmaceutical Agent END-033 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-034',
    genericName: 'Pharmaceutical Agent END-034 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-035',
    genericName: 'Pharmaceutical Agent END-035 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-036',
    genericName: 'Pharmaceutical Agent END-036 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-037',
    genericName: 'Pharmaceutical Agent END-037 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-038',
    genericName: 'Pharmaceutical Agent END-038 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-039',
    genericName: 'Pharmaceutical Agent END-039 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-040',
    genericName: 'Pharmaceutical Agent END-040 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-041',
    genericName: 'Pharmaceutical Agent END-041 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-042',
    genericName: 'Pharmaceutical Agent END-042 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-043',
    genericName: 'Pharmaceutical Agent END-043 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-044',
    genericName: 'Pharmaceutical Agent END-044 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-045',
    genericName: 'Pharmaceutical Agent END-045 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-046',
    genericName: 'Pharmaceutical Agent END-046 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-047',
    genericName: 'Pharmaceutical Agent END-047 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-048',
    genericName: 'Pharmaceutical Agent END-048 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-049',
    genericName: 'Pharmaceutical Agent END-049 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-050',
    genericName: 'Pharmaceutical Agent END-050 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-051',
    genericName: 'Pharmaceutical Agent END-051 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-052',
    genericName: 'Pharmaceutical Agent END-052 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-053',
    genericName: 'Pharmaceutical Agent END-053 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-054',
    genericName: 'Pharmaceutical Agent END-054 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-055',
    genericName: 'Pharmaceutical Agent END-055 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-056',
    genericName: 'Pharmaceutical Agent END-056 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-057',
    genericName: 'Pharmaceutical Agent END-057 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-058',
    genericName: 'Pharmaceutical Agent END-058 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-059',
    genericName: 'Pharmaceutical Agent END-059 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-060',
    genericName: 'Pharmaceutical Agent END-060 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-061',
    genericName: 'Pharmaceutical Agent END-061 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-062',
    genericName: 'Pharmaceutical Agent END-062 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-063',
    genericName: 'Pharmaceutical Agent END-063 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-064',
    genericName: 'Pharmaceutical Agent END-064 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-065',
    genericName: 'Pharmaceutical Agent END-065 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-066',
    genericName: 'Pharmaceutical Agent END-066 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-067',
    genericName: 'Pharmaceutical Agent END-067 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-068',
    genericName: 'Pharmaceutical Agent END-068 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-069',
    genericName: 'Pharmaceutical Agent END-069 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-070',
    genericName: 'Pharmaceutical Agent END-070 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-071',
    genericName: 'Pharmaceutical Agent END-071 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-072',
    genericName: 'Pharmaceutical Agent END-072 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-073',
    genericName: 'Pharmaceutical Agent END-073 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-074',
    genericName: 'Pharmaceutical Agent END-074 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-075',
    genericName: 'Pharmaceutical Agent END-075 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-076',
    genericName: 'Pharmaceutical Agent END-076 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-077',
    genericName: 'Pharmaceutical Agent END-077 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-078',
    genericName: 'Pharmaceutical Agent END-078 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-079',
    genericName: 'Pharmaceutical Agent END-079 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-080',
    genericName: 'Pharmaceutical Agent END-080 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-081',
    genericName: 'Pharmaceutical Agent END-081 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-082',
    genericName: 'Pharmaceutical Agent END-082 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-083',
    genericName: 'Pharmaceutical Agent END-083 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-084',
    genericName: 'Pharmaceutical Agent END-084 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-085',
    genericName: 'Pharmaceutical Agent END-085 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-086',
    genericName: 'Pharmaceutical Agent END-086 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-087',
    genericName: 'Pharmaceutical Agent END-087 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-088',
    genericName: 'Pharmaceutical Agent END-088 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-089',
    genericName: 'Pharmaceutical Agent END-089 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-090',
    genericName: 'Pharmaceutical Agent END-090 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-091',
    genericName: 'Pharmaceutical Agent END-091 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-092',
    genericName: 'Pharmaceutical Agent END-092 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-093',
    genericName: 'Pharmaceutical Agent END-093 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-094',
    genericName: 'Pharmaceutical Agent END-094 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-095',
    genericName: 'Pharmaceutical Agent END-095 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-096',
    genericName: 'Pharmaceutical Agent END-096 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-097',
    genericName: 'Pharmaceutical Agent END-097 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-098',
    genericName: 'Pharmaceutical Agent END-098 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-099',
    genericName: 'Pharmaceutical Agent END-099 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-100',
    genericName: 'Pharmaceutical Agent END-100 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-101',
    genericName: 'Pharmaceutical Agent END-101 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-102',
    genericName: 'Pharmaceutical Agent END-102 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-103',
    genericName: 'Pharmaceutical Agent END-103 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-104',
    genericName: 'Pharmaceutical Agent END-104 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-105',
    genericName: 'Pharmaceutical Agent END-105 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-106',
    genericName: 'Pharmaceutical Agent END-106 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-107',
    genericName: 'Pharmaceutical Agent END-107 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-108',
    genericName: 'Pharmaceutical Agent END-108 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-109',
    genericName: 'Pharmaceutical Agent END-109 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-110',
    genericName: 'Pharmaceutical Agent END-110 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-111',
    genericName: 'Pharmaceutical Agent END-111 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-112',
    genericName: 'Pharmaceutical Agent END-112 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-113',
    genericName: 'Pharmaceutical Agent END-113 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-114',
    genericName: 'Pharmaceutical Agent END-114 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-115',
    genericName: 'Pharmaceutical Agent END-115 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-116',
    genericName: 'Pharmaceutical Agent END-116 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-117',
    genericName: 'Pharmaceutical Agent END-117 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-118',
    genericName: 'Pharmaceutical Agent END-118 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-119',
    genericName: 'Pharmaceutical Agent END-119 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-120',
    genericName: 'Pharmaceutical Agent END-120 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-121',
    genericName: 'Pharmaceutical Agent END-121 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-122',
    genericName: 'Pharmaceutical Agent END-122 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-123',
    genericName: 'Pharmaceutical Agent END-123 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-124',
    genericName: 'Pharmaceutical Agent END-124 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-125',
    genericName: 'Pharmaceutical Agent END-125 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-126',
    genericName: 'Pharmaceutical Agent END-126 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-127',
    genericName: 'Pharmaceutical Agent END-127 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-128',
    genericName: 'Pharmaceutical Agent END-128 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-129',
    genericName: 'Pharmaceutical Agent END-129 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-130',
    genericName: 'Pharmaceutical Agent END-130 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-131',
    genericName: 'Pharmaceutical Agent END-131 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-132',
    genericName: 'Pharmaceutical Agent END-132 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-133',
    genericName: 'Pharmaceutical Agent END-133 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-134',
    genericName: 'Pharmaceutical Agent END-134 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-135',
    genericName: 'Pharmaceutical Agent END-135 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-136',
    genericName: 'Pharmaceutical Agent END-136 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-137',
    genericName: 'Pharmaceutical Agent END-137 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-138',
    genericName: 'Pharmaceutical Agent END-138 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-139',
    genericName: 'Pharmaceutical Agent END-139 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-140',
    genericName: 'Pharmaceutical Agent END-140 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-141',
    genericName: 'Pharmaceutical Agent END-141 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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
    brandName: 'Brand-END-142',
    genericName: 'Pharmaceutical Agent END-142 (Antithyroid Agent)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Antithyroid Agent',
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
    brandName: 'Brand-END-143',
    genericName: 'Pharmaceutical Agent END-143 (Corticosteroid)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Corticosteroid',
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
    brandName: 'Brand-END-144',
    genericName: 'Pharmaceutical Agent END-144 (Biguanide Antidiabetic)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Biguanide Antidiabetic',
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
    brandName: 'Brand-END-145',
    genericName: 'Pharmaceutical Agent END-145 (Sulfonylurea)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Sulfonylurea',
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
    brandName: 'Brand-END-146',
    genericName: 'Pharmaceutical Agent END-146 (SGLT2 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'SGLT2 Inhibitor',
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
    brandName: 'Brand-END-147',
    genericName: 'Pharmaceutical Agent END-147 (GLP-1 Receptor Agonist)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'GLP-1 Receptor Agonist',
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
    brandName: 'Brand-END-148',
    genericName: 'Pharmaceutical Agent END-148 (DPP-4 Inhibitor)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'DPP-4 Inhibitor',
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
    brandName: 'Brand-END-149',
    genericName: 'Pharmaceutical Agent END-149 (Basal & Bolus Insulin)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Basal & Bolus Insulin',
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
    brandName: 'Brand-END-150',
    genericName: 'Pharmaceutical Agent END-150 (Thyroid Hormone)',
    therapeuticClass: 'Endocrine & Metabolic',
    subClass: 'Thyroid Hormone',
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

export class RXNORM_END_Service {
  static search(query: string): RxNormMedication[] {
    const q = query.toLowerCase().trim();
    if (!q) return RXNORM_END_DATASET.slice(0, 20);
    return RXNORM_END_DATASET.filter(m => m.genericName.toLowerCase().includes(q) || m.brandName.toLowerCase().includes(q) || m.rxcui.includes(q));
  }
}
