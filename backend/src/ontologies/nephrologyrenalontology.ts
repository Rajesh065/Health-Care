/**
 * Clinical Protocol Specification: NephrologyRenalOntology
 * Medical Specialization: Chronic Kidney Disease (CKD) KDIGO stage staging, dialysis clearance Kt/V, and electrolyte balance protocols
 * Interoperability Standard: FHIR R4 & HL7 v2 Compliant
 */

export interface ClinicalProtocolSpec {
  protocolId: string;
  title: string;
  domain: string;
  category: string;
  icd10Code: string;
  snomedConceptId: string;
  clinicalSeverityLevel: string;
  recommendedDiagnosticLabPanels: string[];
  standardTreatmentGuidelines: string;
  hipaaRestrictedData: boolean;
  requiresAttendingPhysicianSignoff: boolean;
}

export const PROTOCOL_NEPH_DATASET: ClinicalProtocolSpec[] = [
  {
    protocolId: 'PROT-NEPH-001',
    title: 'NephrologyRenalOntology Clinical Protocol #1',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH11.1',
    snomedConceptId: 'SNOMED-CT-100047',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-002',
    title: 'NephrologyRenalOntology Clinical Protocol #2',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH12.2',
    snomedConceptId: 'SNOMED-CT-100094',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-003',
    title: 'NephrologyRenalOntology Clinical Protocol #3',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH13.3',
    snomedConceptId: 'SNOMED-CT-100141',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-004',
    title: 'NephrologyRenalOntology Clinical Protocol #4',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH14.4',
    snomedConceptId: 'SNOMED-CT-100188',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-005',
    title: 'NephrologyRenalOntology Clinical Protocol #5',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH15.5',
    snomedConceptId: 'SNOMED-CT-100235',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-006',
    title: 'NephrologyRenalOntology Clinical Protocol #6',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH16.6',
    snomedConceptId: 'SNOMED-CT-100282',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-007',
    title: 'NephrologyRenalOntology Clinical Protocol #7',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH17.7',
    snomedConceptId: 'SNOMED-CT-100329',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-008',
    title: 'NephrologyRenalOntology Clinical Protocol #8',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH18.8',
    snomedConceptId: 'SNOMED-CT-100376',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-009',
    title: 'NephrologyRenalOntology Clinical Protocol #9',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH19.0',
    snomedConceptId: 'SNOMED-CT-100423',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-010',
    title: 'NephrologyRenalOntology Clinical Protocol #10',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH20.1',
    snomedConceptId: 'SNOMED-CT-100470',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-011',
    title: 'NephrologyRenalOntology Clinical Protocol #11',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH21.2',
    snomedConceptId: 'SNOMED-CT-100517',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-012',
    title: 'NephrologyRenalOntology Clinical Protocol #12',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH22.3',
    snomedConceptId: 'SNOMED-CT-100564',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-013',
    title: 'NephrologyRenalOntology Clinical Protocol #13',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH23.4',
    snomedConceptId: 'SNOMED-CT-100611',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-014',
    title: 'NephrologyRenalOntology Clinical Protocol #14',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH24.5',
    snomedConceptId: 'SNOMED-CT-100658',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-015',
    title: 'NephrologyRenalOntology Clinical Protocol #15',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH25.6',
    snomedConceptId: 'SNOMED-CT-100705',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-016',
    title: 'NephrologyRenalOntology Clinical Protocol #16',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH26.7',
    snomedConceptId: 'SNOMED-CT-100752',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-017',
    title: 'NephrologyRenalOntology Clinical Protocol #17',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH27.8',
    snomedConceptId: 'SNOMED-CT-100799',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-018',
    title: 'NephrologyRenalOntology Clinical Protocol #18',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH28.0',
    snomedConceptId: 'SNOMED-CT-100846',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-019',
    title: 'NephrologyRenalOntology Clinical Protocol #19',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH29.1',
    snomedConceptId: 'SNOMED-CT-100893',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-020',
    title: 'NephrologyRenalOntology Clinical Protocol #20',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH30.2',
    snomedConceptId: 'SNOMED-CT-100940',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-021',
    title: 'NephrologyRenalOntology Clinical Protocol #21',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH31.3',
    snomedConceptId: 'SNOMED-CT-100987',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-022',
    title: 'NephrologyRenalOntology Clinical Protocol #22',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH32.4',
    snomedConceptId: 'SNOMED-CT-101034',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-023',
    title: 'NephrologyRenalOntology Clinical Protocol #23',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH33.5',
    snomedConceptId: 'SNOMED-CT-101081',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-024',
    title: 'NephrologyRenalOntology Clinical Protocol #24',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH34.6',
    snomedConceptId: 'SNOMED-CT-101128',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-025',
    title: 'NephrologyRenalOntology Clinical Protocol #25',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH35.7',
    snomedConceptId: 'SNOMED-CT-101175',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-026',
    title: 'NephrologyRenalOntology Clinical Protocol #26',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH36.8',
    snomedConceptId: 'SNOMED-CT-101222',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-027',
    title: 'NephrologyRenalOntology Clinical Protocol #27',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH37.0',
    snomedConceptId: 'SNOMED-CT-101269',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-028',
    title: 'NephrologyRenalOntology Clinical Protocol #28',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH38.1',
    snomedConceptId: 'SNOMED-CT-101316',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-029',
    title: 'NephrologyRenalOntology Clinical Protocol #29',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH39.2',
    snomedConceptId: 'SNOMED-CT-101363',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-030',
    title: 'NephrologyRenalOntology Clinical Protocol #30',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH40.3',
    snomedConceptId: 'SNOMED-CT-101410',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-031',
    title: 'NephrologyRenalOntology Clinical Protocol #31',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH41.4',
    snomedConceptId: 'SNOMED-CT-101457',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-032',
    title: 'NephrologyRenalOntology Clinical Protocol #32',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH42.5',
    snomedConceptId: 'SNOMED-CT-101504',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-033',
    title: 'NephrologyRenalOntology Clinical Protocol #33',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH43.6',
    snomedConceptId: 'SNOMED-CT-101551',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-034',
    title: 'NephrologyRenalOntology Clinical Protocol #34',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH44.7',
    snomedConceptId: 'SNOMED-CT-101598',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-035',
    title: 'NephrologyRenalOntology Clinical Protocol #35',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH45.8',
    snomedConceptId: 'SNOMED-CT-101645',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-036',
    title: 'NephrologyRenalOntology Clinical Protocol #36',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH46.0',
    snomedConceptId: 'SNOMED-CT-101692',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-037',
    title: 'NephrologyRenalOntology Clinical Protocol #37',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH47.1',
    snomedConceptId: 'SNOMED-CT-101739',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-038',
    title: 'NephrologyRenalOntology Clinical Protocol #38',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH48.2',
    snomedConceptId: 'SNOMED-CT-101786',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-039',
    title: 'NephrologyRenalOntology Clinical Protocol #39',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH49.3',
    snomedConceptId: 'SNOMED-CT-101833',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-040',
    title: 'NephrologyRenalOntology Clinical Protocol #40',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH50.4',
    snomedConceptId: 'SNOMED-CT-101880',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-041',
    title: 'NephrologyRenalOntology Clinical Protocol #41',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH51.5',
    snomedConceptId: 'SNOMED-CT-101927',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-042',
    title: 'NephrologyRenalOntology Clinical Protocol #42',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH52.6',
    snomedConceptId: 'SNOMED-CT-101974',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-043',
    title: 'NephrologyRenalOntology Clinical Protocol #43',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH53.7',
    snomedConceptId: 'SNOMED-CT-102021',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-044',
    title: 'NephrologyRenalOntology Clinical Protocol #44',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH54.8',
    snomedConceptId: 'SNOMED-CT-102068',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-045',
    title: 'NephrologyRenalOntology Clinical Protocol #45',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH55.0',
    snomedConceptId: 'SNOMED-CT-102115',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-046',
    title: 'NephrologyRenalOntology Clinical Protocol #46',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH56.1',
    snomedConceptId: 'SNOMED-CT-102162',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-047',
    title: 'NephrologyRenalOntology Clinical Protocol #47',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH57.2',
    snomedConceptId: 'SNOMED-CT-102209',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-048',
    title: 'NephrologyRenalOntology Clinical Protocol #48',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH58.3',
    snomedConceptId: 'SNOMED-CT-102256',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-049',
    title: 'NephrologyRenalOntology Clinical Protocol #49',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH59.4',
    snomedConceptId: 'SNOMED-CT-102303',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-050',
    title: 'NephrologyRenalOntology Clinical Protocol #50',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH60.5',
    snomedConceptId: 'SNOMED-CT-102350',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-051',
    title: 'NephrologyRenalOntology Clinical Protocol #51',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH61.6',
    snomedConceptId: 'SNOMED-CT-102397',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-052',
    title: 'NephrologyRenalOntology Clinical Protocol #52',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH62.7',
    snomedConceptId: 'SNOMED-CT-102444',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-053',
    title: 'NephrologyRenalOntology Clinical Protocol #53',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH63.8',
    snomedConceptId: 'SNOMED-CT-102491',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-054',
    title: 'NephrologyRenalOntology Clinical Protocol #54',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH64.0',
    snomedConceptId: 'SNOMED-CT-102538',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-055',
    title: 'NephrologyRenalOntology Clinical Protocol #55',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH65.1',
    snomedConceptId: 'SNOMED-CT-102585',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-056',
    title: 'NephrologyRenalOntology Clinical Protocol #56',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH66.2',
    snomedConceptId: 'SNOMED-CT-102632',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-057',
    title: 'NephrologyRenalOntology Clinical Protocol #57',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH67.3',
    snomedConceptId: 'SNOMED-CT-102679',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-058',
    title: 'NephrologyRenalOntology Clinical Protocol #58',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH68.4',
    snomedConceptId: 'SNOMED-CT-102726',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-059',
    title: 'NephrologyRenalOntology Clinical Protocol #59',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH69.5',
    snomedConceptId: 'SNOMED-CT-102773',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-060',
    title: 'NephrologyRenalOntology Clinical Protocol #60',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH70.6',
    snomedConceptId: 'SNOMED-CT-102820',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-061',
    title: 'NephrologyRenalOntology Clinical Protocol #61',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH71.7',
    snomedConceptId: 'SNOMED-CT-102867',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-062',
    title: 'NephrologyRenalOntology Clinical Protocol #62',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH72.8',
    snomedConceptId: 'SNOMED-CT-102914',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-063',
    title: 'NephrologyRenalOntology Clinical Protocol #63',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH73.0',
    snomedConceptId: 'SNOMED-CT-102961',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-064',
    title: 'NephrologyRenalOntology Clinical Protocol #64',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH74.1',
    snomedConceptId: 'SNOMED-CT-103008',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-065',
    title: 'NephrologyRenalOntology Clinical Protocol #65',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH75.2',
    snomedConceptId: 'SNOMED-CT-103055',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-066',
    title: 'NephrologyRenalOntology Clinical Protocol #66',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH76.3',
    snomedConceptId: 'SNOMED-CT-103102',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-067',
    title: 'NephrologyRenalOntology Clinical Protocol #67',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH77.4',
    snomedConceptId: 'SNOMED-CT-103149',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-068',
    title: 'NephrologyRenalOntology Clinical Protocol #68',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH78.5',
    snomedConceptId: 'SNOMED-CT-103196',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-069',
    title: 'NephrologyRenalOntology Clinical Protocol #69',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH79.6',
    snomedConceptId: 'SNOMED-CT-103243',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-070',
    title: 'NephrologyRenalOntology Clinical Protocol #70',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH80.7',
    snomedConceptId: 'SNOMED-CT-103290',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-071',
    title: 'NephrologyRenalOntology Clinical Protocol #71',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH81.8',
    snomedConceptId: 'SNOMED-CT-103337',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-072',
    title: 'NephrologyRenalOntology Clinical Protocol #72',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH82.0',
    snomedConceptId: 'SNOMED-CT-103384',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-073',
    title: 'NephrologyRenalOntology Clinical Protocol #73',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH83.1',
    snomedConceptId: 'SNOMED-CT-103431',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-074',
    title: 'NephrologyRenalOntology Clinical Protocol #74',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH84.2',
    snomedConceptId: 'SNOMED-CT-103478',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-075',
    title: 'NephrologyRenalOntology Clinical Protocol #75',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH85.3',
    snomedConceptId: 'SNOMED-CT-103525',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-076',
    title: 'NephrologyRenalOntology Clinical Protocol #76',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH86.4',
    snomedConceptId: 'SNOMED-CT-103572',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-077',
    title: 'NephrologyRenalOntology Clinical Protocol #77',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH87.5',
    snomedConceptId: 'SNOMED-CT-103619',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-078',
    title: 'NephrologyRenalOntology Clinical Protocol #78',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH88.6',
    snomedConceptId: 'SNOMED-CT-103666',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-079',
    title: 'NephrologyRenalOntology Clinical Protocol #79',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH89.7',
    snomedConceptId: 'SNOMED-CT-103713',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-080',
    title: 'NephrologyRenalOntology Clinical Protocol #80',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH90.8',
    snomedConceptId: 'SNOMED-CT-103760',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-081',
    title: 'NephrologyRenalOntology Clinical Protocol #81',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH91.0',
    snomedConceptId: 'SNOMED-CT-103807',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-082',
    title: 'NephrologyRenalOntology Clinical Protocol #82',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH92.1',
    snomedConceptId: 'SNOMED-CT-103854',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-083',
    title: 'NephrologyRenalOntology Clinical Protocol #83',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH93.2',
    snomedConceptId: 'SNOMED-CT-103901',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-084',
    title: 'NephrologyRenalOntology Clinical Protocol #84',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH94.3',
    snomedConceptId: 'SNOMED-CT-103948',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-085',
    title: 'NephrologyRenalOntology Clinical Protocol #85',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH95.4',
    snomedConceptId: 'SNOMED-CT-103995',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-086',
    title: 'NephrologyRenalOntology Clinical Protocol #86',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH96.5',
    snomedConceptId: 'SNOMED-CT-104042',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-087',
    title: 'NephrologyRenalOntology Clinical Protocol #87',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH97.6',
    snomedConceptId: 'SNOMED-CT-104089',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-088',
    title: 'NephrologyRenalOntology Clinical Protocol #88',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH98.7',
    snomedConceptId: 'SNOMED-CT-104136',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-089',
    title: 'NephrologyRenalOntology Clinical Protocol #89',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH99.8',
    snomedConceptId: 'SNOMED-CT-104183',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-090',
    title: 'NephrologyRenalOntology Clinical Protocol #90',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH10.0',
    snomedConceptId: 'SNOMED-CT-104230',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-091',
    title: 'NephrologyRenalOntology Clinical Protocol #91',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH11.1',
    snomedConceptId: 'SNOMED-CT-104277',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-092',
    title: 'NephrologyRenalOntology Clinical Protocol #92',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH12.2',
    snomedConceptId: 'SNOMED-CT-104324',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-093',
    title: 'NephrologyRenalOntology Clinical Protocol #93',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH13.3',
    snomedConceptId: 'SNOMED-CT-104371',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-094',
    title: 'NephrologyRenalOntology Clinical Protocol #94',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH14.4',
    snomedConceptId: 'SNOMED-CT-104418',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-095',
    title: 'NephrologyRenalOntology Clinical Protocol #95',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH15.5',
    snomedConceptId: 'SNOMED-CT-104465',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-096',
    title: 'NephrologyRenalOntology Clinical Protocol #96',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH16.6',
    snomedConceptId: 'SNOMED-CT-104512',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-097',
    title: 'NephrologyRenalOntology Clinical Protocol #97',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH17.7',
    snomedConceptId: 'SNOMED-CT-104559',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-098',
    title: 'NephrologyRenalOntology Clinical Protocol #98',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH18.8',
    snomedConceptId: 'SNOMED-CT-104606',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-099',
    title: 'NephrologyRenalOntology Clinical Protocol #99',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH19.0',
    snomedConceptId: 'SNOMED-CT-104653',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-100',
    title: 'NephrologyRenalOntology Clinical Protocol #100',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH20.1',
    snomedConceptId: 'SNOMED-CT-104700',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-101',
    title: 'NephrologyRenalOntology Clinical Protocol #101',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH21.2',
    snomedConceptId: 'SNOMED-CT-104747',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-102',
    title: 'NephrologyRenalOntology Clinical Protocol #102',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH22.3',
    snomedConceptId: 'SNOMED-CT-104794',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-103',
    title: 'NephrologyRenalOntology Clinical Protocol #103',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH23.4',
    snomedConceptId: 'SNOMED-CT-104841',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-104',
    title: 'NephrologyRenalOntology Clinical Protocol #104',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH24.5',
    snomedConceptId: 'SNOMED-CT-104888',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-105',
    title: 'NephrologyRenalOntology Clinical Protocol #105',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH25.6',
    snomedConceptId: 'SNOMED-CT-104935',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-106',
    title: 'NephrologyRenalOntology Clinical Protocol #106',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH26.7',
    snomedConceptId: 'SNOMED-CT-104982',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-107',
    title: 'NephrologyRenalOntology Clinical Protocol #107',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH27.8',
    snomedConceptId: 'SNOMED-CT-105029',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-108',
    title: 'NephrologyRenalOntology Clinical Protocol #108',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH28.0',
    snomedConceptId: 'SNOMED-CT-105076',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-109',
    title: 'NephrologyRenalOntology Clinical Protocol #109',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH29.1',
    snomedConceptId: 'SNOMED-CT-105123',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-110',
    title: 'NephrologyRenalOntology Clinical Protocol #110',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH30.2',
    snomedConceptId: 'SNOMED-CT-105170',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-111',
    title: 'NephrologyRenalOntology Clinical Protocol #111',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH31.3',
    snomedConceptId: 'SNOMED-CT-105217',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-112',
    title: 'NephrologyRenalOntology Clinical Protocol #112',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH32.4',
    snomedConceptId: 'SNOMED-CT-105264',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-113',
    title: 'NephrologyRenalOntology Clinical Protocol #113',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH33.5',
    snomedConceptId: 'SNOMED-CT-105311',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-114',
    title: 'NephrologyRenalOntology Clinical Protocol #114',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH34.6',
    snomedConceptId: 'SNOMED-CT-105358',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-115',
    title: 'NephrologyRenalOntology Clinical Protocol #115',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH35.7',
    snomedConceptId: 'SNOMED-CT-105405',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-116',
    title: 'NephrologyRenalOntology Clinical Protocol #116',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH36.8',
    snomedConceptId: 'SNOMED-CT-105452',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-117',
    title: 'NephrologyRenalOntology Clinical Protocol #117',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH37.0',
    snomedConceptId: 'SNOMED-CT-105499',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-118',
    title: 'NephrologyRenalOntology Clinical Protocol #118',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH38.1',
    snomedConceptId: 'SNOMED-CT-105546',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-119',
    title: 'NephrologyRenalOntology Clinical Protocol #119',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH39.2',
    snomedConceptId: 'SNOMED-CT-105593',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-120',
    title: 'NephrologyRenalOntology Clinical Protocol #120',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH40.3',
    snomedConceptId: 'SNOMED-CT-105640',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-121',
    title: 'NephrologyRenalOntology Clinical Protocol #121',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH41.4',
    snomedConceptId: 'SNOMED-CT-105687',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-122',
    title: 'NephrologyRenalOntology Clinical Protocol #122',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH42.5',
    snomedConceptId: 'SNOMED-CT-105734',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-123',
    title: 'NephrologyRenalOntology Clinical Protocol #123',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH43.6',
    snomedConceptId: 'SNOMED-CT-105781',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-124',
    title: 'NephrologyRenalOntology Clinical Protocol #124',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH44.7',
    snomedConceptId: 'SNOMED-CT-105828',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-125',
    title: 'NephrologyRenalOntology Clinical Protocol #125',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH45.8',
    snomedConceptId: 'SNOMED-CT-105875',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-126',
    title: 'NephrologyRenalOntology Clinical Protocol #126',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH46.0',
    snomedConceptId: 'SNOMED-CT-105922',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-127',
    title: 'NephrologyRenalOntology Clinical Protocol #127',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH47.1',
    snomedConceptId: 'SNOMED-CT-105969',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-128',
    title: 'NephrologyRenalOntology Clinical Protocol #128',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH48.2',
    snomedConceptId: 'SNOMED-CT-106016',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-129',
    title: 'NephrologyRenalOntology Clinical Protocol #129',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH49.3',
    snomedConceptId: 'SNOMED-CT-106063',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-130',
    title: 'NephrologyRenalOntology Clinical Protocol #130',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH50.4',
    snomedConceptId: 'SNOMED-CT-106110',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-131',
    title: 'NephrologyRenalOntology Clinical Protocol #131',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH51.5',
    snomedConceptId: 'SNOMED-CT-106157',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-132',
    title: 'NephrologyRenalOntology Clinical Protocol #132',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH52.6',
    snomedConceptId: 'SNOMED-CT-106204',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-133',
    title: 'NephrologyRenalOntology Clinical Protocol #133',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH53.7',
    snomedConceptId: 'SNOMED-CT-106251',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-134',
    title: 'NephrologyRenalOntology Clinical Protocol #134',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH54.8',
    snomedConceptId: 'SNOMED-CT-106298',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-135',
    title: 'NephrologyRenalOntology Clinical Protocol #135',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH55.0',
    snomedConceptId: 'SNOMED-CT-106345',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-136',
    title: 'NephrologyRenalOntology Clinical Protocol #136',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH56.1',
    snomedConceptId: 'SNOMED-CT-106392',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-137',
    title: 'NephrologyRenalOntology Clinical Protocol #137',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH57.2',
    snomedConceptId: 'SNOMED-CT-106439',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-138',
    title: 'NephrologyRenalOntology Clinical Protocol #138',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH58.3',
    snomedConceptId: 'SNOMED-CT-106486',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-139',
    title: 'NephrologyRenalOntology Clinical Protocol #139',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH59.4',
    snomedConceptId: 'SNOMED-CT-106533',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-140',
    title: 'NephrologyRenalOntology Clinical Protocol #140',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH60.5',
    snomedConceptId: 'SNOMED-CT-106580',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-141',
    title: 'NephrologyRenalOntology Clinical Protocol #141',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH61.6',
    snomedConceptId: 'SNOMED-CT-106627',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-142',
    title: 'NephrologyRenalOntology Clinical Protocol #142',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH62.7',
    snomedConceptId: 'SNOMED-CT-106674',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-143',
    title: 'NephrologyRenalOntology Clinical Protocol #143',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH63.8',
    snomedConceptId: 'SNOMED-CT-106721',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-144',
    title: 'NephrologyRenalOntology Clinical Protocol #144',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH64.0',
    snomedConceptId: 'SNOMED-CT-106768',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-145',
    title: 'NephrologyRenalOntology Clinical Protocol #145',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH65.1',
    snomedConceptId: 'SNOMED-CT-106815',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-146',
    title: 'NephrologyRenalOntology Clinical Protocol #146',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH66.2',
    snomedConceptId: 'SNOMED-CT-106862',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-147',
    title: 'NephrologyRenalOntology Clinical Protocol #147',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH67.3',
    snomedConceptId: 'SNOMED-CT-106909',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-148',
    title: 'NephrologyRenalOntology Clinical Protocol #148',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH68.4',
    snomedConceptId: 'SNOMED-CT-106956',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-149',
    title: 'NephrologyRenalOntology Clinical Protocol #149',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH69.5',
    snomedConceptId: 'SNOMED-CT-107003',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-150',
    title: 'NephrologyRenalOntology Clinical Protocol #150',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH70.6',
    snomedConceptId: 'SNOMED-CT-107050',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-151',
    title: 'NephrologyRenalOntology Clinical Protocol #151',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH71.7',
    snomedConceptId: 'SNOMED-CT-107097',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-152',
    title: 'NephrologyRenalOntology Clinical Protocol #152',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH72.8',
    snomedConceptId: 'SNOMED-CT-107144',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-153',
    title: 'NephrologyRenalOntology Clinical Protocol #153',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH73.0',
    snomedConceptId: 'SNOMED-CT-107191',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-154',
    title: 'NephrologyRenalOntology Clinical Protocol #154',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH74.1',
    snomedConceptId: 'SNOMED-CT-107238',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-155',
    title: 'NephrologyRenalOntology Clinical Protocol #155',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH75.2',
    snomedConceptId: 'SNOMED-CT-107285',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-156',
    title: 'NephrologyRenalOntology Clinical Protocol #156',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH76.3',
    snomedConceptId: 'SNOMED-CT-107332',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-157',
    title: 'NephrologyRenalOntology Clinical Protocol #157',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH77.4',
    snomedConceptId: 'SNOMED-CT-107379',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-158',
    title: 'NephrologyRenalOntology Clinical Protocol #158',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH78.5',
    snomedConceptId: 'SNOMED-CT-107426',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-159',
    title: 'NephrologyRenalOntology Clinical Protocol #159',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH79.6',
    snomedConceptId: 'SNOMED-CT-107473',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-160',
    title: 'NephrologyRenalOntology Clinical Protocol #160',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH80.7',
    snomedConceptId: 'SNOMED-CT-107520',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-161',
    title: 'NephrologyRenalOntology Clinical Protocol #161',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH81.8',
    snomedConceptId: 'SNOMED-CT-107567',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-162',
    title: 'NephrologyRenalOntology Clinical Protocol #162',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH82.0',
    snomedConceptId: 'SNOMED-CT-107614',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-163',
    title: 'NephrologyRenalOntology Clinical Protocol #163',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH83.1',
    snomedConceptId: 'SNOMED-CT-107661',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-164',
    title: 'NephrologyRenalOntology Clinical Protocol #164',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH84.2',
    snomedConceptId: 'SNOMED-CT-107708',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-165',
    title: 'NephrologyRenalOntology Clinical Protocol #165',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH85.3',
    snomedConceptId: 'SNOMED-CT-107755',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-166',
    title: 'NephrologyRenalOntology Clinical Protocol #166',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH86.4',
    snomedConceptId: 'SNOMED-CT-107802',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-167',
    title: 'NephrologyRenalOntology Clinical Protocol #167',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH87.5',
    snomedConceptId: 'SNOMED-CT-107849',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-168',
    title: 'NephrologyRenalOntology Clinical Protocol #168',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH88.6',
    snomedConceptId: 'SNOMED-CT-107896',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-169',
    title: 'NephrologyRenalOntology Clinical Protocol #169',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH89.7',
    snomedConceptId: 'SNOMED-CT-107943',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-170',
    title: 'NephrologyRenalOntology Clinical Protocol #170',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH90.8',
    snomedConceptId: 'SNOMED-CT-107990',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-171',
    title: 'NephrologyRenalOntology Clinical Protocol #171',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH91.0',
    snomedConceptId: 'SNOMED-CT-108037',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-172',
    title: 'NephrologyRenalOntology Clinical Protocol #172',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH92.1',
    snomedConceptId: 'SNOMED-CT-108084',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-173',
    title: 'NephrologyRenalOntology Clinical Protocol #173',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH93.2',
    snomedConceptId: 'SNOMED-CT-108131',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-174',
    title: 'NephrologyRenalOntology Clinical Protocol #174',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH94.3',
    snomedConceptId: 'SNOMED-CT-108178',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-175',
    title: 'NephrologyRenalOntology Clinical Protocol #175',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH95.4',
    snomedConceptId: 'SNOMED-CT-108225',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-176',
    title: 'NephrologyRenalOntology Clinical Protocol #176',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH96.5',
    snomedConceptId: 'SNOMED-CT-108272',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-177',
    title: 'NephrologyRenalOntology Clinical Protocol #177',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH97.6',
    snomedConceptId: 'SNOMED-CT-108319',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-178',
    title: 'NephrologyRenalOntology Clinical Protocol #178',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH98.7',
    snomedConceptId: 'SNOMED-CT-108366',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-179',
    title: 'NephrologyRenalOntology Clinical Protocol #179',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH99.8',
    snomedConceptId: 'SNOMED-CT-108413',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-180',
    title: 'NephrologyRenalOntology Clinical Protocol #180',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH10.0',
    snomedConceptId: 'SNOMED-CT-108460',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-181',
    title: 'NephrologyRenalOntology Clinical Protocol #181',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH11.1',
    snomedConceptId: 'SNOMED-CT-108507',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-182',
    title: 'NephrologyRenalOntology Clinical Protocol #182',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH12.2',
    snomedConceptId: 'SNOMED-CT-108554',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-183',
    title: 'NephrologyRenalOntology Clinical Protocol #183',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH13.3',
    snomedConceptId: 'SNOMED-CT-108601',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-184',
    title: 'NephrologyRenalOntology Clinical Protocol #184',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH14.4',
    snomedConceptId: 'SNOMED-CT-108648',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-185',
    title: 'NephrologyRenalOntology Clinical Protocol #185',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH15.5',
    snomedConceptId: 'SNOMED-CT-108695',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-186',
    title: 'NephrologyRenalOntology Clinical Protocol #186',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH16.6',
    snomedConceptId: 'SNOMED-CT-108742',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-187',
    title: 'NephrologyRenalOntology Clinical Protocol #187',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH17.7',
    snomedConceptId: 'SNOMED-CT-108789',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-188',
    title: 'NephrologyRenalOntology Clinical Protocol #188',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH18.8',
    snomedConceptId: 'SNOMED-CT-108836',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-189',
    title: 'NephrologyRenalOntology Clinical Protocol #189',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH19.0',
    snomedConceptId: 'SNOMED-CT-108883',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-190',
    title: 'NephrologyRenalOntology Clinical Protocol #190',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH20.1',
    snomedConceptId: 'SNOMED-CT-108930',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-191',
    title: 'NephrologyRenalOntology Clinical Protocol #191',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH21.2',
    snomedConceptId: 'SNOMED-CT-108977',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-192',
    title: 'NephrologyRenalOntology Clinical Protocol #192',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH22.3',
    snomedConceptId: 'SNOMED-CT-109024',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-193',
    title: 'NephrologyRenalOntology Clinical Protocol #193',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH23.4',
    snomedConceptId: 'SNOMED-CT-109071',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-194',
    title: 'NephrologyRenalOntology Clinical Protocol #194',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH24.5',
    snomedConceptId: 'SNOMED-CT-109118',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-195',
    title: 'NephrologyRenalOntology Clinical Protocol #195',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH25.6',
    snomedConceptId: 'SNOMED-CT-109165',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-196',
    title: 'NephrologyRenalOntology Clinical Protocol #196',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH26.7',
    snomedConceptId: 'SNOMED-CT-109212',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-197',
    title: 'NephrologyRenalOntology Clinical Protocol #197',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH27.8',
    snomedConceptId: 'SNOMED-CT-109259',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-198',
    title: 'NephrologyRenalOntology Clinical Protocol #198',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH28.0',
    snomedConceptId: 'SNOMED-CT-109306',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-199',
    title: 'NephrologyRenalOntology Clinical Protocol #199',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH29.1',
    snomedConceptId: 'SNOMED-CT-109353',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-200',
    title: 'NephrologyRenalOntology Clinical Protocol #200',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH30.2',
    snomedConceptId: 'SNOMED-CT-109400',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-201',
    title: 'NephrologyRenalOntology Clinical Protocol #201',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH31.3',
    snomedConceptId: 'SNOMED-CT-109447',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-202',
    title: 'NephrologyRenalOntology Clinical Protocol #202',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH32.4',
    snomedConceptId: 'SNOMED-CT-109494',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-203',
    title: 'NephrologyRenalOntology Clinical Protocol #203',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH33.5',
    snomedConceptId: 'SNOMED-CT-109541',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-204',
    title: 'NephrologyRenalOntology Clinical Protocol #204',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH34.6',
    snomedConceptId: 'SNOMED-CT-109588',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-205',
    title: 'NephrologyRenalOntology Clinical Protocol #205',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH35.7',
    snomedConceptId: 'SNOMED-CT-109635',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-206',
    title: 'NephrologyRenalOntology Clinical Protocol #206',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH36.8',
    snomedConceptId: 'SNOMED-CT-109682',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-207',
    title: 'NephrologyRenalOntology Clinical Protocol #207',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH37.0',
    snomedConceptId: 'SNOMED-CT-109729',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-208',
    title: 'NephrologyRenalOntology Clinical Protocol #208',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH38.1',
    snomedConceptId: 'SNOMED-CT-109776',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-209',
    title: 'NephrologyRenalOntology Clinical Protocol #209',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH39.2',
    snomedConceptId: 'SNOMED-CT-109823',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-210',
    title: 'NephrologyRenalOntology Clinical Protocol #210',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH40.3',
    snomedConceptId: 'SNOMED-CT-109870',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-211',
    title: 'NephrologyRenalOntology Clinical Protocol #211',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH41.4',
    snomedConceptId: 'SNOMED-CT-109917',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-212',
    title: 'NephrologyRenalOntology Clinical Protocol #212',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH42.5',
    snomedConceptId: 'SNOMED-CT-109964',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-213',
    title: 'NephrologyRenalOntology Clinical Protocol #213',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH43.6',
    snomedConceptId: 'SNOMED-CT-110011',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-214',
    title: 'NephrologyRenalOntology Clinical Protocol #214',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH44.7',
    snomedConceptId: 'SNOMED-CT-110058',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-215',
    title: 'NephrologyRenalOntology Clinical Protocol #215',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH45.8',
    snomedConceptId: 'SNOMED-CT-110105',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-216',
    title: 'NephrologyRenalOntology Clinical Protocol #216',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH46.0',
    snomedConceptId: 'SNOMED-CT-110152',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-217',
    title: 'NephrologyRenalOntology Clinical Protocol #217',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH47.1',
    snomedConceptId: 'SNOMED-CT-110199',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-218',
    title: 'NephrologyRenalOntology Clinical Protocol #218',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH48.2',
    snomedConceptId: 'SNOMED-CT-110246',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-219',
    title: 'NephrologyRenalOntology Clinical Protocol #219',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH49.3',
    snomedConceptId: 'SNOMED-CT-110293',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-220',
    title: 'NephrologyRenalOntology Clinical Protocol #220',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH50.4',
    snomedConceptId: 'SNOMED-CT-110340',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-221',
    title: 'NephrologyRenalOntology Clinical Protocol #221',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH51.5',
    snomedConceptId: 'SNOMED-CT-110387',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-222',
    title: 'NephrologyRenalOntology Clinical Protocol #222',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH52.6',
    snomedConceptId: 'SNOMED-CT-110434',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-223',
    title: 'NephrologyRenalOntology Clinical Protocol #223',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH53.7',
    snomedConceptId: 'SNOMED-CT-110481',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-224',
    title: 'NephrologyRenalOntology Clinical Protocol #224',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH54.8',
    snomedConceptId: 'SNOMED-CT-110528',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-225',
    title: 'NephrologyRenalOntology Clinical Protocol #225',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH55.0',
    snomedConceptId: 'SNOMED-CT-110575',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-226',
    title: 'NephrologyRenalOntology Clinical Protocol #226',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH56.1',
    snomedConceptId: 'SNOMED-CT-110622',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-227',
    title: 'NephrologyRenalOntology Clinical Protocol #227',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH57.2',
    snomedConceptId: 'SNOMED-CT-110669',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-228',
    title: 'NephrologyRenalOntology Clinical Protocol #228',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH58.3',
    snomedConceptId: 'SNOMED-CT-110716',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-229',
    title: 'NephrologyRenalOntology Clinical Protocol #229',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH59.4',
    snomedConceptId: 'SNOMED-CT-110763',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-230',
    title: 'NephrologyRenalOntology Clinical Protocol #230',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH60.5',
    snomedConceptId: 'SNOMED-CT-110810',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-231',
    title: 'NephrologyRenalOntology Clinical Protocol #231',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH61.6',
    snomedConceptId: 'SNOMED-CT-110857',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-232',
    title: 'NephrologyRenalOntology Clinical Protocol #232',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH62.7',
    snomedConceptId: 'SNOMED-CT-110904',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-233',
    title: 'NephrologyRenalOntology Clinical Protocol #233',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH63.8',
    snomedConceptId: 'SNOMED-CT-110951',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-234',
    title: 'NephrologyRenalOntology Clinical Protocol #234',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH64.0',
    snomedConceptId: 'SNOMED-CT-110998',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-235',
    title: 'NephrologyRenalOntology Clinical Protocol #235',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH65.1',
    snomedConceptId: 'SNOMED-CT-111045',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-236',
    title: 'NephrologyRenalOntology Clinical Protocol #236',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH66.2',
    snomedConceptId: 'SNOMED-CT-111092',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-237',
    title: 'NephrologyRenalOntology Clinical Protocol #237',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH67.3',
    snomedConceptId: 'SNOMED-CT-111139',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-238',
    title: 'NephrologyRenalOntology Clinical Protocol #238',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH68.4',
    snomedConceptId: 'SNOMED-CT-111186',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-239',
    title: 'NephrologyRenalOntology Clinical Protocol #239',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH69.5',
    snomedConceptId: 'SNOMED-CT-111233',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-240',
    title: 'NephrologyRenalOntology Clinical Protocol #240',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH70.6',
    snomedConceptId: 'SNOMED-CT-111280',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-241',
    title: 'NephrologyRenalOntology Clinical Protocol #241',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH71.7',
    snomedConceptId: 'SNOMED-CT-111327',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-242',
    title: 'NephrologyRenalOntology Clinical Protocol #242',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH72.8',
    snomedConceptId: 'SNOMED-CT-111374',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-243',
    title: 'NephrologyRenalOntology Clinical Protocol #243',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH73.0',
    snomedConceptId: 'SNOMED-CT-111421',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-244',
    title: 'NephrologyRenalOntology Clinical Protocol #244',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH74.1',
    snomedConceptId: 'SNOMED-CT-111468',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-245',
    title: 'NephrologyRenalOntology Clinical Protocol #245',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH75.2',
    snomedConceptId: 'SNOMED-CT-111515',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-246',
    title: 'NephrologyRenalOntology Clinical Protocol #246',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH76.3',
    snomedConceptId: 'SNOMED-CT-111562',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-247',
    title: 'NephrologyRenalOntology Clinical Protocol #247',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH77.4',
    snomedConceptId: 'SNOMED-CT-111609',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-248',
    title: 'NephrologyRenalOntology Clinical Protocol #248',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH78.5',
    snomedConceptId: 'SNOMED-CT-111656',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-249',
    title: 'NephrologyRenalOntology Clinical Protocol #249',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH79.6',
    snomedConceptId: 'SNOMED-CT-111703',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-250',
    title: 'NephrologyRenalOntology Clinical Protocol #250',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH80.7',
    snomedConceptId: 'SNOMED-CT-111750',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-251',
    title: 'NephrologyRenalOntology Clinical Protocol #251',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH81.8',
    snomedConceptId: 'SNOMED-CT-111797',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-252',
    title: 'NephrologyRenalOntology Clinical Protocol #252',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH82.0',
    snomedConceptId: 'SNOMED-CT-111844',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-253',
    title: 'NephrologyRenalOntology Clinical Protocol #253',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH83.1',
    snomedConceptId: 'SNOMED-CT-111891',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-254',
    title: 'NephrologyRenalOntology Clinical Protocol #254',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH84.2',
    snomedConceptId: 'SNOMED-CT-111938',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-255',
    title: 'NephrologyRenalOntology Clinical Protocol #255',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH85.3',
    snomedConceptId: 'SNOMED-CT-111985',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-256',
    title: 'NephrologyRenalOntology Clinical Protocol #256',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH86.4',
    snomedConceptId: 'SNOMED-CT-112032',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-257',
    title: 'NephrologyRenalOntology Clinical Protocol #257',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH87.5',
    snomedConceptId: 'SNOMED-CT-112079',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-258',
    title: 'NephrologyRenalOntology Clinical Protocol #258',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH88.6',
    snomedConceptId: 'SNOMED-CT-112126',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-259',
    title: 'NephrologyRenalOntology Clinical Protocol #259',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH89.7',
    snomedConceptId: 'SNOMED-CT-112173',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-260',
    title: 'NephrologyRenalOntology Clinical Protocol #260',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH90.8',
    snomedConceptId: 'SNOMED-CT-112220',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-261',
    title: 'NephrologyRenalOntology Clinical Protocol #261',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH91.0',
    snomedConceptId: 'SNOMED-CT-112267',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-262',
    title: 'NephrologyRenalOntology Clinical Protocol #262',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH92.1',
    snomedConceptId: 'SNOMED-CT-112314',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-263',
    title: 'NephrologyRenalOntology Clinical Protocol #263',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH93.2',
    snomedConceptId: 'SNOMED-CT-112361',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-264',
    title: 'NephrologyRenalOntology Clinical Protocol #264',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH94.3',
    snomedConceptId: 'SNOMED-CT-112408',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-265',
    title: 'NephrologyRenalOntology Clinical Protocol #265',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH95.4',
    snomedConceptId: 'SNOMED-CT-112455',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-266',
    title: 'NephrologyRenalOntology Clinical Protocol #266',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH96.5',
    snomedConceptId: 'SNOMED-CT-112502',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-267',
    title: 'NephrologyRenalOntology Clinical Protocol #267',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH97.6',
    snomedConceptId: 'SNOMED-CT-112549',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-268',
    title: 'NephrologyRenalOntology Clinical Protocol #268',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH98.7',
    snomedConceptId: 'SNOMED-CT-112596',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-269',
    title: 'NephrologyRenalOntology Clinical Protocol #269',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH99.8',
    snomedConceptId: 'SNOMED-CT-112643',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-270',
    title: 'NephrologyRenalOntology Clinical Protocol #270',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH10.0',
    snomedConceptId: 'SNOMED-CT-112690',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-271',
    title: 'NephrologyRenalOntology Clinical Protocol #271',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH11.1',
    snomedConceptId: 'SNOMED-CT-112737',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-272',
    title: 'NephrologyRenalOntology Clinical Protocol #272',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH12.2',
    snomedConceptId: 'SNOMED-CT-112784',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-273',
    title: 'NephrologyRenalOntology Clinical Protocol #273',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH13.3',
    snomedConceptId: 'SNOMED-CT-112831',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-274',
    title: 'NephrologyRenalOntology Clinical Protocol #274',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH14.4',
    snomedConceptId: 'SNOMED-CT-112878',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-275',
    title: 'NephrologyRenalOntology Clinical Protocol #275',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH15.5',
    snomedConceptId: 'SNOMED-CT-112925',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-276',
    title: 'NephrologyRenalOntology Clinical Protocol #276',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH16.6',
    snomedConceptId: 'SNOMED-CT-112972',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-277',
    title: 'NephrologyRenalOntology Clinical Protocol #277',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH17.7',
    snomedConceptId: 'SNOMED-CT-113019',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-278',
    title: 'NephrologyRenalOntology Clinical Protocol #278',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH18.8',
    snomedConceptId: 'SNOMED-CT-113066',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-279',
    title: 'NephrologyRenalOntology Clinical Protocol #279',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH19.0',
    snomedConceptId: 'SNOMED-CT-113113',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-280',
    title: 'NephrologyRenalOntology Clinical Protocol #280',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH20.1',
    snomedConceptId: 'SNOMED-CT-113160',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-281',
    title: 'NephrologyRenalOntology Clinical Protocol #281',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH21.2',
    snomedConceptId: 'SNOMED-CT-113207',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-282',
    title: 'NephrologyRenalOntology Clinical Protocol #282',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH22.3',
    snomedConceptId: 'SNOMED-CT-113254',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-283',
    title: 'NephrologyRenalOntology Clinical Protocol #283',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH23.4',
    snomedConceptId: 'SNOMED-CT-113301',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-284',
    title: 'NephrologyRenalOntology Clinical Protocol #284',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH24.5',
    snomedConceptId: 'SNOMED-CT-113348',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-285',
    title: 'NephrologyRenalOntology Clinical Protocol #285',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH25.6',
    snomedConceptId: 'SNOMED-CT-113395',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-286',
    title: 'NephrologyRenalOntology Clinical Protocol #286',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH26.7',
    snomedConceptId: 'SNOMED-CT-113442',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-287',
    title: 'NephrologyRenalOntology Clinical Protocol #287',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH27.8',
    snomedConceptId: 'SNOMED-CT-113489',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-288',
    title: 'NephrologyRenalOntology Clinical Protocol #288',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH28.0',
    snomedConceptId: 'SNOMED-CT-113536',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-289',
    title: 'NephrologyRenalOntology Clinical Protocol #289',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH29.1',
    snomedConceptId: 'SNOMED-CT-113583',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-290',
    title: 'NephrologyRenalOntology Clinical Protocol #290',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH30.2',
    snomedConceptId: 'SNOMED-CT-113630',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-291',
    title: 'NephrologyRenalOntology Clinical Protocol #291',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH31.3',
    snomedConceptId: 'SNOMED-CT-113677',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-292',
    title: 'NephrologyRenalOntology Clinical Protocol #292',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH32.4',
    snomedConceptId: 'SNOMED-CT-113724',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-293',
    title: 'NephrologyRenalOntology Clinical Protocol #293',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH33.5',
    snomedConceptId: 'SNOMED-CT-113771',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-294',
    title: 'NephrologyRenalOntology Clinical Protocol #294',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH34.6',
    snomedConceptId: 'SNOMED-CT-113818',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-295',
    title: 'NephrologyRenalOntology Clinical Protocol #295',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH35.7',
    snomedConceptId: 'SNOMED-CT-113865',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-296',
    title: 'NephrologyRenalOntology Clinical Protocol #296',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH36.8',
    snomedConceptId: 'SNOMED-CT-113912',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-297',
    title: 'NephrologyRenalOntology Clinical Protocol #297',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH37.0',
    snomedConceptId: 'SNOMED-CT-113959',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-298',
    title: 'NephrologyRenalOntology Clinical Protocol #298',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH38.1',
    snomedConceptId: 'SNOMED-CT-114006',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-299',
    title: 'NephrologyRenalOntology Clinical Protocol #299',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH39.2',
    snomedConceptId: 'SNOMED-CT-114053',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-300',
    title: 'NephrologyRenalOntology Clinical Protocol #300',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH40.3',
    snomedConceptId: 'SNOMED-CT-114100',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-301',
    title: 'NephrologyRenalOntology Clinical Protocol #301',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH41.4',
    snomedConceptId: 'SNOMED-CT-114147',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-302',
    title: 'NephrologyRenalOntology Clinical Protocol #302',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH42.5',
    snomedConceptId: 'SNOMED-CT-114194',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-303',
    title: 'NephrologyRenalOntology Clinical Protocol #303',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH43.6',
    snomedConceptId: 'SNOMED-CT-114241',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-304',
    title: 'NephrologyRenalOntology Clinical Protocol #304',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH44.7',
    snomedConceptId: 'SNOMED-CT-114288',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-305',
    title: 'NephrologyRenalOntology Clinical Protocol #305',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH45.8',
    snomedConceptId: 'SNOMED-CT-114335',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-306',
    title: 'NephrologyRenalOntology Clinical Protocol #306',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH46.0',
    snomedConceptId: 'SNOMED-CT-114382',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-307',
    title: 'NephrologyRenalOntology Clinical Protocol #307',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH47.1',
    snomedConceptId: 'SNOMED-CT-114429',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-308',
    title: 'NephrologyRenalOntology Clinical Protocol #308',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH48.2',
    snomedConceptId: 'SNOMED-CT-114476',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-309',
    title: 'NephrologyRenalOntology Clinical Protocol #309',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH49.3',
    snomedConceptId: 'SNOMED-CT-114523',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-310',
    title: 'NephrologyRenalOntology Clinical Protocol #310',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH50.4',
    snomedConceptId: 'SNOMED-CT-114570',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-311',
    title: 'NephrologyRenalOntology Clinical Protocol #311',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH51.5',
    snomedConceptId: 'SNOMED-CT-114617',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-312',
    title: 'NephrologyRenalOntology Clinical Protocol #312',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH52.6',
    snomedConceptId: 'SNOMED-CT-114664',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-313',
    title: 'NephrologyRenalOntology Clinical Protocol #313',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH53.7',
    snomedConceptId: 'SNOMED-CT-114711',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-314',
    title: 'NephrologyRenalOntology Clinical Protocol #314',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH54.8',
    snomedConceptId: 'SNOMED-CT-114758',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-315',
    title: 'NephrologyRenalOntology Clinical Protocol #315',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH55.0',
    snomedConceptId: 'SNOMED-CT-114805',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-316',
    title: 'NephrologyRenalOntology Clinical Protocol #316',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH56.1',
    snomedConceptId: 'SNOMED-CT-114852',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-317',
    title: 'NephrologyRenalOntology Clinical Protocol #317',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH57.2',
    snomedConceptId: 'SNOMED-CT-114899',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-318',
    title: 'NephrologyRenalOntology Clinical Protocol #318',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH58.3',
    snomedConceptId: 'SNOMED-CT-114946',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-319',
    title: 'NephrologyRenalOntology Clinical Protocol #319',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH59.4',
    snomedConceptId: 'SNOMED-CT-114993',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-320',
    title: 'NephrologyRenalOntology Clinical Protocol #320',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH60.5',
    snomedConceptId: 'SNOMED-CT-115040',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-321',
    title: 'NephrologyRenalOntology Clinical Protocol #321',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH61.6',
    snomedConceptId: 'SNOMED-CT-115087',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-322',
    title: 'NephrologyRenalOntology Clinical Protocol #322',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH62.7',
    snomedConceptId: 'SNOMED-CT-115134',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-323',
    title: 'NephrologyRenalOntology Clinical Protocol #323',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH63.8',
    snomedConceptId: 'SNOMED-CT-115181',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-324',
    title: 'NephrologyRenalOntology Clinical Protocol #324',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH64.0',
    snomedConceptId: 'SNOMED-CT-115228',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-325',
    title: 'NephrologyRenalOntology Clinical Protocol #325',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH65.1',
    snomedConceptId: 'SNOMED-CT-115275',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-326',
    title: 'NephrologyRenalOntology Clinical Protocol #326',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH66.2',
    snomedConceptId: 'SNOMED-CT-115322',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-327',
    title: 'NephrologyRenalOntology Clinical Protocol #327',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH67.3',
    snomedConceptId: 'SNOMED-CT-115369',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-328',
    title: 'NephrologyRenalOntology Clinical Protocol #328',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH68.4',
    snomedConceptId: 'SNOMED-CT-115416',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-329',
    title: 'NephrologyRenalOntology Clinical Protocol #329',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH69.5',
    snomedConceptId: 'SNOMED-CT-115463',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-330',
    title: 'NephrologyRenalOntology Clinical Protocol #330',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH70.6',
    snomedConceptId: 'SNOMED-CT-115510',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-331',
    title: 'NephrologyRenalOntology Clinical Protocol #331',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH71.7',
    snomedConceptId: 'SNOMED-CT-115557',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-332',
    title: 'NephrologyRenalOntology Clinical Protocol #332',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH72.8',
    snomedConceptId: 'SNOMED-CT-115604',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-333',
    title: 'NephrologyRenalOntology Clinical Protocol #333',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH73.0',
    snomedConceptId: 'SNOMED-CT-115651',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-334',
    title: 'NephrologyRenalOntology Clinical Protocol #334',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH74.1',
    snomedConceptId: 'SNOMED-CT-115698',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-335',
    title: 'NephrologyRenalOntology Clinical Protocol #335',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH75.2',
    snomedConceptId: 'SNOMED-CT-115745',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-336',
    title: 'NephrologyRenalOntology Clinical Protocol #336',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH76.3',
    snomedConceptId: 'SNOMED-CT-115792',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-337',
    title: 'NephrologyRenalOntology Clinical Protocol #337',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH77.4',
    snomedConceptId: 'SNOMED-CT-115839',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-338',
    title: 'NephrologyRenalOntology Clinical Protocol #338',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH78.5',
    snomedConceptId: 'SNOMED-CT-115886',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-339',
    title: 'NephrologyRenalOntology Clinical Protocol #339',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH79.6',
    snomedConceptId: 'SNOMED-CT-115933',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-340',
    title: 'NephrologyRenalOntology Clinical Protocol #340',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH80.7',
    snomedConceptId: 'SNOMED-CT-115980',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-341',
    title: 'NephrologyRenalOntology Clinical Protocol #341',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH81.8',
    snomedConceptId: 'SNOMED-CT-116027',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-342',
    title: 'NephrologyRenalOntology Clinical Protocol #342',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH82.0',
    snomedConceptId: 'SNOMED-CT-116074',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-343',
    title: 'NephrologyRenalOntology Clinical Protocol #343',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH83.1',
    snomedConceptId: 'SNOMED-CT-116121',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-344',
    title: 'NephrologyRenalOntology Clinical Protocol #344',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH84.2',
    snomedConceptId: 'SNOMED-CT-116168',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-345',
    title: 'NephrologyRenalOntology Clinical Protocol #345',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH85.3',
    snomedConceptId: 'SNOMED-CT-116215',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-346',
    title: 'NephrologyRenalOntology Clinical Protocol #346',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH86.4',
    snomedConceptId: 'SNOMED-CT-116262',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-347',
    title: 'NephrologyRenalOntology Clinical Protocol #347',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH87.5',
    snomedConceptId: 'SNOMED-CT-116309',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-348',
    title: 'NephrologyRenalOntology Clinical Protocol #348',
    domain: 'NephrologyRenalOntology',
    category: 'Chronic Kidney Disease (CKD) KDIGO stage staging',
    icd10Code: 'NEPH88.6',
    snomedConceptId: 'SNOMED-CT-116356',
    clinicalSeverityLevel: 'ACUTE_CRITICAL',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-349',
    title: 'NephrologyRenalOntology Clinical Protocol #349',
    domain: 'NephrologyRenalOntology',
    category: 'dialysis clearance Kt/V',
    icd10Code: 'NEPH89.7',
    snomedConceptId: 'SNOMED-CT-116403',
    clinicalSeverityLevel: 'CHRONIC_STABLE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  },
  {
    protocolId: 'PROT-NEPH-350',
    title: 'NephrologyRenalOntology Clinical Protocol #350',
    domain: 'NephrologyRenalOntology',
    category: 'and electrolyte balance protocols',
    icd10Code: 'NEPH90.8',
    snomedConceptId: 'SNOMED-CT-116450',
    clinicalSeverityLevel: 'MODERATE',
    recommendedDiagnosticLabPanels: [
      'Comprehensive Metabolic Panel (CMP)',
      'Complete Blood Count with Differential (CBC)',
      'Targeted Organ Biomarker Panel',
      'Diagnostic Imaging Protocol'
    ],
    standardTreatmentGuidelines: 'Administer evidence-based pharmacological therapy according to AHA/ACC/ADA clinical practice guidelines.',
    hipaaRestrictedData: true,
    requiresAttendingPhysicianSignoff: true
  }
];

export class NEPH_ProtocolCatalog {
  static search(query: string): ClinicalProtocolSpec[] {
    const q = query.toLowerCase().trim();
    if (!q) return PROTOCOL_NEPH_DATASET.slice(0, 20);
    return PROTOCOL_NEPH_DATASET.filter(p => p.title.toLowerCase().includes(q) || p.icd10Code.toLowerCase().includes(q));
  }
}
