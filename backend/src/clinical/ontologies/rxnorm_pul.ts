/**
 * RxNorm Medication Knowledge Base: Respiratory & Allergy
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

export const RXNORM_PUL_DATASET: RxNormMedication[] = [
  {
    rxcui: '200013',
    ndcCode: 'NDC-0001-1001',
    brandName: 'Brand-PUL-001',
    genericName: 'Pharmaceutical Agent PUL-001 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-002',
    genericName: 'Pharmaceutical Agent PUL-002 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-003',
    genericName: 'Pharmaceutical Agent PUL-003 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-004',
    genericName: 'Pharmaceutical Agent PUL-004 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-005',
    genericName: 'Pharmaceutical Agent PUL-005 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-006',
    genericName: 'Pharmaceutical Agent PUL-006 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-007',
    genericName: 'Pharmaceutical Agent PUL-007 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-008',
    genericName: 'Pharmaceutical Agent PUL-008 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-009',
    genericName: 'Pharmaceutical Agent PUL-009 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-010',
    genericName: 'Pharmaceutical Agent PUL-010 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-011',
    genericName: 'Pharmaceutical Agent PUL-011 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-012',
    genericName: 'Pharmaceutical Agent PUL-012 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-013',
    genericName: 'Pharmaceutical Agent PUL-013 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-014',
    genericName: 'Pharmaceutical Agent PUL-014 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-015',
    genericName: 'Pharmaceutical Agent PUL-015 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-016',
    genericName: 'Pharmaceutical Agent PUL-016 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-017',
    genericName: 'Pharmaceutical Agent PUL-017 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-018',
    genericName: 'Pharmaceutical Agent PUL-018 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-019',
    genericName: 'Pharmaceutical Agent PUL-019 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-020',
    genericName: 'Pharmaceutical Agent PUL-020 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-021',
    genericName: 'Pharmaceutical Agent PUL-021 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-022',
    genericName: 'Pharmaceutical Agent PUL-022 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-023',
    genericName: 'Pharmaceutical Agent PUL-023 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-024',
    genericName: 'Pharmaceutical Agent PUL-024 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-025',
    genericName: 'Pharmaceutical Agent PUL-025 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-026',
    genericName: 'Pharmaceutical Agent PUL-026 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-027',
    genericName: 'Pharmaceutical Agent PUL-027 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-028',
    genericName: 'Pharmaceutical Agent PUL-028 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-029',
    genericName: 'Pharmaceutical Agent PUL-029 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-030',
    genericName: 'Pharmaceutical Agent PUL-030 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-031',
    genericName: 'Pharmaceutical Agent PUL-031 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-032',
    genericName: 'Pharmaceutical Agent PUL-032 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-033',
    genericName: 'Pharmaceutical Agent PUL-033 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-034',
    genericName: 'Pharmaceutical Agent PUL-034 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-035',
    genericName: 'Pharmaceutical Agent PUL-035 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-036',
    genericName: 'Pharmaceutical Agent PUL-036 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-037',
    genericName: 'Pharmaceutical Agent PUL-037 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-038',
    genericName: 'Pharmaceutical Agent PUL-038 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-039',
    genericName: 'Pharmaceutical Agent PUL-039 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-040',
    genericName: 'Pharmaceutical Agent PUL-040 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-041',
    genericName: 'Pharmaceutical Agent PUL-041 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-042',
    genericName: 'Pharmaceutical Agent PUL-042 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-043',
    genericName: 'Pharmaceutical Agent PUL-043 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-044',
    genericName: 'Pharmaceutical Agent PUL-044 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-045',
    genericName: 'Pharmaceutical Agent PUL-045 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-046',
    genericName: 'Pharmaceutical Agent PUL-046 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-047',
    genericName: 'Pharmaceutical Agent PUL-047 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-048',
    genericName: 'Pharmaceutical Agent PUL-048 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-049',
    genericName: 'Pharmaceutical Agent PUL-049 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-050',
    genericName: 'Pharmaceutical Agent PUL-050 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-051',
    genericName: 'Pharmaceutical Agent PUL-051 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-052',
    genericName: 'Pharmaceutical Agent PUL-052 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-053',
    genericName: 'Pharmaceutical Agent PUL-053 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-054',
    genericName: 'Pharmaceutical Agent PUL-054 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-055',
    genericName: 'Pharmaceutical Agent PUL-055 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-056',
    genericName: 'Pharmaceutical Agent PUL-056 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-057',
    genericName: 'Pharmaceutical Agent PUL-057 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-058',
    genericName: 'Pharmaceutical Agent PUL-058 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-059',
    genericName: 'Pharmaceutical Agent PUL-059 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-060',
    genericName: 'Pharmaceutical Agent PUL-060 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-061',
    genericName: 'Pharmaceutical Agent PUL-061 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-062',
    genericName: 'Pharmaceutical Agent PUL-062 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-063',
    genericName: 'Pharmaceutical Agent PUL-063 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-064',
    genericName: 'Pharmaceutical Agent PUL-064 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-065',
    genericName: 'Pharmaceutical Agent PUL-065 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-066',
    genericName: 'Pharmaceutical Agent PUL-066 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-067',
    genericName: 'Pharmaceutical Agent PUL-067 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-068',
    genericName: 'Pharmaceutical Agent PUL-068 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-069',
    genericName: 'Pharmaceutical Agent PUL-069 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-070',
    genericName: 'Pharmaceutical Agent PUL-070 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-071',
    genericName: 'Pharmaceutical Agent PUL-071 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-072',
    genericName: 'Pharmaceutical Agent PUL-072 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-073',
    genericName: 'Pharmaceutical Agent PUL-073 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-074',
    genericName: 'Pharmaceutical Agent PUL-074 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-075',
    genericName: 'Pharmaceutical Agent PUL-075 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-076',
    genericName: 'Pharmaceutical Agent PUL-076 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-077',
    genericName: 'Pharmaceutical Agent PUL-077 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-078',
    genericName: 'Pharmaceutical Agent PUL-078 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-079',
    genericName: 'Pharmaceutical Agent PUL-079 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-080',
    genericName: 'Pharmaceutical Agent PUL-080 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-081',
    genericName: 'Pharmaceutical Agent PUL-081 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-082',
    genericName: 'Pharmaceutical Agent PUL-082 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-083',
    genericName: 'Pharmaceutical Agent PUL-083 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-084',
    genericName: 'Pharmaceutical Agent PUL-084 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-085',
    genericName: 'Pharmaceutical Agent PUL-085 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-086',
    genericName: 'Pharmaceutical Agent PUL-086 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-087',
    genericName: 'Pharmaceutical Agent PUL-087 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-088',
    genericName: 'Pharmaceutical Agent PUL-088 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-089',
    genericName: 'Pharmaceutical Agent PUL-089 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-090',
    genericName: 'Pharmaceutical Agent PUL-090 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-091',
    genericName: 'Pharmaceutical Agent PUL-091 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-092',
    genericName: 'Pharmaceutical Agent PUL-092 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-093',
    genericName: 'Pharmaceutical Agent PUL-093 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-094',
    genericName: 'Pharmaceutical Agent PUL-094 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-095',
    genericName: 'Pharmaceutical Agent PUL-095 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-096',
    genericName: 'Pharmaceutical Agent PUL-096 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-097',
    genericName: 'Pharmaceutical Agent PUL-097 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-098',
    genericName: 'Pharmaceutical Agent PUL-098 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-099',
    genericName: 'Pharmaceutical Agent PUL-099 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-100',
    genericName: 'Pharmaceutical Agent PUL-100 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-101',
    genericName: 'Pharmaceutical Agent PUL-101 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-102',
    genericName: 'Pharmaceutical Agent PUL-102 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-103',
    genericName: 'Pharmaceutical Agent PUL-103 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-104',
    genericName: 'Pharmaceutical Agent PUL-104 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-105',
    genericName: 'Pharmaceutical Agent PUL-105 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-106',
    genericName: 'Pharmaceutical Agent PUL-106 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-107',
    genericName: 'Pharmaceutical Agent PUL-107 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-108',
    genericName: 'Pharmaceutical Agent PUL-108 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-109',
    genericName: 'Pharmaceutical Agent PUL-109 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-110',
    genericName: 'Pharmaceutical Agent PUL-110 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-111',
    genericName: 'Pharmaceutical Agent PUL-111 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-112',
    genericName: 'Pharmaceutical Agent PUL-112 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-113',
    genericName: 'Pharmaceutical Agent PUL-113 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-114',
    genericName: 'Pharmaceutical Agent PUL-114 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-115',
    genericName: 'Pharmaceutical Agent PUL-115 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-116',
    genericName: 'Pharmaceutical Agent PUL-116 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-117',
    genericName: 'Pharmaceutical Agent PUL-117 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-118',
    genericName: 'Pharmaceutical Agent PUL-118 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-119',
    genericName: 'Pharmaceutical Agent PUL-119 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-120',
    genericName: 'Pharmaceutical Agent PUL-120 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-121',
    genericName: 'Pharmaceutical Agent PUL-121 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-122',
    genericName: 'Pharmaceutical Agent PUL-122 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-123',
    genericName: 'Pharmaceutical Agent PUL-123 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-124',
    genericName: 'Pharmaceutical Agent PUL-124 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-125',
    genericName: 'Pharmaceutical Agent PUL-125 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-126',
    genericName: 'Pharmaceutical Agent PUL-126 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-127',
    genericName: 'Pharmaceutical Agent PUL-127 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-128',
    genericName: 'Pharmaceutical Agent PUL-128 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-129',
    genericName: 'Pharmaceutical Agent PUL-129 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-130',
    genericName: 'Pharmaceutical Agent PUL-130 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-131',
    genericName: 'Pharmaceutical Agent PUL-131 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-132',
    genericName: 'Pharmaceutical Agent PUL-132 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-133',
    genericName: 'Pharmaceutical Agent PUL-133 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-134',
    genericName: 'Pharmaceutical Agent PUL-134 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-135',
    genericName: 'Pharmaceutical Agent PUL-135 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-136',
    genericName: 'Pharmaceutical Agent PUL-136 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-137',
    genericName: 'Pharmaceutical Agent PUL-137 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-138',
    genericName: 'Pharmaceutical Agent PUL-138 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-139',
    genericName: 'Pharmaceutical Agent PUL-139 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-140',
    genericName: 'Pharmaceutical Agent PUL-140 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-141',
    genericName: 'Pharmaceutical Agent PUL-141 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-142',
    genericName: 'Pharmaceutical Agent PUL-142 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-143',
    genericName: 'Pharmaceutical Agent PUL-143 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-144',
    genericName: 'Pharmaceutical Agent PUL-144 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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
    brandName: 'Brand-PUL-145',
    genericName: 'Pharmaceutical Agent PUL-145 (Long-Acting Beta Agonist (LABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Beta Agonist (LABA)',
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
    brandName: 'Brand-PUL-146',
    genericName: 'Pharmaceutical Agent PUL-146 (Inhaled Corticosteroid (ICS))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Inhaled Corticosteroid (ICS)',
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
    brandName: 'Brand-PUL-147',
    genericName: 'Pharmaceutical Agent PUL-147 (Long-Acting Muscarinic Antagonist (LAMA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
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
    brandName: 'Brand-PUL-148',
    genericName: 'Pharmaceutical Agent PUL-148 (Leukotriene Receptor Antagonist)',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Leukotriene Receptor Antagonist',
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
    brandName: 'Brand-PUL-149',
    genericName: 'Pharmaceutical Agent PUL-149 (Antihistamine (2nd Gen))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Antihistamine (2nd Gen)',
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
    brandName: 'Brand-PUL-150',
    genericName: 'Pharmaceutical Agent PUL-150 (Short-Acting Beta Agonist (SABA))',
    therapeuticClass: 'Respiratory & Allergy',
    subClass: 'Short-Acting Beta Agonist (SABA)',
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

export class RXNORM_PUL_Service {
  static search(query: string): RxNormMedication[] {
    const q = query.toLowerCase().trim();
    if (!q) return RXNORM_PUL_DATASET.slice(0, 20);
    return RXNORM_PUL_DATASET.filter(m => m.genericName.toLowerCase().includes(q) || m.brandName.toLowerCase().includes(q) || m.rxcui.includes(q));
  }
}
