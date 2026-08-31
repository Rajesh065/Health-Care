/**
 * Clinical Protocol Specification: InfectiousDiseaseSepsisOntology
 * Medical Specialization: SOFA sepsis score calculations, antibiogram susceptibility tables, and viral hepatitis treatment algorithms
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

export const PROTOCOL_INF_DATASET: ClinicalProtocolSpec[] = [
  {
    protocolId: 'PROT-INF-001',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #1',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF11.1',
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
    protocolId: 'PROT-INF-002',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #2',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF12.2',
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
    protocolId: 'PROT-INF-003',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #3',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF13.3',
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
    protocolId: 'PROT-INF-004',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #4',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF14.4',
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
    protocolId: 'PROT-INF-005',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #5',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF15.5',
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
    protocolId: 'PROT-INF-006',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #6',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF16.6',
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
    protocolId: 'PROT-INF-007',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #7',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF17.7',
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
    protocolId: 'PROT-INF-008',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #8',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF18.8',
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
    protocolId: 'PROT-INF-009',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #9',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF19.0',
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
    protocolId: 'PROT-INF-010',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #10',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF20.1',
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
    protocolId: 'PROT-INF-011',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #11',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF21.2',
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
    protocolId: 'PROT-INF-012',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #12',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF22.3',
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
    protocolId: 'PROT-INF-013',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #13',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF23.4',
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
    protocolId: 'PROT-INF-014',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #14',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF24.5',
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
    protocolId: 'PROT-INF-015',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #15',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF25.6',
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
    protocolId: 'PROT-INF-016',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #16',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF26.7',
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
    protocolId: 'PROT-INF-017',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #17',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF27.8',
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
    protocolId: 'PROT-INF-018',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #18',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF28.0',
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
    protocolId: 'PROT-INF-019',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #19',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF29.1',
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
    protocolId: 'PROT-INF-020',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #20',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF30.2',
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
    protocolId: 'PROT-INF-021',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #21',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF31.3',
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
    protocolId: 'PROT-INF-022',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #22',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF32.4',
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
    protocolId: 'PROT-INF-023',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #23',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF33.5',
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
    protocolId: 'PROT-INF-024',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #24',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF34.6',
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
    protocolId: 'PROT-INF-025',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #25',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF35.7',
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
    protocolId: 'PROT-INF-026',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #26',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF36.8',
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
    protocolId: 'PROT-INF-027',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #27',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF37.0',
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
    protocolId: 'PROT-INF-028',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #28',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF38.1',
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
    protocolId: 'PROT-INF-029',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #29',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF39.2',
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
    protocolId: 'PROT-INF-030',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #30',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF40.3',
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
    protocolId: 'PROT-INF-031',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #31',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF41.4',
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
    protocolId: 'PROT-INF-032',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #32',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF42.5',
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
    protocolId: 'PROT-INF-033',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #33',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF43.6',
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
    protocolId: 'PROT-INF-034',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #34',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF44.7',
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
    protocolId: 'PROT-INF-035',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #35',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF45.8',
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
    protocolId: 'PROT-INF-036',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #36',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF46.0',
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
    protocolId: 'PROT-INF-037',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #37',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF47.1',
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
    protocolId: 'PROT-INF-038',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #38',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF48.2',
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
    protocolId: 'PROT-INF-039',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #39',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF49.3',
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
    protocolId: 'PROT-INF-040',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #40',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF50.4',
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
    protocolId: 'PROT-INF-041',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #41',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF51.5',
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
    protocolId: 'PROT-INF-042',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #42',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF52.6',
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
    protocolId: 'PROT-INF-043',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #43',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF53.7',
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
    protocolId: 'PROT-INF-044',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #44',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF54.8',
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
    protocolId: 'PROT-INF-045',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #45',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF55.0',
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
    protocolId: 'PROT-INF-046',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #46',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF56.1',
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
    protocolId: 'PROT-INF-047',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #47',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF57.2',
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
    protocolId: 'PROT-INF-048',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #48',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF58.3',
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
    protocolId: 'PROT-INF-049',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #49',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF59.4',
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
    protocolId: 'PROT-INF-050',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #50',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF60.5',
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
    protocolId: 'PROT-INF-051',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #51',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF61.6',
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
    protocolId: 'PROT-INF-052',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #52',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF62.7',
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
    protocolId: 'PROT-INF-053',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #53',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF63.8',
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
    protocolId: 'PROT-INF-054',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #54',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF64.0',
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
    protocolId: 'PROT-INF-055',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #55',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF65.1',
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
    protocolId: 'PROT-INF-056',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #56',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF66.2',
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
    protocolId: 'PROT-INF-057',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #57',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF67.3',
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
    protocolId: 'PROT-INF-058',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #58',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF68.4',
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
    protocolId: 'PROT-INF-059',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #59',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF69.5',
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
    protocolId: 'PROT-INF-060',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #60',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF70.6',
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
    protocolId: 'PROT-INF-061',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #61',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF71.7',
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
    protocolId: 'PROT-INF-062',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #62',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF72.8',
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
    protocolId: 'PROT-INF-063',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #63',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF73.0',
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
    protocolId: 'PROT-INF-064',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #64',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF74.1',
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
    protocolId: 'PROT-INF-065',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #65',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF75.2',
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
    protocolId: 'PROT-INF-066',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #66',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF76.3',
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
    protocolId: 'PROT-INF-067',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #67',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF77.4',
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
    protocolId: 'PROT-INF-068',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #68',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF78.5',
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
    protocolId: 'PROT-INF-069',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #69',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF79.6',
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
    protocolId: 'PROT-INF-070',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #70',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF80.7',
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
    protocolId: 'PROT-INF-071',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #71',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF81.8',
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
    protocolId: 'PROT-INF-072',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #72',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF82.0',
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
    protocolId: 'PROT-INF-073',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #73',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF83.1',
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
    protocolId: 'PROT-INF-074',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #74',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF84.2',
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
    protocolId: 'PROT-INF-075',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #75',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF85.3',
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
    protocolId: 'PROT-INF-076',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #76',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF86.4',
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
    protocolId: 'PROT-INF-077',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #77',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF87.5',
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
    protocolId: 'PROT-INF-078',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #78',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF88.6',
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
    protocolId: 'PROT-INF-079',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #79',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF89.7',
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
    protocolId: 'PROT-INF-080',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #80',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF90.8',
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
    protocolId: 'PROT-INF-081',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #81',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF91.0',
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
    protocolId: 'PROT-INF-082',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #82',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF92.1',
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
    protocolId: 'PROT-INF-083',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #83',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF93.2',
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
    protocolId: 'PROT-INF-084',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #84',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF94.3',
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
    protocolId: 'PROT-INF-085',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #85',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF95.4',
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
    protocolId: 'PROT-INF-086',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #86',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF96.5',
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
    protocolId: 'PROT-INF-087',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #87',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF97.6',
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
    protocolId: 'PROT-INF-088',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #88',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF98.7',
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
    protocolId: 'PROT-INF-089',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #89',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF99.8',
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
    protocolId: 'PROT-INF-090',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #90',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF10.0',
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
    protocolId: 'PROT-INF-091',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #91',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF11.1',
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
    protocolId: 'PROT-INF-092',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #92',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF12.2',
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
    protocolId: 'PROT-INF-093',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #93',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF13.3',
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
    protocolId: 'PROT-INF-094',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #94',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF14.4',
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
    protocolId: 'PROT-INF-095',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #95',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF15.5',
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
    protocolId: 'PROT-INF-096',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #96',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF16.6',
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
    protocolId: 'PROT-INF-097',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #97',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF17.7',
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
    protocolId: 'PROT-INF-098',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #98',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF18.8',
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
    protocolId: 'PROT-INF-099',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #99',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF19.0',
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
    protocolId: 'PROT-INF-100',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #100',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF20.1',
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
    protocolId: 'PROT-INF-101',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #101',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF21.2',
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
    protocolId: 'PROT-INF-102',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #102',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF22.3',
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
    protocolId: 'PROT-INF-103',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #103',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF23.4',
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
    protocolId: 'PROT-INF-104',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #104',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF24.5',
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
    protocolId: 'PROT-INF-105',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #105',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF25.6',
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
    protocolId: 'PROT-INF-106',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #106',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF26.7',
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
    protocolId: 'PROT-INF-107',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #107',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF27.8',
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
    protocolId: 'PROT-INF-108',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #108',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF28.0',
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
    protocolId: 'PROT-INF-109',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #109',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF29.1',
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
    protocolId: 'PROT-INF-110',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #110',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF30.2',
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
    protocolId: 'PROT-INF-111',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #111',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF31.3',
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
    protocolId: 'PROT-INF-112',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #112',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF32.4',
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
    protocolId: 'PROT-INF-113',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #113',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF33.5',
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
    protocolId: 'PROT-INF-114',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #114',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF34.6',
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
    protocolId: 'PROT-INF-115',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #115',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF35.7',
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
    protocolId: 'PROT-INF-116',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #116',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF36.8',
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
    protocolId: 'PROT-INF-117',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #117',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF37.0',
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
    protocolId: 'PROT-INF-118',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #118',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF38.1',
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
    protocolId: 'PROT-INF-119',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #119',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF39.2',
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
    protocolId: 'PROT-INF-120',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #120',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF40.3',
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
    protocolId: 'PROT-INF-121',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #121',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF41.4',
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
    protocolId: 'PROT-INF-122',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #122',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF42.5',
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
    protocolId: 'PROT-INF-123',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #123',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF43.6',
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
    protocolId: 'PROT-INF-124',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #124',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF44.7',
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
    protocolId: 'PROT-INF-125',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #125',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF45.8',
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
    protocolId: 'PROT-INF-126',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #126',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF46.0',
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
    protocolId: 'PROT-INF-127',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #127',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF47.1',
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
    protocolId: 'PROT-INF-128',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #128',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF48.2',
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
    protocolId: 'PROT-INF-129',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #129',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF49.3',
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
    protocolId: 'PROT-INF-130',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #130',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF50.4',
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
    protocolId: 'PROT-INF-131',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #131',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF51.5',
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
    protocolId: 'PROT-INF-132',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #132',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF52.6',
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
    protocolId: 'PROT-INF-133',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #133',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF53.7',
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
    protocolId: 'PROT-INF-134',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #134',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF54.8',
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
    protocolId: 'PROT-INF-135',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #135',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF55.0',
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
    protocolId: 'PROT-INF-136',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #136',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF56.1',
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
    protocolId: 'PROT-INF-137',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #137',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF57.2',
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
    protocolId: 'PROT-INF-138',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #138',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF58.3',
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
    protocolId: 'PROT-INF-139',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #139',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF59.4',
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
    protocolId: 'PROT-INF-140',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #140',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF60.5',
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
    protocolId: 'PROT-INF-141',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #141',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF61.6',
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
    protocolId: 'PROT-INF-142',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #142',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF62.7',
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
    protocolId: 'PROT-INF-143',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #143',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF63.8',
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
    protocolId: 'PROT-INF-144',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #144',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF64.0',
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
    protocolId: 'PROT-INF-145',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #145',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF65.1',
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
    protocolId: 'PROT-INF-146',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #146',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF66.2',
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
    protocolId: 'PROT-INF-147',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #147',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF67.3',
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
    protocolId: 'PROT-INF-148',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #148',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF68.4',
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
    protocolId: 'PROT-INF-149',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #149',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF69.5',
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
    protocolId: 'PROT-INF-150',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #150',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF70.6',
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
    protocolId: 'PROT-INF-151',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #151',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF71.7',
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
    protocolId: 'PROT-INF-152',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #152',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF72.8',
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
    protocolId: 'PROT-INF-153',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #153',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF73.0',
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
    protocolId: 'PROT-INF-154',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #154',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF74.1',
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
    protocolId: 'PROT-INF-155',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #155',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF75.2',
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
    protocolId: 'PROT-INF-156',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #156',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF76.3',
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
    protocolId: 'PROT-INF-157',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #157',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF77.4',
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
    protocolId: 'PROT-INF-158',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #158',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF78.5',
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
    protocolId: 'PROT-INF-159',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #159',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF79.6',
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
    protocolId: 'PROT-INF-160',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #160',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF80.7',
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
    protocolId: 'PROT-INF-161',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #161',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF81.8',
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
    protocolId: 'PROT-INF-162',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #162',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF82.0',
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
    protocolId: 'PROT-INF-163',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #163',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF83.1',
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
    protocolId: 'PROT-INF-164',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #164',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF84.2',
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
    protocolId: 'PROT-INF-165',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #165',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF85.3',
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
    protocolId: 'PROT-INF-166',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #166',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF86.4',
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
    protocolId: 'PROT-INF-167',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #167',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF87.5',
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
    protocolId: 'PROT-INF-168',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #168',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF88.6',
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
    protocolId: 'PROT-INF-169',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #169',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF89.7',
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
    protocolId: 'PROT-INF-170',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #170',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF90.8',
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
    protocolId: 'PROT-INF-171',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #171',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF91.0',
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
    protocolId: 'PROT-INF-172',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #172',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF92.1',
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
    protocolId: 'PROT-INF-173',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #173',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF93.2',
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
    protocolId: 'PROT-INF-174',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #174',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF94.3',
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
    protocolId: 'PROT-INF-175',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #175',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF95.4',
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
    protocolId: 'PROT-INF-176',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #176',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF96.5',
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
    protocolId: 'PROT-INF-177',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #177',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF97.6',
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
    protocolId: 'PROT-INF-178',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #178',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF98.7',
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
    protocolId: 'PROT-INF-179',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #179',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF99.8',
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
    protocolId: 'PROT-INF-180',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #180',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF10.0',
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
    protocolId: 'PROT-INF-181',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #181',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF11.1',
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
    protocolId: 'PROT-INF-182',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #182',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF12.2',
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
    protocolId: 'PROT-INF-183',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #183',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF13.3',
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
    protocolId: 'PROT-INF-184',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #184',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF14.4',
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
    protocolId: 'PROT-INF-185',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #185',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF15.5',
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
    protocolId: 'PROT-INF-186',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #186',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF16.6',
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
    protocolId: 'PROT-INF-187',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #187',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF17.7',
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
    protocolId: 'PROT-INF-188',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #188',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF18.8',
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
    protocolId: 'PROT-INF-189',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #189',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF19.0',
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
    protocolId: 'PROT-INF-190',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #190',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF20.1',
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
    protocolId: 'PROT-INF-191',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #191',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF21.2',
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
    protocolId: 'PROT-INF-192',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #192',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF22.3',
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
    protocolId: 'PROT-INF-193',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #193',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF23.4',
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
    protocolId: 'PROT-INF-194',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #194',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF24.5',
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
    protocolId: 'PROT-INF-195',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #195',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF25.6',
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
    protocolId: 'PROT-INF-196',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #196',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF26.7',
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
    protocolId: 'PROT-INF-197',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #197',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF27.8',
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
    protocolId: 'PROT-INF-198',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #198',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF28.0',
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
    protocolId: 'PROT-INF-199',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #199',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF29.1',
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
    protocolId: 'PROT-INF-200',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #200',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF30.2',
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
    protocolId: 'PROT-INF-201',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #201',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF31.3',
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
    protocolId: 'PROT-INF-202',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #202',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF32.4',
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
    protocolId: 'PROT-INF-203',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #203',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF33.5',
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
    protocolId: 'PROT-INF-204',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #204',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF34.6',
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
    protocolId: 'PROT-INF-205',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #205',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF35.7',
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
    protocolId: 'PROT-INF-206',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #206',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF36.8',
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
    protocolId: 'PROT-INF-207',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #207',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF37.0',
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
    protocolId: 'PROT-INF-208',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #208',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF38.1',
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
    protocolId: 'PROT-INF-209',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #209',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF39.2',
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
    protocolId: 'PROT-INF-210',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #210',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF40.3',
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
    protocolId: 'PROT-INF-211',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #211',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF41.4',
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
    protocolId: 'PROT-INF-212',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #212',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF42.5',
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
    protocolId: 'PROT-INF-213',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #213',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF43.6',
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
    protocolId: 'PROT-INF-214',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #214',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF44.7',
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
    protocolId: 'PROT-INF-215',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #215',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF45.8',
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
    protocolId: 'PROT-INF-216',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #216',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF46.0',
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
    protocolId: 'PROT-INF-217',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #217',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF47.1',
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
    protocolId: 'PROT-INF-218',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #218',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF48.2',
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
    protocolId: 'PROT-INF-219',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #219',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF49.3',
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
    protocolId: 'PROT-INF-220',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #220',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF50.4',
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
    protocolId: 'PROT-INF-221',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #221',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF51.5',
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
    protocolId: 'PROT-INF-222',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #222',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF52.6',
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
    protocolId: 'PROT-INF-223',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #223',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF53.7',
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
    protocolId: 'PROT-INF-224',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #224',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF54.8',
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
    protocolId: 'PROT-INF-225',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #225',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF55.0',
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
    protocolId: 'PROT-INF-226',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #226',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF56.1',
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
    protocolId: 'PROT-INF-227',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #227',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF57.2',
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
    protocolId: 'PROT-INF-228',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #228',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF58.3',
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
    protocolId: 'PROT-INF-229',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #229',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF59.4',
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
    protocolId: 'PROT-INF-230',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #230',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF60.5',
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
    protocolId: 'PROT-INF-231',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #231',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF61.6',
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
    protocolId: 'PROT-INF-232',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #232',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF62.7',
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
    protocolId: 'PROT-INF-233',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #233',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF63.8',
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
    protocolId: 'PROT-INF-234',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #234',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF64.0',
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
    protocolId: 'PROT-INF-235',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #235',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF65.1',
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
    protocolId: 'PROT-INF-236',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #236',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF66.2',
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
    protocolId: 'PROT-INF-237',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #237',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF67.3',
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
    protocolId: 'PROT-INF-238',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #238',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF68.4',
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
    protocolId: 'PROT-INF-239',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #239',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF69.5',
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
    protocolId: 'PROT-INF-240',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #240',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF70.6',
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
    protocolId: 'PROT-INF-241',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #241',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF71.7',
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
    protocolId: 'PROT-INF-242',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #242',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF72.8',
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
    protocolId: 'PROT-INF-243',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #243',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF73.0',
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
    protocolId: 'PROT-INF-244',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #244',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF74.1',
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
    protocolId: 'PROT-INF-245',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #245',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF75.2',
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
    protocolId: 'PROT-INF-246',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #246',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF76.3',
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
    protocolId: 'PROT-INF-247',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #247',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF77.4',
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
    protocolId: 'PROT-INF-248',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #248',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF78.5',
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
    protocolId: 'PROT-INF-249',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #249',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF79.6',
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
    protocolId: 'PROT-INF-250',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #250',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF80.7',
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
    protocolId: 'PROT-INF-251',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #251',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF81.8',
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
    protocolId: 'PROT-INF-252',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #252',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF82.0',
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
    protocolId: 'PROT-INF-253',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #253',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF83.1',
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
    protocolId: 'PROT-INF-254',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #254',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF84.2',
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
    protocolId: 'PROT-INF-255',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #255',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF85.3',
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
    protocolId: 'PROT-INF-256',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #256',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF86.4',
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
    protocolId: 'PROT-INF-257',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #257',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF87.5',
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
    protocolId: 'PROT-INF-258',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #258',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF88.6',
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
    protocolId: 'PROT-INF-259',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #259',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF89.7',
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
    protocolId: 'PROT-INF-260',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #260',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF90.8',
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
    protocolId: 'PROT-INF-261',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #261',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF91.0',
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
    protocolId: 'PROT-INF-262',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #262',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF92.1',
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
    protocolId: 'PROT-INF-263',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #263',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF93.2',
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
    protocolId: 'PROT-INF-264',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #264',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF94.3',
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
    protocolId: 'PROT-INF-265',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #265',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF95.4',
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
    protocolId: 'PROT-INF-266',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #266',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF96.5',
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
    protocolId: 'PROT-INF-267',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #267',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF97.6',
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
    protocolId: 'PROT-INF-268',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #268',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF98.7',
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
    protocolId: 'PROT-INF-269',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #269',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF99.8',
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
    protocolId: 'PROT-INF-270',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #270',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF10.0',
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
    protocolId: 'PROT-INF-271',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #271',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF11.1',
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
    protocolId: 'PROT-INF-272',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #272',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF12.2',
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
    protocolId: 'PROT-INF-273',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #273',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF13.3',
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
    protocolId: 'PROT-INF-274',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #274',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF14.4',
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
    protocolId: 'PROT-INF-275',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #275',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF15.5',
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
    protocolId: 'PROT-INF-276',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #276',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF16.6',
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
    protocolId: 'PROT-INF-277',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #277',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF17.7',
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
    protocolId: 'PROT-INF-278',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #278',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF18.8',
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
    protocolId: 'PROT-INF-279',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #279',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF19.0',
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
    protocolId: 'PROT-INF-280',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #280',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF20.1',
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
    protocolId: 'PROT-INF-281',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #281',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF21.2',
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
    protocolId: 'PROT-INF-282',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #282',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF22.3',
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
    protocolId: 'PROT-INF-283',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #283',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF23.4',
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
    protocolId: 'PROT-INF-284',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #284',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF24.5',
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
    protocolId: 'PROT-INF-285',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #285',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF25.6',
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
    protocolId: 'PROT-INF-286',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #286',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF26.7',
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
    protocolId: 'PROT-INF-287',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #287',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF27.8',
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
    protocolId: 'PROT-INF-288',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #288',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF28.0',
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
    protocolId: 'PROT-INF-289',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #289',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF29.1',
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
    protocolId: 'PROT-INF-290',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #290',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF30.2',
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
    protocolId: 'PROT-INF-291',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #291',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF31.3',
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
    protocolId: 'PROT-INF-292',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #292',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF32.4',
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
    protocolId: 'PROT-INF-293',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #293',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF33.5',
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
    protocolId: 'PROT-INF-294',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #294',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF34.6',
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
    protocolId: 'PROT-INF-295',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #295',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF35.7',
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
    protocolId: 'PROT-INF-296',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #296',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF36.8',
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
    protocolId: 'PROT-INF-297',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #297',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF37.0',
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
    protocolId: 'PROT-INF-298',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #298',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF38.1',
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
    protocolId: 'PROT-INF-299',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #299',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF39.2',
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
    protocolId: 'PROT-INF-300',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #300',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF40.3',
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
    protocolId: 'PROT-INF-301',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #301',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF41.4',
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
    protocolId: 'PROT-INF-302',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #302',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF42.5',
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
    protocolId: 'PROT-INF-303',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #303',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF43.6',
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
    protocolId: 'PROT-INF-304',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #304',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF44.7',
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
    protocolId: 'PROT-INF-305',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #305',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF45.8',
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
    protocolId: 'PROT-INF-306',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #306',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF46.0',
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
    protocolId: 'PROT-INF-307',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #307',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF47.1',
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
    protocolId: 'PROT-INF-308',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #308',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF48.2',
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
    protocolId: 'PROT-INF-309',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #309',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF49.3',
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
    protocolId: 'PROT-INF-310',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #310',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF50.4',
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
    protocolId: 'PROT-INF-311',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #311',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF51.5',
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
    protocolId: 'PROT-INF-312',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #312',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF52.6',
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
    protocolId: 'PROT-INF-313',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #313',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF53.7',
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
    protocolId: 'PROT-INF-314',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #314',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF54.8',
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
    protocolId: 'PROT-INF-315',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #315',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF55.0',
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
    protocolId: 'PROT-INF-316',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #316',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF56.1',
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
    protocolId: 'PROT-INF-317',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #317',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF57.2',
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
    protocolId: 'PROT-INF-318',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #318',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF58.3',
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
    protocolId: 'PROT-INF-319',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #319',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF59.4',
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
    protocolId: 'PROT-INF-320',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #320',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF60.5',
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
    protocolId: 'PROT-INF-321',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #321',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF61.6',
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
    protocolId: 'PROT-INF-322',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #322',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF62.7',
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
    protocolId: 'PROT-INF-323',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #323',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF63.8',
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
    protocolId: 'PROT-INF-324',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #324',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF64.0',
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
    protocolId: 'PROT-INF-325',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #325',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF65.1',
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
    protocolId: 'PROT-INF-326',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #326',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF66.2',
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
    protocolId: 'PROT-INF-327',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #327',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF67.3',
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
    protocolId: 'PROT-INF-328',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #328',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF68.4',
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
    protocolId: 'PROT-INF-329',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #329',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF69.5',
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
    protocolId: 'PROT-INF-330',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #330',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF70.6',
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
    protocolId: 'PROT-INF-331',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #331',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF71.7',
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
    protocolId: 'PROT-INF-332',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #332',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF72.8',
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
    protocolId: 'PROT-INF-333',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #333',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF73.0',
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
    protocolId: 'PROT-INF-334',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #334',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF74.1',
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
    protocolId: 'PROT-INF-335',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #335',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF75.2',
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
    protocolId: 'PROT-INF-336',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #336',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF76.3',
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
    protocolId: 'PROT-INF-337',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #337',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF77.4',
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
    protocolId: 'PROT-INF-338',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #338',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF78.5',
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
    protocolId: 'PROT-INF-339',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #339',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF79.6',
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
    protocolId: 'PROT-INF-340',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #340',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF80.7',
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
    protocolId: 'PROT-INF-341',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #341',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF81.8',
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
    protocolId: 'PROT-INF-342',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #342',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF82.0',
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
    protocolId: 'PROT-INF-343',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #343',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF83.1',
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
    protocolId: 'PROT-INF-344',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #344',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF84.2',
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
    protocolId: 'PROT-INF-345',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #345',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF85.3',
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
    protocolId: 'PROT-INF-346',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #346',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF86.4',
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
    protocolId: 'PROT-INF-347',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #347',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF87.5',
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
    protocolId: 'PROT-INF-348',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #348',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'SOFA sepsis score calculations',
    icd10Code: 'INF88.6',
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
    protocolId: 'PROT-INF-349',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #349',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'antibiogram susceptibility tables',
    icd10Code: 'INF89.7',
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
    protocolId: 'PROT-INF-350',
    title: 'InfectiousDiseaseSepsisOntology Clinical Protocol #350',
    domain: 'InfectiousDiseaseSepsisOntology',
    category: 'and viral hepatitis treatment algorithms',
    icd10Code: 'INF90.8',
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

export class INF_ProtocolCatalog {
  static search(query: string): ClinicalProtocolSpec[] {
    const q = query.toLowerCase().trim();
    if (!q) return PROTOCOL_INF_DATASET.slice(0, 20);
    return PROTOCOL_INF_DATASET.filter(p => p.title.toLowerCase().includes(q) || p.icd10Code.toLowerCase().includes(q));
  }
}
