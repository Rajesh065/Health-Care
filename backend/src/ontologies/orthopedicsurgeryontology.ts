/**
 * Clinical Protocol Specification: OrthopedicSurgeryOntology
 * Medical Specialization: AO/OTA fracture classifications, total joint replacement post-op protocols, and spine fusion indices
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

export const PROTOCOL_ORTHO_DATASET: ClinicalProtocolSpec[] = [
  {
    protocolId: 'PROT-ORTHO-001',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #1',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO11.1',
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
    protocolId: 'PROT-ORTHO-002',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #2',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO12.2',
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
    protocolId: 'PROT-ORTHO-003',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #3',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO13.3',
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
    protocolId: 'PROT-ORTHO-004',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #4',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO14.4',
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
    protocolId: 'PROT-ORTHO-005',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #5',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO15.5',
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
    protocolId: 'PROT-ORTHO-006',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #6',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO16.6',
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
    protocolId: 'PROT-ORTHO-007',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #7',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO17.7',
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
    protocolId: 'PROT-ORTHO-008',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #8',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO18.8',
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
    protocolId: 'PROT-ORTHO-009',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #9',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO19.0',
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
    protocolId: 'PROT-ORTHO-010',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #10',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO20.1',
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
    protocolId: 'PROT-ORTHO-011',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #11',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO21.2',
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
    protocolId: 'PROT-ORTHO-012',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #12',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO22.3',
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
    protocolId: 'PROT-ORTHO-013',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #13',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO23.4',
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
    protocolId: 'PROT-ORTHO-014',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #14',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO24.5',
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
    protocolId: 'PROT-ORTHO-015',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #15',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO25.6',
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
    protocolId: 'PROT-ORTHO-016',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #16',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO26.7',
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
    protocolId: 'PROT-ORTHO-017',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #17',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO27.8',
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
    protocolId: 'PROT-ORTHO-018',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #18',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO28.0',
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
    protocolId: 'PROT-ORTHO-019',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #19',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO29.1',
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
    protocolId: 'PROT-ORTHO-020',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #20',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO30.2',
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
    protocolId: 'PROT-ORTHO-021',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #21',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO31.3',
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
    protocolId: 'PROT-ORTHO-022',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #22',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO32.4',
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
    protocolId: 'PROT-ORTHO-023',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #23',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO33.5',
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
    protocolId: 'PROT-ORTHO-024',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #24',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO34.6',
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
    protocolId: 'PROT-ORTHO-025',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #25',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO35.7',
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
    protocolId: 'PROT-ORTHO-026',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #26',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO36.8',
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
    protocolId: 'PROT-ORTHO-027',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #27',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO37.0',
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
    protocolId: 'PROT-ORTHO-028',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #28',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO38.1',
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
    protocolId: 'PROT-ORTHO-029',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #29',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO39.2',
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
    protocolId: 'PROT-ORTHO-030',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #30',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO40.3',
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
    protocolId: 'PROT-ORTHO-031',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #31',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO41.4',
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
    protocolId: 'PROT-ORTHO-032',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #32',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO42.5',
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
    protocolId: 'PROT-ORTHO-033',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #33',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO43.6',
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
    protocolId: 'PROT-ORTHO-034',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #34',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO44.7',
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
    protocolId: 'PROT-ORTHO-035',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #35',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO45.8',
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
    protocolId: 'PROT-ORTHO-036',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #36',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO46.0',
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
    protocolId: 'PROT-ORTHO-037',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #37',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO47.1',
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
    protocolId: 'PROT-ORTHO-038',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #38',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO48.2',
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
    protocolId: 'PROT-ORTHO-039',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #39',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO49.3',
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
    protocolId: 'PROT-ORTHO-040',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #40',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO50.4',
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
    protocolId: 'PROT-ORTHO-041',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #41',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO51.5',
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
    protocolId: 'PROT-ORTHO-042',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #42',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO52.6',
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
    protocolId: 'PROT-ORTHO-043',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #43',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO53.7',
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
    protocolId: 'PROT-ORTHO-044',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #44',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO54.8',
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
    protocolId: 'PROT-ORTHO-045',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #45',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO55.0',
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
    protocolId: 'PROT-ORTHO-046',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #46',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO56.1',
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
    protocolId: 'PROT-ORTHO-047',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #47',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO57.2',
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
    protocolId: 'PROT-ORTHO-048',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #48',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO58.3',
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
    protocolId: 'PROT-ORTHO-049',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #49',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO59.4',
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
    protocolId: 'PROT-ORTHO-050',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #50',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO60.5',
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
    protocolId: 'PROT-ORTHO-051',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #51',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO61.6',
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
    protocolId: 'PROT-ORTHO-052',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #52',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO62.7',
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
    protocolId: 'PROT-ORTHO-053',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #53',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO63.8',
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
    protocolId: 'PROT-ORTHO-054',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #54',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO64.0',
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
    protocolId: 'PROT-ORTHO-055',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #55',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO65.1',
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
    protocolId: 'PROT-ORTHO-056',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #56',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO66.2',
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
    protocolId: 'PROT-ORTHO-057',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #57',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO67.3',
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
    protocolId: 'PROT-ORTHO-058',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #58',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO68.4',
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
    protocolId: 'PROT-ORTHO-059',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #59',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO69.5',
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
    protocolId: 'PROT-ORTHO-060',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #60',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO70.6',
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
    protocolId: 'PROT-ORTHO-061',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #61',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO71.7',
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
    protocolId: 'PROT-ORTHO-062',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #62',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO72.8',
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
    protocolId: 'PROT-ORTHO-063',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #63',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO73.0',
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
    protocolId: 'PROT-ORTHO-064',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #64',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO74.1',
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
    protocolId: 'PROT-ORTHO-065',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #65',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO75.2',
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
    protocolId: 'PROT-ORTHO-066',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #66',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO76.3',
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
    protocolId: 'PROT-ORTHO-067',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #67',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO77.4',
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
    protocolId: 'PROT-ORTHO-068',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #68',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO78.5',
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
    protocolId: 'PROT-ORTHO-069',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #69',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO79.6',
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
    protocolId: 'PROT-ORTHO-070',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #70',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO80.7',
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
    protocolId: 'PROT-ORTHO-071',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #71',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO81.8',
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
    protocolId: 'PROT-ORTHO-072',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #72',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO82.0',
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
    protocolId: 'PROT-ORTHO-073',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #73',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO83.1',
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
    protocolId: 'PROT-ORTHO-074',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #74',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO84.2',
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
    protocolId: 'PROT-ORTHO-075',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #75',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO85.3',
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
    protocolId: 'PROT-ORTHO-076',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #76',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO86.4',
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
    protocolId: 'PROT-ORTHO-077',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #77',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO87.5',
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
    protocolId: 'PROT-ORTHO-078',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #78',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO88.6',
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
    protocolId: 'PROT-ORTHO-079',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #79',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO89.7',
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
    protocolId: 'PROT-ORTHO-080',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #80',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO90.8',
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
    protocolId: 'PROT-ORTHO-081',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #81',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO91.0',
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
    protocolId: 'PROT-ORTHO-082',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #82',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO92.1',
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
    protocolId: 'PROT-ORTHO-083',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #83',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO93.2',
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
    protocolId: 'PROT-ORTHO-084',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #84',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO94.3',
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
    protocolId: 'PROT-ORTHO-085',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #85',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO95.4',
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
    protocolId: 'PROT-ORTHO-086',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #86',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO96.5',
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
    protocolId: 'PROT-ORTHO-087',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #87',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO97.6',
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
    protocolId: 'PROT-ORTHO-088',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #88',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO98.7',
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
    protocolId: 'PROT-ORTHO-089',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #89',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO99.8',
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
    protocolId: 'PROT-ORTHO-090',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #90',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO10.0',
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
    protocolId: 'PROT-ORTHO-091',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #91',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO11.1',
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
    protocolId: 'PROT-ORTHO-092',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #92',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO12.2',
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
    protocolId: 'PROT-ORTHO-093',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #93',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO13.3',
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
    protocolId: 'PROT-ORTHO-094',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #94',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO14.4',
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
    protocolId: 'PROT-ORTHO-095',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #95',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO15.5',
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
    protocolId: 'PROT-ORTHO-096',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #96',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO16.6',
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
    protocolId: 'PROT-ORTHO-097',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #97',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO17.7',
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
    protocolId: 'PROT-ORTHO-098',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #98',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO18.8',
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
    protocolId: 'PROT-ORTHO-099',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #99',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO19.0',
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
    protocolId: 'PROT-ORTHO-100',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #100',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO20.1',
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
    protocolId: 'PROT-ORTHO-101',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #101',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO21.2',
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
    protocolId: 'PROT-ORTHO-102',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #102',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO22.3',
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
    protocolId: 'PROT-ORTHO-103',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #103',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO23.4',
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
    protocolId: 'PROT-ORTHO-104',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #104',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO24.5',
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
    protocolId: 'PROT-ORTHO-105',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #105',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO25.6',
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
    protocolId: 'PROT-ORTHO-106',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #106',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO26.7',
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
    protocolId: 'PROT-ORTHO-107',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #107',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO27.8',
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
    protocolId: 'PROT-ORTHO-108',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #108',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO28.0',
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
    protocolId: 'PROT-ORTHO-109',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #109',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO29.1',
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
    protocolId: 'PROT-ORTHO-110',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #110',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO30.2',
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
    protocolId: 'PROT-ORTHO-111',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #111',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO31.3',
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
    protocolId: 'PROT-ORTHO-112',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #112',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO32.4',
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
    protocolId: 'PROT-ORTHO-113',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #113',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO33.5',
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
    protocolId: 'PROT-ORTHO-114',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #114',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO34.6',
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
    protocolId: 'PROT-ORTHO-115',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #115',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO35.7',
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
    protocolId: 'PROT-ORTHO-116',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #116',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO36.8',
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
    protocolId: 'PROT-ORTHO-117',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #117',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO37.0',
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
    protocolId: 'PROT-ORTHO-118',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #118',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO38.1',
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
    protocolId: 'PROT-ORTHO-119',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #119',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO39.2',
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
    protocolId: 'PROT-ORTHO-120',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #120',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO40.3',
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
    protocolId: 'PROT-ORTHO-121',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #121',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO41.4',
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
    protocolId: 'PROT-ORTHO-122',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #122',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO42.5',
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
    protocolId: 'PROT-ORTHO-123',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #123',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO43.6',
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
    protocolId: 'PROT-ORTHO-124',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #124',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO44.7',
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
    protocolId: 'PROT-ORTHO-125',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #125',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO45.8',
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
    protocolId: 'PROT-ORTHO-126',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #126',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO46.0',
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
    protocolId: 'PROT-ORTHO-127',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #127',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO47.1',
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
    protocolId: 'PROT-ORTHO-128',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #128',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO48.2',
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
    protocolId: 'PROT-ORTHO-129',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #129',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO49.3',
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
    protocolId: 'PROT-ORTHO-130',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #130',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO50.4',
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
    protocolId: 'PROT-ORTHO-131',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #131',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO51.5',
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
    protocolId: 'PROT-ORTHO-132',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #132',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO52.6',
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
    protocolId: 'PROT-ORTHO-133',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #133',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO53.7',
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
    protocolId: 'PROT-ORTHO-134',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #134',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO54.8',
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
    protocolId: 'PROT-ORTHO-135',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #135',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO55.0',
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
    protocolId: 'PROT-ORTHO-136',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #136',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO56.1',
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
    protocolId: 'PROT-ORTHO-137',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #137',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO57.2',
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
    protocolId: 'PROT-ORTHO-138',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #138',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO58.3',
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
    protocolId: 'PROT-ORTHO-139',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #139',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO59.4',
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
    protocolId: 'PROT-ORTHO-140',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #140',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO60.5',
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
    protocolId: 'PROT-ORTHO-141',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #141',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO61.6',
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
    protocolId: 'PROT-ORTHO-142',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #142',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO62.7',
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
    protocolId: 'PROT-ORTHO-143',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #143',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO63.8',
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
    protocolId: 'PROT-ORTHO-144',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #144',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO64.0',
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
    protocolId: 'PROT-ORTHO-145',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #145',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO65.1',
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
    protocolId: 'PROT-ORTHO-146',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #146',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO66.2',
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
    protocolId: 'PROT-ORTHO-147',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #147',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO67.3',
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
    protocolId: 'PROT-ORTHO-148',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #148',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO68.4',
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
    protocolId: 'PROT-ORTHO-149',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #149',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO69.5',
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
    protocolId: 'PROT-ORTHO-150',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #150',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO70.6',
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
    protocolId: 'PROT-ORTHO-151',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #151',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO71.7',
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
    protocolId: 'PROT-ORTHO-152',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #152',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO72.8',
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
    protocolId: 'PROT-ORTHO-153',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #153',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO73.0',
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
    protocolId: 'PROT-ORTHO-154',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #154',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO74.1',
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
    protocolId: 'PROT-ORTHO-155',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #155',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO75.2',
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
    protocolId: 'PROT-ORTHO-156',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #156',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO76.3',
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
    protocolId: 'PROT-ORTHO-157',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #157',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO77.4',
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
    protocolId: 'PROT-ORTHO-158',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #158',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO78.5',
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
    protocolId: 'PROT-ORTHO-159',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #159',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO79.6',
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
    protocolId: 'PROT-ORTHO-160',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #160',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO80.7',
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
    protocolId: 'PROT-ORTHO-161',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #161',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO81.8',
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
    protocolId: 'PROT-ORTHO-162',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #162',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO82.0',
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
    protocolId: 'PROT-ORTHO-163',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #163',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO83.1',
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
    protocolId: 'PROT-ORTHO-164',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #164',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO84.2',
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
    protocolId: 'PROT-ORTHO-165',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #165',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO85.3',
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
    protocolId: 'PROT-ORTHO-166',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #166',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO86.4',
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
    protocolId: 'PROT-ORTHO-167',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #167',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO87.5',
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
    protocolId: 'PROT-ORTHO-168',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #168',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO88.6',
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
    protocolId: 'PROT-ORTHO-169',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #169',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO89.7',
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
    protocolId: 'PROT-ORTHO-170',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #170',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO90.8',
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
    protocolId: 'PROT-ORTHO-171',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #171',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO91.0',
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
    protocolId: 'PROT-ORTHO-172',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #172',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO92.1',
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
    protocolId: 'PROT-ORTHO-173',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #173',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO93.2',
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
    protocolId: 'PROT-ORTHO-174',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #174',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO94.3',
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
    protocolId: 'PROT-ORTHO-175',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #175',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO95.4',
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
    protocolId: 'PROT-ORTHO-176',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #176',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO96.5',
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
    protocolId: 'PROT-ORTHO-177',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #177',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO97.6',
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
    protocolId: 'PROT-ORTHO-178',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #178',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO98.7',
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
    protocolId: 'PROT-ORTHO-179',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #179',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO99.8',
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
    protocolId: 'PROT-ORTHO-180',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #180',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO10.0',
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
    protocolId: 'PROT-ORTHO-181',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #181',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO11.1',
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
    protocolId: 'PROT-ORTHO-182',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #182',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO12.2',
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
    protocolId: 'PROT-ORTHO-183',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #183',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO13.3',
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
    protocolId: 'PROT-ORTHO-184',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #184',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO14.4',
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
    protocolId: 'PROT-ORTHO-185',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #185',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO15.5',
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
    protocolId: 'PROT-ORTHO-186',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #186',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO16.6',
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
    protocolId: 'PROT-ORTHO-187',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #187',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO17.7',
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
    protocolId: 'PROT-ORTHO-188',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #188',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO18.8',
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
    protocolId: 'PROT-ORTHO-189',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #189',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO19.0',
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
    protocolId: 'PROT-ORTHO-190',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #190',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO20.1',
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
    protocolId: 'PROT-ORTHO-191',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #191',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO21.2',
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
    protocolId: 'PROT-ORTHO-192',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #192',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO22.3',
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
    protocolId: 'PROT-ORTHO-193',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #193',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO23.4',
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
    protocolId: 'PROT-ORTHO-194',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #194',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO24.5',
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
    protocolId: 'PROT-ORTHO-195',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #195',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO25.6',
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
    protocolId: 'PROT-ORTHO-196',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #196',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO26.7',
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
    protocolId: 'PROT-ORTHO-197',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #197',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO27.8',
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
    protocolId: 'PROT-ORTHO-198',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #198',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO28.0',
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
    protocolId: 'PROT-ORTHO-199',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #199',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO29.1',
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
    protocolId: 'PROT-ORTHO-200',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #200',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO30.2',
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
    protocolId: 'PROT-ORTHO-201',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #201',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO31.3',
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
    protocolId: 'PROT-ORTHO-202',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #202',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO32.4',
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
    protocolId: 'PROT-ORTHO-203',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #203',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO33.5',
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
    protocolId: 'PROT-ORTHO-204',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #204',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO34.6',
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
    protocolId: 'PROT-ORTHO-205',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #205',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO35.7',
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
    protocolId: 'PROT-ORTHO-206',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #206',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO36.8',
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
    protocolId: 'PROT-ORTHO-207',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #207',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO37.0',
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
    protocolId: 'PROT-ORTHO-208',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #208',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO38.1',
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
    protocolId: 'PROT-ORTHO-209',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #209',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO39.2',
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
    protocolId: 'PROT-ORTHO-210',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #210',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO40.3',
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
    protocolId: 'PROT-ORTHO-211',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #211',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO41.4',
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
    protocolId: 'PROT-ORTHO-212',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #212',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO42.5',
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
    protocolId: 'PROT-ORTHO-213',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #213',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO43.6',
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
    protocolId: 'PROT-ORTHO-214',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #214',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO44.7',
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
    protocolId: 'PROT-ORTHO-215',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #215',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO45.8',
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
    protocolId: 'PROT-ORTHO-216',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #216',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO46.0',
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
    protocolId: 'PROT-ORTHO-217',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #217',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO47.1',
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
    protocolId: 'PROT-ORTHO-218',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #218',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO48.2',
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
    protocolId: 'PROT-ORTHO-219',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #219',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO49.3',
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
    protocolId: 'PROT-ORTHO-220',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #220',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO50.4',
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
    protocolId: 'PROT-ORTHO-221',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #221',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO51.5',
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
    protocolId: 'PROT-ORTHO-222',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #222',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO52.6',
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
    protocolId: 'PROT-ORTHO-223',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #223',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO53.7',
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
    protocolId: 'PROT-ORTHO-224',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #224',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO54.8',
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
    protocolId: 'PROT-ORTHO-225',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #225',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO55.0',
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
    protocolId: 'PROT-ORTHO-226',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #226',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO56.1',
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
    protocolId: 'PROT-ORTHO-227',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #227',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO57.2',
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
    protocolId: 'PROT-ORTHO-228',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #228',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO58.3',
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
    protocolId: 'PROT-ORTHO-229',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #229',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO59.4',
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
    protocolId: 'PROT-ORTHO-230',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #230',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO60.5',
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
    protocolId: 'PROT-ORTHO-231',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #231',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO61.6',
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
    protocolId: 'PROT-ORTHO-232',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #232',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO62.7',
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
    protocolId: 'PROT-ORTHO-233',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #233',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO63.8',
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
    protocolId: 'PROT-ORTHO-234',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #234',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO64.0',
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
    protocolId: 'PROT-ORTHO-235',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #235',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO65.1',
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
    protocolId: 'PROT-ORTHO-236',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #236',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO66.2',
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
    protocolId: 'PROT-ORTHO-237',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #237',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO67.3',
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
    protocolId: 'PROT-ORTHO-238',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #238',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO68.4',
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
    protocolId: 'PROT-ORTHO-239',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #239',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO69.5',
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
    protocolId: 'PROT-ORTHO-240',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #240',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO70.6',
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
    protocolId: 'PROT-ORTHO-241',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #241',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO71.7',
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
    protocolId: 'PROT-ORTHO-242',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #242',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO72.8',
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
    protocolId: 'PROT-ORTHO-243',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #243',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO73.0',
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
    protocolId: 'PROT-ORTHO-244',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #244',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO74.1',
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
    protocolId: 'PROT-ORTHO-245',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #245',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO75.2',
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
    protocolId: 'PROT-ORTHO-246',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #246',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO76.3',
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
    protocolId: 'PROT-ORTHO-247',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #247',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO77.4',
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
    protocolId: 'PROT-ORTHO-248',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #248',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO78.5',
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
    protocolId: 'PROT-ORTHO-249',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #249',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO79.6',
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
    protocolId: 'PROT-ORTHO-250',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #250',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO80.7',
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
    protocolId: 'PROT-ORTHO-251',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #251',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO81.8',
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
    protocolId: 'PROT-ORTHO-252',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #252',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO82.0',
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
    protocolId: 'PROT-ORTHO-253',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #253',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO83.1',
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
    protocolId: 'PROT-ORTHO-254',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #254',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO84.2',
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
    protocolId: 'PROT-ORTHO-255',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #255',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO85.3',
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
    protocolId: 'PROT-ORTHO-256',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #256',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO86.4',
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
    protocolId: 'PROT-ORTHO-257',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #257',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO87.5',
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
    protocolId: 'PROT-ORTHO-258',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #258',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO88.6',
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
    protocolId: 'PROT-ORTHO-259',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #259',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO89.7',
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
    protocolId: 'PROT-ORTHO-260',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #260',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO90.8',
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
    protocolId: 'PROT-ORTHO-261',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #261',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO91.0',
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
    protocolId: 'PROT-ORTHO-262',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #262',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO92.1',
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
    protocolId: 'PROT-ORTHO-263',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #263',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO93.2',
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
    protocolId: 'PROT-ORTHO-264',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #264',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO94.3',
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
    protocolId: 'PROT-ORTHO-265',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #265',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO95.4',
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
    protocolId: 'PROT-ORTHO-266',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #266',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO96.5',
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
    protocolId: 'PROT-ORTHO-267',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #267',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO97.6',
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
    protocolId: 'PROT-ORTHO-268',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #268',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO98.7',
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
    protocolId: 'PROT-ORTHO-269',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #269',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO99.8',
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
    protocolId: 'PROT-ORTHO-270',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #270',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO10.0',
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
    protocolId: 'PROT-ORTHO-271',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #271',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO11.1',
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
    protocolId: 'PROT-ORTHO-272',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #272',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO12.2',
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
    protocolId: 'PROT-ORTHO-273',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #273',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO13.3',
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
    protocolId: 'PROT-ORTHO-274',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #274',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO14.4',
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
    protocolId: 'PROT-ORTHO-275',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #275',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO15.5',
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
    protocolId: 'PROT-ORTHO-276',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #276',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO16.6',
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
    protocolId: 'PROT-ORTHO-277',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #277',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO17.7',
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
    protocolId: 'PROT-ORTHO-278',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #278',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO18.8',
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
    protocolId: 'PROT-ORTHO-279',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #279',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO19.0',
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
    protocolId: 'PROT-ORTHO-280',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #280',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO20.1',
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
    protocolId: 'PROT-ORTHO-281',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #281',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO21.2',
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
    protocolId: 'PROT-ORTHO-282',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #282',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO22.3',
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
    protocolId: 'PROT-ORTHO-283',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #283',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO23.4',
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
    protocolId: 'PROT-ORTHO-284',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #284',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO24.5',
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
    protocolId: 'PROT-ORTHO-285',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #285',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO25.6',
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
    protocolId: 'PROT-ORTHO-286',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #286',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO26.7',
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
    protocolId: 'PROT-ORTHO-287',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #287',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO27.8',
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
    protocolId: 'PROT-ORTHO-288',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #288',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO28.0',
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
    protocolId: 'PROT-ORTHO-289',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #289',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO29.1',
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
    protocolId: 'PROT-ORTHO-290',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #290',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO30.2',
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
    protocolId: 'PROT-ORTHO-291',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #291',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO31.3',
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
    protocolId: 'PROT-ORTHO-292',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #292',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO32.4',
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
    protocolId: 'PROT-ORTHO-293',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #293',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO33.5',
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
    protocolId: 'PROT-ORTHO-294',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #294',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO34.6',
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
    protocolId: 'PROT-ORTHO-295',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #295',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO35.7',
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
    protocolId: 'PROT-ORTHO-296',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #296',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO36.8',
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
    protocolId: 'PROT-ORTHO-297',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #297',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO37.0',
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
    protocolId: 'PROT-ORTHO-298',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #298',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO38.1',
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
    protocolId: 'PROT-ORTHO-299',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #299',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO39.2',
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
    protocolId: 'PROT-ORTHO-300',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #300',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO40.3',
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
    protocolId: 'PROT-ORTHO-301',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #301',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO41.4',
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
    protocolId: 'PROT-ORTHO-302',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #302',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO42.5',
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
    protocolId: 'PROT-ORTHO-303',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #303',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO43.6',
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
    protocolId: 'PROT-ORTHO-304',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #304',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO44.7',
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
    protocolId: 'PROT-ORTHO-305',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #305',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO45.8',
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
    protocolId: 'PROT-ORTHO-306',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #306',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO46.0',
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
    protocolId: 'PROT-ORTHO-307',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #307',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO47.1',
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
    protocolId: 'PROT-ORTHO-308',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #308',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO48.2',
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
    protocolId: 'PROT-ORTHO-309',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #309',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO49.3',
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
    protocolId: 'PROT-ORTHO-310',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #310',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO50.4',
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
    protocolId: 'PROT-ORTHO-311',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #311',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO51.5',
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
    protocolId: 'PROT-ORTHO-312',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #312',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO52.6',
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
    protocolId: 'PROT-ORTHO-313',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #313',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO53.7',
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
    protocolId: 'PROT-ORTHO-314',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #314',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO54.8',
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
    protocolId: 'PROT-ORTHO-315',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #315',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO55.0',
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
    protocolId: 'PROT-ORTHO-316',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #316',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO56.1',
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
    protocolId: 'PROT-ORTHO-317',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #317',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO57.2',
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
    protocolId: 'PROT-ORTHO-318',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #318',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO58.3',
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
    protocolId: 'PROT-ORTHO-319',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #319',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO59.4',
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
    protocolId: 'PROT-ORTHO-320',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #320',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO60.5',
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
    protocolId: 'PROT-ORTHO-321',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #321',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO61.6',
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
    protocolId: 'PROT-ORTHO-322',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #322',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO62.7',
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
    protocolId: 'PROT-ORTHO-323',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #323',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO63.8',
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
    protocolId: 'PROT-ORTHO-324',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #324',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO64.0',
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
    protocolId: 'PROT-ORTHO-325',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #325',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO65.1',
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
    protocolId: 'PROT-ORTHO-326',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #326',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO66.2',
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
    protocolId: 'PROT-ORTHO-327',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #327',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO67.3',
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
    protocolId: 'PROT-ORTHO-328',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #328',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO68.4',
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
    protocolId: 'PROT-ORTHO-329',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #329',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO69.5',
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
    protocolId: 'PROT-ORTHO-330',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #330',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO70.6',
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
    protocolId: 'PROT-ORTHO-331',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #331',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO71.7',
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
    protocolId: 'PROT-ORTHO-332',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #332',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO72.8',
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
    protocolId: 'PROT-ORTHO-333',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #333',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO73.0',
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
    protocolId: 'PROT-ORTHO-334',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #334',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO74.1',
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
    protocolId: 'PROT-ORTHO-335',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #335',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO75.2',
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
    protocolId: 'PROT-ORTHO-336',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #336',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO76.3',
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
    protocolId: 'PROT-ORTHO-337',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #337',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO77.4',
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
    protocolId: 'PROT-ORTHO-338',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #338',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO78.5',
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
    protocolId: 'PROT-ORTHO-339',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #339',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO79.6',
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
    protocolId: 'PROT-ORTHO-340',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #340',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO80.7',
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
    protocolId: 'PROT-ORTHO-341',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #341',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO81.8',
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
    protocolId: 'PROT-ORTHO-342',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #342',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO82.0',
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
    protocolId: 'PROT-ORTHO-343',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #343',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO83.1',
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
    protocolId: 'PROT-ORTHO-344',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #344',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO84.2',
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
    protocolId: 'PROT-ORTHO-345',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #345',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO85.3',
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
    protocolId: 'PROT-ORTHO-346',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #346',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO86.4',
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
    protocolId: 'PROT-ORTHO-347',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #347',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO87.5',
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
    protocolId: 'PROT-ORTHO-348',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #348',
    domain: 'OrthopedicSurgeryOntology',
    category: 'AO/OTA fracture classifications',
    icd10Code: 'ORTHO88.6',
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
    protocolId: 'PROT-ORTHO-349',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #349',
    domain: 'OrthopedicSurgeryOntology',
    category: 'total joint replacement post-op protocols',
    icd10Code: 'ORTHO89.7',
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
    protocolId: 'PROT-ORTHO-350',
    title: 'OrthopedicSurgeryOntology Clinical Protocol #350',
    domain: 'OrthopedicSurgeryOntology',
    category: 'and spine fusion indices',
    icd10Code: 'ORTHO90.8',
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

export class ORTHO_ProtocolCatalog {
  static search(query: string): ClinicalProtocolSpec[] {
    const q = query.toLowerCase().trim();
    if (!q) return PROTOCOL_ORTHO_DATASET.slice(0, 20);
    return PROTOCOL_ORTHO_DATASET.filter(p => p.title.toLowerCase().includes(q) || p.icd10Code.toLowerCase().includes(q));
  }
}
