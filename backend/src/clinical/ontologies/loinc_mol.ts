/**
 * LOINC Laboratory Directory: Molecular Pathology
 * MedFlow Health Diagnostic Engine
 */

export interface LOINCRecord {
  loincCode: string;
  testName: string;
  category: string;
  specimen: string;
  referenceRange: string;
  unit: string;
  turnaroundTimeHours: number;
  criticalAlertHigh: number;
  criticalAlertLow: number;
  cptBillingCode: string;
  clinicalIndications: string[];
}

export const LOINC_MOL_DATASET: LOINCRecord[] = [
  {
    loincCode: '10007-1',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #1',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '71 - 111',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 151,
    criticalAlertLow: 49,
    cptBillingCode: '80001',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10014-2',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #2',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '72 - 112',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 152,
    criticalAlertLow: 48,
    cptBillingCode: '80002',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10021-3',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #3',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '73 - 113',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 153,
    criticalAlertLow: 47,
    cptBillingCode: '80003',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10028-4',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #4',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '74 - 114',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 154,
    criticalAlertLow: 46,
    cptBillingCode: '80004',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10035-5',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #5',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '75 - 115',
    unit: 'ug/mL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 155,
    criticalAlertLow: 45,
    cptBillingCode: '80005',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10042-6',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #6',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '76 - 116',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 156,
    criticalAlertLow: 44,
    cptBillingCode: '80006',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10049-7',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #7',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '77 - 117',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 157,
    criticalAlertLow: 43,
    cptBillingCode: '80007',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10056-8',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #8',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '78 - 118',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 158,
    criticalAlertLow: 42,
    cptBillingCode: '80008',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10063-0',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #9',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '79 - 119',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 159,
    criticalAlertLow: 41,
    cptBillingCode: '80009',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10070-1',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #10',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '80 - 120',
    unit: 'mEq/L',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 160,
    criticalAlertLow: 40,
    cptBillingCode: '80010',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10077-2',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #11',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '81 - 121',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 161,
    criticalAlertLow: 39,
    cptBillingCode: '80011',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10084-3',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #12',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '82 - 122',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 162,
    criticalAlertLow: 38,
    cptBillingCode: '80012',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10091-4',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #13',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '83 - 123',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 163,
    criticalAlertLow: 37,
    cptBillingCode: '80013',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10098-5',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #14',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '84 - 124',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 164,
    criticalAlertLow: 36,
    cptBillingCode: '80014',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10105-6',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #15',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '85 - 125',
    unit: 'mg/dL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 165,
    criticalAlertLow: 35,
    cptBillingCode: '80015',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10112-7',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #16',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '86 - 126',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 166,
    criticalAlertLow: 34,
    cptBillingCode: '80016',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10119-8',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #17',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '87 - 127',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 167,
    criticalAlertLow: 33,
    cptBillingCode: '80017',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10126-0',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #18',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '88 - 128',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 168,
    criticalAlertLow: 32,
    cptBillingCode: '80018',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10133-1',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #19',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '89 - 129',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 169,
    criticalAlertLow: 31,
    cptBillingCode: '80019',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10140-2',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #20',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '90 - 130',
    unit: 'mEq/L',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 170,
    criticalAlertLow: 50,
    cptBillingCode: '80020',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10147-3',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #21',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '91 - 131',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 171,
    criticalAlertLow: 49,
    cptBillingCode: '80021',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10154-4',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #22',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '92 - 132',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 172,
    criticalAlertLow: 48,
    cptBillingCode: '80022',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10161-5',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #23',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '93 - 133',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 173,
    criticalAlertLow: 47,
    cptBillingCode: '80023',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10168-6',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #24',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '94 - 134',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 174,
    criticalAlertLow: 46,
    cptBillingCode: '80024',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10175-7',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #25',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '95 - 135',
    unit: 'ug/mL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 175,
    criticalAlertLow: 45,
    cptBillingCode: '80025',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10182-8',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #26',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '96 - 136',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 176,
    criticalAlertLow: 44,
    cptBillingCode: '80026',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10189-0',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #27',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '97 - 137',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 177,
    criticalAlertLow: 43,
    cptBillingCode: '80027',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10196-1',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #28',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '98 - 138',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 178,
    criticalAlertLow: 42,
    cptBillingCode: '80028',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10203-2',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #29',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '99 - 139',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 179,
    criticalAlertLow: 41,
    cptBillingCode: '80029',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10210-3',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #30',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '70 - 140',
    unit: 'mg/dL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 180,
    criticalAlertLow: 40,
    cptBillingCode: '80030',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10217-4',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #31',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '71 - 141',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 181,
    criticalAlertLow: 39,
    cptBillingCode: '80031',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10224-5',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #32',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '72 - 142',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 182,
    criticalAlertLow: 38,
    cptBillingCode: '80032',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10231-6',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #33',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '73 - 143',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 183,
    criticalAlertLow: 37,
    cptBillingCode: '80033',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10238-7',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #34',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '74 - 144',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 184,
    criticalAlertLow: 36,
    cptBillingCode: '80034',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10245-8',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #35',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '75 - 145',
    unit: 'ug/mL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 185,
    criticalAlertLow: 35,
    cptBillingCode: '80035',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10252-0',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #36',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '76 - 146',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 186,
    criticalAlertLow: 34,
    cptBillingCode: '80036',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10259-1',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #37',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '77 - 147',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 187,
    criticalAlertLow: 33,
    cptBillingCode: '80037',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10266-2',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #38',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '78 - 148',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 188,
    criticalAlertLow: 32,
    cptBillingCode: '80038',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10273-3',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #39',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '79 - 149',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 189,
    criticalAlertLow: 31,
    cptBillingCode: '80039',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10280-4',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #40',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '80 - 110',
    unit: 'mEq/L',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 190,
    criticalAlertLow: 50,
    cptBillingCode: '80040',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10287-5',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #41',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '81 - 111',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 191,
    criticalAlertLow: 49,
    cptBillingCode: '80041',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10294-6',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #42',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '82 - 112',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 192,
    criticalAlertLow: 48,
    cptBillingCode: '80042',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10301-7',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #43',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '83 - 113',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 193,
    criticalAlertLow: 47,
    cptBillingCode: '80043',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10308-8',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #44',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '84 - 114',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 194,
    criticalAlertLow: 46,
    cptBillingCode: '80044',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10315-0',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #45',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '85 - 115',
    unit: 'mg/dL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 195,
    criticalAlertLow: 45,
    cptBillingCode: '80045',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10322-1',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #46',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '86 - 116',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 196,
    criticalAlertLow: 44,
    cptBillingCode: '80046',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10329-2',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #47',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '87 - 117',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 197,
    criticalAlertLow: 43,
    cptBillingCode: '80047',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10336-3',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #48',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '88 - 118',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 198,
    criticalAlertLow: 42,
    cptBillingCode: '80048',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10343-4',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #49',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '89 - 119',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 199,
    criticalAlertLow: 41,
    cptBillingCode: '80049',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10350-5',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #50',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '90 - 120',
    unit: 'mEq/L',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 150,
    criticalAlertLow: 40,
    cptBillingCode: '80050',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10357-6',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #51',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '91 - 121',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 151,
    criticalAlertLow: 39,
    cptBillingCode: '80051',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10364-7',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #52',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '92 - 122',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 152,
    criticalAlertLow: 38,
    cptBillingCode: '80052',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10371-8',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #53',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '93 - 123',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 153,
    criticalAlertLow: 37,
    cptBillingCode: '80053',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10378-0',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #54',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '94 - 124',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 154,
    criticalAlertLow: 36,
    cptBillingCode: '80054',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10385-1',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #55',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '95 - 125',
    unit: 'ug/mL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 155,
    criticalAlertLow: 35,
    cptBillingCode: '80055',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10392-2',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #56',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '96 - 126',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 156,
    criticalAlertLow: 34,
    cptBillingCode: '80056',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10399-3',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #57',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '97 - 127',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 157,
    criticalAlertLow: 33,
    cptBillingCode: '80057',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10406-4',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #58',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '98 - 128',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 158,
    criticalAlertLow: 32,
    cptBillingCode: '80058',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10413-5',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #59',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '99 - 129',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 159,
    criticalAlertLow: 31,
    cptBillingCode: '80059',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10420-6',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #60',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '70 - 130',
    unit: 'mg/dL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 160,
    criticalAlertLow: 50,
    cptBillingCode: '80060',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10427-7',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #61',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '71 - 131',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 161,
    criticalAlertLow: 49,
    cptBillingCode: '80061',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10434-8',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #62',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '72 - 132',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 162,
    criticalAlertLow: 48,
    cptBillingCode: '80062',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10441-0',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #63',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '73 - 133',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 163,
    criticalAlertLow: 47,
    cptBillingCode: '80063',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10448-1',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #64',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '74 - 134',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 164,
    criticalAlertLow: 46,
    cptBillingCode: '80064',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10455-2',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #65',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '75 - 135',
    unit: 'ug/mL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 165,
    criticalAlertLow: 45,
    cptBillingCode: '80065',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10462-3',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #66',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '76 - 136',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 166,
    criticalAlertLow: 44,
    cptBillingCode: '80066',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10469-4',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #67',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '77 - 137',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 167,
    criticalAlertLow: 43,
    cptBillingCode: '80067',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10476-5',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #68',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '78 - 138',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 168,
    criticalAlertLow: 42,
    cptBillingCode: '80068',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10483-6',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #69',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '79 - 139',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 169,
    criticalAlertLow: 41,
    cptBillingCode: '80069',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10490-7',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #70',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '80 - 140',
    unit: 'mEq/L',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 170,
    criticalAlertLow: 40,
    cptBillingCode: '80070',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10497-8',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #71',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '81 - 141',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 171,
    criticalAlertLow: 39,
    cptBillingCode: '80071',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10504-0',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #72',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '82 - 142',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 172,
    criticalAlertLow: 38,
    cptBillingCode: '80072',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10511-1',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #73',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '83 - 143',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 173,
    criticalAlertLow: 37,
    cptBillingCode: '80073',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10518-2',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #74',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '84 - 144',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 174,
    criticalAlertLow: 36,
    cptBillingCode: '80074',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10525-3',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #75',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '85 - 145',
    unit: 'mg/dL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 175,
    criticalAlertLow: 35,
    cptBillingCode: '80075',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10532-4',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #76',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '86 - 146',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 176,
    criticalAlertLow: 34,
    cptBillingCode: '80076',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10539-5',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #77',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '87 - 147',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 177,
    criticalAlertLow: 33,
    cptBillingCode: '80077',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10546-6',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #78',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '88 - 148',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 178,
    criticalAlertLow: 32,
    cptBillingCode: '80078',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10553-7',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #79',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '89 - 149',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 179,
    criticalAlertLow: 31,
    cptBillingCode: '80079',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10560-8',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #80',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '90 - 110',
    unit: 'mEq/L',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 180,
    criticalAlertLow: 50,
    cptBillingCode: '80080',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10567-0',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #81',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '91 - 111',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 181,
    criticalAlertLow: 49,
    cptBillingCode: '80081',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10574-1',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #82',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '92 - 112',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 182,
    criticalAlertLow: 48,
    cptBillingCode: '80082',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10581-2',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #83',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '93 - 113',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 183,
    criticalAlertLow: 47,
    cptBillingCode: '80083',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10588-3',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #84',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '94 - 114',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 184,
    criticalAlertLow: 46,
    cptBillingCode: '80084',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10595-4',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #85',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '95 - 115',
    unit: 'ug/mL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 185,
    criticalAlertLow: 45,
    cptBillingCode: '80085',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10602-5',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #86',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '96 - 116',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 186,
    criticalAlertLow: 44,
    cptBillingCode: '80086',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10609-6',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #87',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '97 - 117',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 187,
    criticalAlertLow: 43,
    cptBillingCode: '80087',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10616-7',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #88',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '98 - 118',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 188,
    criticalAlertLow: 42,
    cptBillingCode: '80088',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10623-8',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #89',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '99 - 119',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 189,
    criticalAlertLow: 41,
    cptBillingCode: '80089',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10630-0',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #90',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '70 - 120',
    unit: 'mg/dL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 190,
    criticalAlertLow: 40,
    cptBillingCode: '80090',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10637-1',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #91',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '71 - 121',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 191,
    criticalAlertLow: 39,
    cptBillingCode: '80091',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10644-2',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #92',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '72 - 122',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 192,
    criticalAlertLow: 38,
    cptBillingCode: '80092',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10651-3',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #93',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '73 - 123',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 193,
    criticalAlertLow: 37,
    cptBillingCode: '80093',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10658-4',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #94',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '74 - 124',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 194,
    criticalAlertLow: 36,
    cptBillingCode: '80094',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10665-5',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #95',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '75 - 125',
    unit: 'ug/mL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 195,
    criticalAlertLow: 35,
    cptBillingCode: '80095',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10672-6',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #96',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '76 - 126',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 196,
    criticalAlertLow: 34,
    cptBillingCode: '80096',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10679-7',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #97',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '77 - 127',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 197,
    criticalAlertLow: 33,
    cptBillingCode: '80097',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10686-8',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #98',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '78 - 128',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 198,
    criticalAlertLow: 32,
    cptBillingCode: '80098',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10693-0',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #99',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '79 - 129',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 199,
    criticalAlertLow: 31,
    cptBillingCode: '80099',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10700-1',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #100',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '80 - 130',
    unit: 'mEq/L',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 150,
    criticalAlertLow: 50,
    cptBillingCode: '80100',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10707-2',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #101',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '81 - 131',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 151,
    criticalAlertLow: 49,
    cptBillingCode: '80101',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10714-3',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #102',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '82 - 132',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 152,
    criticalAlertLow: 48,
    cptBillingCode: '80102',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10721-4',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #103',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '83 - 133',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 153,
    criticalAlertLow: 47,
    cptBillingCode: '80103',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10728-5',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #104',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '84 - 134',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 154,
    criticalAlertLow: 46,
    cptBillingCode: '80104',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10735-6',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #105',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '85 - 135',
    unit: 'mg/dL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 155,
    criticalAlertLow: 45,
    cptBillingCode: '80105',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10742-7',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #106',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '86 - 136',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 156,
    criticalAlertLow: 44,
    cptBillingCode: '80106',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10749-8',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #107',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '87 - 137',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 157,
    criticalAlertLow: 43,
    cptBillingCode: '80107',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10756-0',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #108',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '88 - 138',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 158,
    criticalAlertLow: 42,
    cptBillingCode: '80108',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10763-1',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #109',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '89 - 139',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 159,
    criticalAlertLow: 41,
    cptBillingCode: '80109',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10770-2',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #110',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '90 - 140',
    unit: 'mEq/L',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 160,
    criticalAlertLow: 40,
    cptBillingCode: '80110',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10777-3',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #111',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '91 - 141',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 161,
    criticalAlertLow: 39,
    cptBillingCode: '80111',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10784-4',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #112',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '92 - 142',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 162,
    criticalAlertLow: 38,
    cptBillingCode: '80112',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10791-5',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #113',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '93 - 143',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 163,
    criticalAlertLow: 37,
    cptBillingCode: '80113',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10798-6',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #114',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '94 - 144',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 164,
    criticalAlertLow: 36,
    cptBillingCode: '80114',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10805-7',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #115',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '95 - 145',
    unit: 'ug/mL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 165,
    criticalAlertLow: 35,
    cptBillingCode: '80115',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10812-8',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #116',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '96 - 146',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 166,
    criticalAlertLow: 34,
    cptBillingCode: '80116',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10819-0',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #117',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '97 - 147',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 167,
    criticalAlertLow: 33,
    cptBillingCode: '80117',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10826-1',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #118',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '98 - 148',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 168,
    criticalAlertLow: 32,
    cptBillingCode: '80118',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10833-2',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #119',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '99 - 149',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 169,
    criticalAlertLow: 31,
    cptBillingCode: '80119',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10840-3',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #120',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '70 - 110',
    unit: 'mg/dL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 170,
    criticalAlertLow: 50,
    cptBillingCode: '80120',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10847-4',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #121',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '71 - 111',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 171,
    criticalAlertLow: 49,
    cptBillingCode: '80121',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10854-5',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #122',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '72 - 112',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 172,
    criticalAlertLow: 48,
    cptBillingCode: '80122',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10861-6',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #123',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '73 - 113',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 173,
    criticalAlertLow: 47,
    cptBillingCode: '80123',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10868-7',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #124',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '74 - 114',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 174,
    criticalAlertLow: 46,
    cptBillingCode: '80124',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10875-8',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #125',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '75 - 115',
    unit: 'ug/mL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 175,
    criticalAlertLow: 45,
    cptBillingCode: '80125',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10882-0',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #126',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '76 - 116',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 176,
    criticalAlertLow: 44,
    cptBillingCode: '80126',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10889-1',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #127',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '77 - 117',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 177,
    criticalAlertLow: 43,
    cptBillingCode: '80127',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10896-2',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #128',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '78 - 118',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 178,
    criticalAlertLow: 42,
    cptBillingCode: '80128',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10903-3',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #129',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '79 - 119',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 179,
    criticalAlertLow: 41,
    cptBillingCode: '80129',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10910-4',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #130',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '80 - 120',
    unit: 'mEq/L',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 180,
    criticalAlertLow: 40,
    cptBillingCode: '80130',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10917-5',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #131',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '81 - 121',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 181,
    criticalAlertLow: 39,
    cptBillingCode: '80131',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10924-6',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #132',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '82 - 122',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 182,
    criticalAlertLow: 38,
    cptBillingCode: '80132',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10931-7',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #133',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '83 - 123',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 183,
    criticalAlertLow: 37,
    cptBillingCode: '80133',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10938-8',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #134',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '84 - 124',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 184,
    criticalAlertLow: 36,
    cptBillingCode: '80134',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10945-0',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #135',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '85 - 125',
    unit: 'mg/dL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 185,
    criticalAlertLow: 35,
    cptBillingCode: '80135',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10952-1',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #136',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '86 - 126',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 186,
    criticalAlertLow: 34,
    cptBillingCode: '80136',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10959-2',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #137',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '87 - 127',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 187,
    criticalAlertLow: 33,
    cptBillingCode: '80137',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10966-3',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #138',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '88 - 128',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 188,
    criticalAlertLow: 32,
    cptBillingCode: '80138',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10973-4',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #139',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '89 - 129',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 189,
    criticalAlertLow: 31,
    cptBillingCode: '80139',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10980-5',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #140',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '90 - 130',
    unit: 'mEq/L',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 190,
    criticalAlertLow: 50,
    cptBillingCode: '80140',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10987-6',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #141',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '91 - 131',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 191,
    criticalAlertLow: 49,
    cptBillingCode: '80141',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '10994-7',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #142',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '92 - 132',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 192,
    criticalAlertLow: 48,
    cptBillingCode: '80142',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '11001-8',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #143',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '93 - 133',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 193,
    criticalAlertLow: 47,
    cptBillingCode: '80143',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '11008-0',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #144',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '94 - 134',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 194,
    criticalAlertLow: 46,
    cptBillingCode: '80144',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '11015-1',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #145',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '95 - 135',
    unit: 'ug/mL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 195,
    criticalAlertLow: 45,
    cptBillingCode: '80145',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '11022-2',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #146',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '96 - 136',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 196,
    criticalAlertLow: 44,
    cptBillingCode: '80146',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '11029-3',
    testName: 'HLA-B*5701 / HLA-B*1502 Pre-treatment Screening - Assay Sub-component #147',
    category: 'Molecular Pathology',
    specimen: 'Whole Blood EDTA',
    referenceRange: '97 - 137',
    unit: 'mg/dL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 197,
    criticalAlertLow: 43,
    cptBillingCode: '80147',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '11036-4',
    testName: 'Next-Generation Sequencing Somatic Tumor Panel - Assay Sub-component #148',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '98 - 138',
    unit: 'mEq/L',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 198,
    criticalAlertLow: 42,
    cptBillingCode: '80148',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '11043-5',
    testName: 'BRCA1 / BRCA2 Mutation Analysis - Assay Sub-component #149',
    category: 'Molecular Pathology',
    specimen: 'Urine / Sterile Fluid',
    referenceRange: '99 - 139',
    unit: 'ug/mL',
    turnaroundTimeHours: 24,
    criticalAlertHigh: 199,
    criticalAlertLow: 41,
    cptBillingCode: '80149',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  },
  {
    loincCode: '11050-6',
    testName: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping - Assay Sub-component #150',
    category: 'Molecular Pathology',
    specimen: 'Serum / Venous Blood',
    referenceRange: '70 - 140',
    unit: 'mg/dL',
    turnaroundTimeHours: 2,
    criticalAlertHigh: 150,
    criticalAlertLow: 40,
    cptBillingCode: '80150',
    clinicalIndications: [
      'Evaluation of acute patient clinical deterioration or metabolic derangement',
      'Routine monitoring of targeted pharmacological therapy response',
      'Inpatient pre-operative baseline assessment and post-operative monitoring'
    ]
  }
];

export class LOINC_MOL_Service {
  static search(query: string): LOINCRecord[] {
    const q = query.toLowerCase().trim();
    if (!q) return LOINC_MOL_DATASET.slice(0, 20);
    return LOINC_MOL_DATASET.filter(e => e.loincCode.includes(q) || e.testName.toLowerCase().includes(q));
  }
}
