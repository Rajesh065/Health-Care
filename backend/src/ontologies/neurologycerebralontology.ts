/**
 * Clinical Protocol Specification: NeurologyCerebralOntology
 * Medical Specialization: Ischemic stroke clinical pathways, epilepsy seizure frequency indexing, and Parkinson motor scoring
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

export const PROTOCOL_NEUR_DATASET: ClinicalProtocolSpec[] = [
  {
    protocolId: 'PROT-NEUR-001',
    title: 'NeurologyCerebralOntology Clinical Protocol #1',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR11.1',
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
    protocolId: 'PROT-NEUR-002',
    title: 'NeurologyCerebralOntology Clinical Protocol #2',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR12.2',
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
    protocolId: 'PROT-NEUR-003',
    title: 'NeurologyCerebralOntology Clinical Protocol #3',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR13.3',
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
    protocolId: 'PROT-NEUR-004',
    title: 'NeurologyCerebralOntology Clinical Protocol #4',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR14.4',
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
    protocolId: 'PROT-NEUR-005',
    title: 'NeurologyCerebralOntology Clinical Protocol #5',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR15.5',
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
    protocolId: 'PROT-NEUR-006',
    title: 'NeurologyCerebralOntology Clinical Protocol #6',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR16.6',
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
    protocolId: 'PROT-NEUR-007',
    title: 'NeurologyCerebralOntology Clinical Protocol #7',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR17.7',
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
    protocolId: 'PROT-NEUR-008',
    title: 'NeurologyCerebralOntology Clinical Protocol #8',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR18.8',
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
    protocolId: 'PROT-NEUR-009',
    title: 'NeurologyCerebralOntology Clinical Protocol #9',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR19.0',
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
    protocolId: 'PROT-NEUR-010',
    title: 'NeurologyCerebralOntology Clinical Protocol #10',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR20.1',
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
    protocolId: 'PROT-NEUR-011',
    title: 'NeurologyCerebralOntology Clinical Protocol #11',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR21.2',
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
    protocolId: 'PROT-NEUR-012',
    title: 'NeurologyCerebralOntology Clinical Protocol #12',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR22.3',
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
    protocolId: 'PROT-NEUR-013',
    title: 'NeurologyCerebralOntology Clinical Protocol #13',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR23.4',
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
    protocolId: 'PROT-NEUR-014',
    title: 'NeurologyCerebralOntology Clinical Protocol #14',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR24.5',
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
    protocolId: 'PROT-NEUR-015',
    title: 'NeurologyCerebralOntology Clinical Protocol #15',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR25.6',
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
    protocolId: 'PROT-NEUR-016',
    title: 'NeurologyCerebralOntology Clinical Protocol #16',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR26.7',
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
    protocolId: 'PROT-NEUR-017',
    title: 'NeurologyCerebralOntology Clinical Protocol #17',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR27.8',
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
    protocolId: 'PROT-NEUR-018',
    title: 'NeurologyCerebralOntology Clinical Protocol #18',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR28.0',
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
    protocolId: 'PROT-NEUR-019',
    title: 'NeurologyCerebralOntology Clinical Protocol #19',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR29.1',
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
    protocolId: 'PROT-NEUR-020',
    title: 'NeurologyCerebralOntology Clinical Protocol #20',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR30.2',
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
    protocolId: 'PROT-NEUR-021',
    title: 'NeurologyCerebralOntology Clinical Protocol #21',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR31.3',
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
    protocolId: 'PROT-NEUR-022',
    title: 'NeurologyCerebralOntology Clinical Protocol #22',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR32.4',
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
    protocolId: 'PROT-NEUR-023',
    title: 'NeurologyCerebralOntology Clinical Protocol #23',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR33.5',
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
    protocolId: 'PROT-NEUR-024',
    title: 'NeurologyCerebralOntology Clinical Protocol #24',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR34.6',
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
    protocolId: 'PROT-NEUR-025',
    title: 'NeurologyCerebralOntology Clinical Protocol #25',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR35.7',
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
    protocolId: 'PROT-NEUR-026',
    title: 'NeurologyCerebralOntology Clinical Protocol #26',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR36.8',
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
    protocolId: 'PROT-NEUR-027',
    title: 'NeurologyCerebralOntology Clinical Protocol #27',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR37.0',
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
    protocolId: 'PROT-NEUR-028',
    title: 'NeurologyCerebralOntology Clinical Protocol #28',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR38.1',
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
    protocolId: 'PROT-NEUR-029',
    title: 'NeurologyCerebralOntology Clinical Protocol #29',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR39.2',
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
    protocolId: 'PROT-NEUR-030',
    title: 'NeurologyCerebralOntology Clinical Protocol #30',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR40.3',
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
    protocolId: 'PROT-NEUR-031',
    title: 'NeurologyCerebralOntology Clinical Protocol #31',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR41.4',
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
    protocolId: 'PROT-NEUR-032',
    title: 'NeurologyCerebralOntology Clinical Protocol #32',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR42.5',
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
    protocolId: 'PROT-NEUR-033',
    title: 'NeurologyCerebralOntology Clinical Protocol #33',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR43.6',
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
    protocolId: 'PROT-NEUR-034',
    title: 'NeurologyCerebralOntology Clinical Protocol #34',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR44.7',
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
    protocolId: 'PROT-NEUR-035',
    title: 'NeurologyCerebralOntology Clinical Protocol #35',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR45.8',
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
    protocolId: 'PROT-NEUR-036',
    title: 'NeurologyCerebralOntology Clinical Protocol #36',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR46.0',
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
    protocolId: 'PROT-NEUR-037',
    title: 'NeurologyCerebralOntology Clinical Protocol #37',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR47.1',
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
    protocolId: 'PROT-NEUR-038',
    title: 'NeurologyCerebralOntology Clinical Protocol #38',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR48.2',
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
    protocolId: 'PROT-NEUR-039',
    title: 'NeurologyCerebralOntology Clinical Protocol #39',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR49.3',
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
    protocolId: 'PROT-NEUR-040',
    title: 'NeurologyCerebralOntology Clinical Protocol #40',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR50.4',
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
    protocolId: 'PROT-NEUR-041',
    title: 'NeurologyCerebralOntology Clinical Protocol #41',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR51.5',
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
    protocolId: 'PROT-NEUR-042',
    title: 'NeurologyCerebralOntology Clinical Protocol #42',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR52.6',
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
    protocolId: 'PROT-NEUR-043',
    title: 'NeurologyCerebralOntology Clinical Protocol #43',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR53.7',
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
    protocolId: 'PROT-NEUR-044',
    title: 'NeurologyCerebralOntology Clinical Protocol #44',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR54.8',
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
    protocolId: 'PROT-NEUR-045',
    title: 'NeurologyCerebralOntology Clinical Protocol #45',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR55.0',
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
    protocolId: 'PROT-NEUR-046',
    title: 'NeurologyCerebralOntology Clinical Protocol #46',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR56.1',
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
    protocolId: 'PROT-NEUR-047',
    title: 'NeurologyCerebralOntology Clinical Protocol #47',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR57.2',
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
    protocolId: 'PROT-NEUR-048',
    title: 'NeurologyCerebralOntology Clinical Protocol #48',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR58.3',
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
    protocolId: 'PROT-NEUR-049',
    title: 'NeurologyCerebralOntology Clinical Protocol #49',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR59.4',
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
    protocolId: 'PROT-NEUR-050',
    title: 'NeurologyCerebralOntology Clinical Protocol #50',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR60.5',
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
    protocolId: 'PROT-NEUR-051',
    title: 'NeurologyCerebralOntology Clinical Protocol #51',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR61.6',
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
    protocolId: 'PROT-NEUR-052',
    title: 'NeurologyCerebralOntology Clinical Protocol #52',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR62.7',
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
    protocolId: 'PROT-NEUR-053',
    title: 'NeurologyCerebralOntology Clinical Protocol #53',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR63.8',
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
    protocolId: 'PROT-NEUR-054',
    title: 'NeurologyCerebralOntology Clinical Protocol #54',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR64.0',
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
    protocolId: 'PROT-NEUR-055',
    title: 'NeurologyCerebralOntology Clinical Protocol #55',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR65.1',
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
    protocolId: 'PROT-NEUR-056',
    title: 'NeurologyCerebralOntology Clinical Protocol #56',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR66.2',
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
    protocolId: 'PROT-NEUR-057',
    title: 'NeurologyCerebralOntology Clinical Protocol #57',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR67.3',
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
    protocolId: 'PROT-NEUR-058',
    title: 'NeurologyCerebralOntology Clinical Protocol #58',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR68.4',
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
    protocolId: 'PROT-NEUR-059',
    title: 'NeurologyCerebralOntology Clinical Protocol #59',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR69.5',
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
    protocolId: 'PROT-NEUR-060',
    title: 'NeurologyCerebralOntology Clinical Protocol #60',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR70.6',
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
    protocolId: 'PROT-NEUR-061',
    title: 'NeurologyCerebralOntology Clinical Protocol #61',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR71.7',
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
    protocolId: 'PROT-NEUR-062',
    title: 'NeurologyCerebralOntology Clinical Protocol #62',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR72.8',
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
    protocolId: 'PROT-NEUR-063',
    title: 'NeurologyCerebralOntology Clinical Protocol #63',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR73.0',
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
    protocolId: 'PROT-NEUR-064',
    title: 'NeurologyCerebralOntology Clinical Protocol #64',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR74.1',
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
    protocolId: 'PROT-NEUR-065',
    title: 'NeurologyCerebralOntology Clinical Protocol #65',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR75.2',
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
    protocolId: 'PROT-NEUR-066',
    title: 'NeurologyCerebralOntology Clinical Protocol #66',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR76.3',
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
    protocolId: 'PROT-NEUR-067',
    title: 'NeurologyCerebralOntology Clinical Protocol #67',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR77.4',
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
    protocolId: 'PROT-NEUR-068',
    title: 'NeurologyCerebralOntology Clinical Protocol #68',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR78.5',
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
    protocolId: 'PROT-NEUR-069',
    title: 'NeurologyCerebralOntology Clinical Protocol #69',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR79.6',
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
    protocolId: 'PROT-NEUR-070',
    title: 'NeurologyCerebralOntology Clinical Protocol #70',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR80.7',
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
    protocolId: 'PROT-NEUR-071',
    title: 'NeurologyCerebralOntology Clinical Protocol #71',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR81.8',
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
    protocolId: 'PROT-NEUR-072',
    title: 'NeurologyCerebralOntology Clinical Protocol #72',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR82.0',
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
    protocolId: 'PROT-NEUR-073',
    title: 'NeurologyCerebralOntology Clinical Protocol #73',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR83.1',
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
    protocolId: 'PROT-NEUR-074',
    title: 'NeurologyCerebralOntology Clinical Protocol #74',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR84.2',
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
    protocolId: 'PROT-NEUR-075',
    title: 'NeurologyCerebralOntology Clinical Protocol #75',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR85.3',
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
    protocolId: 'PROT-NEUR-076',
    title: 'NeurologyCerebralOntology Clinical Protocol #76',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR86.4',
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
    protocolId: 'PROT-NEUR-077',
    title: 'NeurologyCerebralOntology Clinical Protocol #77',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR87.5',
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
    protocolId: 'PROT-NEUR-078',
    title: 'NeurologyCerebralOntology Clinical Protocol #78',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR88.6',
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
    protocolId: 'PROT-NEUR-079',
    title: 'NeurologyCerebralOntology Clinical Protocol #79',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR89.7',
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
    protocolId: 'PROT-NEUR-080',
    title: 'NeurologyCerebralOntology Clinical Protocol #80',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR90.8',
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
    protocolId: 'PROT-NEUR-081',
    title: 'NeurologyCerebralOntology Clinical Protocol #81',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR91.0',
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
    protocolId: 'PROT-NEUR-082',
    title: 'NeurologyCerebralOntology Clinical Protocol #82',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR92.1',
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
    protocolId: 'PROT-NEUR-083',
    title: 'NeurologyCerebralOntology Clinical Protocol #83',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR93.2',
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
    protocolId: 'PROT-NEUR-084',
    title: 'NeurologyCerebralOntology Clinical Protocol #84',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR94.3',
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
    protocolId: 'PROT-NEUR-085',
    title: 'NeurologyCerebralOntology Clinical Protocol #85',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR95.4',
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
    protocolId: 'PROT-NEUR-086',
    title: 'NeurologyCerebralOntology Clinical Protocol #86',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR96.5',
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
    protocolId: 'PROT-NEUR-087',
    title: 'NeurologyCerebralOntology Clinical Protocol #87',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR97.6',
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
    protocolId: 'PROT-NEUR-088',
    title: 'NeurologyCerebralOntology Clinical Protocol #88',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR98.7',
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
    protocolId: 'PROT-NEUR-089',
    title: 'NeurologyCerebralOntology Clinical Protocol #89',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR99.8',
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
    protocolId: 'PROT-NEUR-090',
    title: 'NeurologyCerebralOntology Clinical Protocol #90',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR10.0',
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
    protocolId: 'PROT-NEUR-091',
    title: 'NeurologyCerebralOntology Clinical Protocol #91',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR11.1',
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
    protocolId: 'PROT-NEUR-092',
    title: 'NeurologyCerebralOntology Clinical Protocol #92',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR12.2',
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
    protocolId: 'PROT-NEUR-093',
    title: 'NeurologyCerebralOntology Clinical Protocol #93',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR13.3',
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
    protocolId: 'PROT-NEUR-094',
    title: 'NeurologyCerebralOntology Clinical Protocol #94',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR14.4',
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
    protocolId: 'PROT-NEUR-095',
    title: 'NeurologyCerebralOntology Clinical Protocol #95',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR15.5',
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
    protocolId: 'PROT-NEUR-096',
    title: 'NeurologyCerebralOntology Clinical Protocol #96',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR16.6',
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
    protocolId: 'PROT-NEUR-097',
    title: 'NeurologyCerebralOntology Clinical Protocol #97',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR17.7',
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
    protocolId: 'PROT-NEUR-098',
    title: 'NeurologyCerebralOntology Clinical Protocol #98',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR18.8',
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
    protocolId: 'PROT-NEUR-099',
    title: 'NeurologyCerebralOntology Clinical Protocol #99',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR19.0',
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
    protocolId: 'PROT-NEUR-100',
    title: 'NeurologyCerebralOntology Clinical Protocol #100',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR20.1',
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
    protocolId: 'PROT-NEUR-101',
    title: 'NeurologyCerebralOntology Clinical Protocol #101',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR21.2',
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
    protocolId: 'PROT-NEUR-102',
    title: 'NeurologyCerebralOntology Clinical Protocol #102',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR22.3',
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
    protocolId: 'PROT-NEUR-103',
    title: 'NeurologyCerebralOntology Clinical Protocol #103',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR23.4',
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
    protocolId: 'PROT-NEUR-104',
    title: 'NeurologyCerebralOntology Clinical Protocol #104',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR24.5',
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
    protocolId: 'PROT-NEUR-105',
    title: 'NeurologyCerebralOntology Clinical Protocol #105',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR25.6',
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
    protocolId: 'PROT-NEUR-106',
    title: 'NeurologyCerebralOntology Clinical Protocol #106',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR26.7',
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
    protocolId: 'PROT-NEUR-107',
    title: 'NeurologyCerebralOntology Clinical Protocol #107',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR27.8',
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
    protocolId: 'PROT-NEUR-108',
    title: 'NeurologyCerebralOntology Clinical Protocol #108',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR28.0',
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
    protocolId: 'PROT-NEUR-109',
    title: 'NeurologyCerebralOntology Clinical Protocol #109',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR29.1',
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
    protocolId: 'PROT-NEUR-110',
    title: 'NeurologyCerebralOntology Clinical Protocol #110',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR30.2',
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
    protocolId: 'PROT-NEUR-111',
    title: 'NeurologyCerebralOntology Clinical Protocol #111',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR31.3',
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
    protocolId: 'PROT-NEUR-112',
    title: 'NeurologyCerebralOntology Clinical Protocol #112',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR32.4',
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
    protocolId: 'PROT-NEUR-113',
    title: 'NeurologyCerebralOntology Clinical Protocol #113',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR33.5',
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
    protocolId: 'PROT-NEUR-114',
    title: 'NeurologyCerebralOntology Clinical Protocol #114',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR34.6',
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
    protocolId: 'PROT-NEUR-115',
    title: 'NeurologyCerebralOntology Clinical Protocol #115',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR35.7',
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
    protocolId: 'PROT-NEUR-116',
    title: 'NeurologyCerebralOntology Clinical Protocol #116',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR36.8',
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
    protocolId: 'PROT-NEUR-117',
    title: 'NeurologyCerebralOntology Clinical Protocol #117',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR37.0',
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
    protocolId: 'PROT-NEUR-118',
    title: 'NeurologyCerebralOntology Clinical Protocol #118',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR38.1',
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
    protocolId: 'PROT-NEUR-119',
    title: 'NeurologyCerebralOntology Clinical Protocol #119',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR39.2',
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
    protocolId: 'PROT-NEUR-120',
    title: 'NeurologyCerebralOntology Clinical Protocol #120',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR40.3',
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
    protocolId: 'PROT-NEUR-121',
    title: 'NeurologyCerebralOntology Clinical Protocol #121',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR41.4',
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
    protocolId: 'PROT-NEUR-122',
    title: 'NeurologyCerebralOntology Clinical Protocol #122',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR42.5',
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
    protocolId: 'PROT-NEUR-123',
    title: 'NeurologyCerebralOntology Clinical Protocol #123',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR43.6',
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
    protocolId: 'PROT-NEUR-124',
    title: 'NeurologyCerebralOntology Clinical Protocol #124',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR44.7',
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
    protocolId: 'PROT-NEUR-125',
    title: 'NeurologyCerebralOntology Clinical Protocol #125',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR45.8',
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
    protocolId: 'PROT-NEUR-126',
    title: 'NeurologyCerebralOntology Clinical Protocol #126',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR46.0',
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
    protocolId: 'PROT-NEUR-127',
    title: 'NeurologyCerebralOntology Clinical Protocol #127',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR47.1',
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
    protocolId: 'PROT-NEUR-128',
    title: 'NeurologyCerebralOntology Clinical Protocol #128',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR48.2',
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
    protocolId: 'PROT-NEUR-129',
    title: 'NeurologyCerebralOntology Clinical Protocol #129',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR49.3',
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
    protocolId: 'PROT-NEUR-130',
    title: 'NeurologyCerebralOntology Clinical Protocol #130',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR50.4',
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
    protocolId: 'PROT-NEUR-131',
    title: 'NeurologyCerebralOntology Clinical Protocol #131',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR51.5',
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
    protocolId: 'PROT-NEUR-132',
    title: 'NeurologyCerebralOntology Clinical Protocol #132',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR52.6',
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
    protocolId: 'PROT-NEUR-133',
    title: 'NeurologyCerebralOntology Clinical Protocol #133',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR53.7',
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
    protocolId: 'PROT-NEUR-134',
    title: 'NeurologyCerebralOntology Clinical Protocol #134',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR54.8',
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
    protocolId: 'PROT-NEUR-135',
    title: 'NeurologyCerebralOntology Clinical Protocol #135',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR55.0',
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
    protocolId: 'PROT-NEUR-136',
    title: 'NeurologyCerebralOntology Clinical Protocol #136',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR56.1',
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
    protocolId: 'PROT-NEUR-137',
    title: 'NeurologyCerebralOntology Clinical Protocol #137',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR57.2',
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
    protocolId: 'PROT-NEUR-138',
    title: 'NeurologyCerebralOntology Clinical Protocol #138',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR58.3',
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
    protocolId: 'PROT-NEUR-139',
    title: 'NeurologyCerebralOntology Clinical Protocol #139',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR59.4',
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
    protocolId: 'PROT-NEUR-140',
    title: 'NeurologyCerebralOntology Clinical Protocol #140',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR60.5',
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
    protocolId: 'PROT-NEUR-141',
    title: 'NeurologyCerebralOntology Clinical Protocol #141',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR61.6',
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
    protocolId: 'PROT-NEUR-142',
    title: 'NeurologyCerebralOntology Clinical Protocol #142',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR62.7',
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
    protocolId: 'PROT-NEUR-143',
    title: 'NeurologyCerebralOntology Clinical Protocol #143',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR63.8',
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
    protocolId: 'PROT-NEUR-144',
    title: 'NeurologyCerebralOntology Clinical Protocol #144',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR64.0',
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
    protocolId: 'PROT-NEUR-145',
    title: 'NeurologyCerebralOntology Clinical Protocol #145',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR65.1',
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
    protocolId: 'PROT-NEUR-146',
    title: 'NeurologyCerebralOntology Clinical Protocol #146',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR66.2',
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
    protocolId: 'PROT-NEUR-147',
    title: 'NeurologyCerebralOntology Clinical Protocol #147',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR67.3',
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
    protocolId: 'PROT-NEUR-148',
    title: 'NeurologyCerebralOntology Clinical Protocol #148',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR68.4',
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
    protocolId: 'PROT-NEUR-149',
    title: 'NeurologyCerebralOntology Clinical Protocol #149',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR69.5',
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
    protocolId: 'PROT-NEUR-150',
    title: 'NeurologyCerebralOntology Clinical Protocol #150',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR70.6',
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
    protocolId: 'PROT-NEUR-151',
    title: 'NeurologyCerebralOntology Clinical Protocol #151',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR71.7',
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
    protocolId: 'PROT-NEUR-152',
    title: 'NeurologyCerebralOntology Clinical Protocol #152',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR72.8',
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
    protocolId: 'PROT-NEUR-153',
    title: 'NeurologyCerebralOntology Clinical Protocol #153',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR73.0',
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
    protocolId: 'PROT-NEUR-154',
    title: 'NeurologyCerebralOntology Clinical Protocol #154',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR74.1',
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
    protocolId: 'PROT-NEUR-155',
    title: 'NeurologyCerebralOntology Clinical Protocol #155',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR75.2',
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
    protocolId: 'PROT-NEUR-156',
    title: 'NeurologyCerebralOntology Clinical Protocol #156',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR76.3',
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
    protocolId: 'PROT-NEUR-157',
    title: 'NeurologyCerebralOntology Clinical Protocol #157',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR77.4',
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
    protocolId: 'PROT-NEUR-158',
    title: 'NeurologyCerebralOntology Clinical Protocol #158',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR78.5',
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
    protocolId: 'PROT-NEUR-159',
    title: 'NeurologyCerebralOntology Clinical Protocol #159',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR79.6',
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
    protocolId: 'PROT-NEUR-160',
    title: 'NeurologyCerebralOntology Clinical Protocol #160',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR80.7',
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
    protocolId: 'PROT-NEUR-161',
    title: 'NeurologyCerebralOntology Clinical Protocol #161',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR81.8',
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
    protocolId: 'PROT-NEUR-162',
    title: 'NeurologyCerebralOntology Clinical Protocol #162',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR82.0',
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
    protocolId: 'PROT-NEUR-163',
    title: 'NeurologyCerebralOntology Clinical Protocol #163',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR83.1',
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
    protocolId: 'PROT-NEUR-164',
    title: 'NeurologyCerebralOntology Clinical Protocol #164',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR84.2',
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
    protocolId: 'PROT-NEUR-165',
    title: 'NeurologyCerebralOntology Clinical Protocol #165',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR85.3',
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
    protocolId: 'PROT-NEUR-166',
    title: 'NeurologyCerebralOntology Clinical Protocol #166',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR86.4',
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
    protocolId: 'PROT-NEUR-167',
    title: 'NeurologyCerebralOntology Clinical Protocol #167',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR87.5',
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
    protocolId: 'PROT-NEUR-168',
    title: 'NeurologyCerebralOntology Clinical Protocol #168',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR88.6',
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
    protocolId: 'PROT-NEUR-169',
    title: 'NeurologyCerebralOntology Clinical Protocol #169',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR89.7',
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
    protocolId: 'PROT-NEUR-170',
    title: 'NeurologyCerebralOntology Clinical Protocol #170',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR90.8',
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
    protocolId: 'PROT-NEUR-171',
    title: 'NeurologyCerebralOntology Clinical Protocol #171',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR91.0',
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
    protocolId: 'PROT-NEUR-172',
    title: 'NeurologyCerebralOntology Clinical Protocol #172',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR92.1',
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
    protocolId: 'PROT-NEUR-173',
    title: 'NeurologyCerebralOntology Clinical Protocol #173',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR93.2',
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
    protocolId: 'PROT-NEUR-174',
    title: 'NeurologyCerebralOntology Clinical Protocol #174',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR94.3',
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
    protocolId: 'PROT-NEUR-175',
    title: 'NeurologyCerebralOntology Clinical Protocol #175',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR95.4',
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
    protocolId: 'PROT-NEUR-176',
    title: 'NeurologyCerebralOntology Clinical Protocol #176',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR96.5',
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
    protocolId: 'PROT-NEUR-177',
    title: 'NeurologyCerebralOntology Clinical Protocol #177',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR97.6',
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
    protocolId: 'PROT-NEUR-178',
    title: 'NeurologyCerebralOntology Clinical Protocol #178',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR98.7',
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
    protocolId: 'PROT-NEUR-179',
    title: 'NeurologyCerebralOntology Clinical Protocol #179',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR99.8',
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
    protocolId: 'PROT-NEUR-180',
    title: 'NeurologyCerebralOntology Clinical Protocol #180',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR10.0',
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
    protocolId: 'PROT-NEUR-181',
    title: 'NeurologyCerebralOntology Clinical Protocol #181',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR11.1',
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
    protocolId: 'PROT-NEUR-182',
    title: 'NeurologyCerebralOntology Clinical Protocol #182',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR12.2',
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
    protocolId: 'PROT-NEUR-183',
    title: 'NeurologyCerebralOntology Clinical Protocol #183',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR13.3',
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
    protocolId: 'PROT-NEUR-184',
    title: 'NeurologyCerebralOntology Clinical Protocol #184',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR14.4',
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
    protocolId: 'PROT-NEUR-185',
    title: 'NeurologyCerebralOntology Clinical Protocol #185',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR15.5',
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
    protocolId: 'PROT-NEUR-186',
    title: 'NeurologyCerebralOntology Clinical Protocol #186',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR16.6',
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
    protocolId: 'PROT-NEUR-187',
    title: 'NeurologyCerebralOntology Clinical Protocol #187',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR17.7',
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
    protocolId: 'PROT-NEUR-188',
    title: 'NeurologyCerebralOntology Clinical Protocol #188',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR18.8',
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
    protocolId: 'PROT-NEUR-189',
    title: 'NeurologyCerebralOntology Clinical Protocol #189',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR19.0',
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
    protocolId: 'PROT-NEUR-190',
    title: 'NeurologyCerebralOntology Clinical Protocol #190',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR20.1',
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
    protocolId: 'PROT-NEUR-191',
    title: 'NeurologyCerebralOntology Clinical Protocol #191',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR21.2',
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
    protocolId: 'PROT-NEUR-192',
    title: 'NeurologyCerebralOntology Clinical Protocol #192',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR22.3',
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
    protocolId: 'PROT-NEUR-193',
    title: 'NeurologyCerebralOntology Clinical Protocol #193',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR23.4',
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
    protocolId: 'PROT-NEUR-194',
    title: 'NeurologyCerebralOntology Clinical Protocol #194',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR24.5',
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
    protocolId: 'PROT-NEUR-195',
    title: 'NeurologyCerebralOntology Clinical Protocol #195',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR25.6',
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
    protocolId: 'PROT-NEUR-196',
    title: 'NeurologyCerebralOntology Clinical Protocol #196',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR26.7',
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
    protocolId: 'PROT-NEUR-197',
    title: 'NeurologyCerebralOntology Clinical Protocol #197',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR27.8',
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
    protocolId: 'PROT-NEUR-198',
    title: 'NeurologyCerebralOntology Clinical Protocol #198',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR28.0',
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
    protocolId: 'PROT-NEUR-199',
    title: 'NeurologyCerebralOntology Clinical Protocol #199',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR29.1',
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
    protocolId: 'PROT-NEUR-200',
    title: 'NeurologyCerebralOntology Clinical Protocol #200',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR30.2',
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
    protocolId: 'PROT-NEUR-201',
    title: 'NeurologyCerebralOntology Clinical Protocol #201',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR31.3',
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
    protocolId: 'PROT-NEUR-202',
    title: 'NeurologyCerebralOntology Clinical Protocol #202',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR32.4',
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
    protocolId: 'PROT-NEUR-203',
    title: 'NeurologyCerebralOntology Clinical Protocol #203',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR33.5',
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
    protocolId: 'PROT-NEUR-204',
    title: 'NeurologyCerebralOntology Clinical Protocol #204',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR34.6',
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
    protocolId: 'PROT-NEUR-205',
    title: 'NeurologyCerebralOntology Clinical Protocol #205',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR35.7',
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
    protocolId: 'PROT-NEUR-206',
    title: 'NeurologyCerebralOntology Clinical Protocol #206',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR36.8',
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
    protocolId: 'PROT-NEUR-207',
    title: 'NeurologyCerebralOntology Clinical Protocol #207',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR37.0',
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
    protocolId: 'PROT-NEUR-208',
    title: 'NeurologyCerebralOntology Clinical Protocol #208',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR38.1',
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
    protocolId: 'PROT-NEUR-209',
    title: 'NeurologyCerebralOntology Clinical Protocol #209',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR39.2',
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
    protocolId: 'PROT-NEUR-210',
    title: 'NeurologyCerebralOntology Clinical Protocol #210',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR40.3',
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
    protocolId: 'PROT-NEUR-211',
    title: 'NeurologyCerebralOntology Clinical Protocol #211',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR41.4',
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
    protocolId: 'PROT-NEUR-212',
    title: 'NeurologyCerebralOntology Clinical Protocol #212',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR42.5',
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
    protocolId: 'PROT-NEUR-213',
    title: 'NeurologyCerebralOntology Clinical Protocol #213',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR43.6',
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
    protocolId: 'PROT-NEUR-214',
    title: 'NeurologyCerebralOntology Clinical Protocol #214',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR44.7',
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
    protocolId: 'PROT-NEUR-215',
    title: 'NeurologyCerebralOntology Clinical Protocol #215',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR45.8',
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
    protocolId: 'PROT-NEUR-216',
    title: 'NeurologyCerebralOntology Clinical Protocol #216',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR46.0',
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
    protocolId: 'PROT-NEUR-217',
    title: 'NeurologyCerebralOntology Clinical Protocol #217',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR47.1',
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
    protocolId: 'PROT-NEUR-218',
    title: 'NeurologyCerebralOntology Clinical Protocol #218',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR48.2',
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
    protocolId: 'PROT-NEUR-219',
    title: 'NeurologyCerebralOntology Clinical Protocol #219',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR49.3',
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
    protocolId: 'PROT-NEUR-220',
    title: 'NeurologyCerebralOntology Clinical Protocol #220',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR50.4',
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
    protocolId: 'PROT-NEUR-221',
    title: 'NeurologyCerebralOntology Clinical Protocol #221',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR51.5',
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
    protocolId: 'PROT-NEUR-222',
    title: 'NeurologyCerebralOntology Clinical Protocol #222',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR52.6',
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
    protocolId: 'PROT-NEUR-223',
    title: 'NeurologyCerebralOntology Clinical Protocol #223',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR53.7',
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
    protocolId: 'PROT-NEUR-224',
    title: 'NeurologyCerebralOntology Clinical Protocol #224',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR54.8',
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
    protocolId: 'PROT-NEUR-225',
    title: 'NeurologyCerebralOntology Clinical Protocol #225',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR55.0',
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
    protocolId: 'PROT-NEUR-226',
    title: 'NeurologyCerebralOntology Clinical Protocol #226',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR56.1',
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
    protocolId: 'PROT-NEUR-227',
    title: 'NeurologyCerebralOntology Clinical Protocol #227',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR57.2',
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
    protocolId: 'PROT-NEUR-228',
    title: 'NeurologyCerebralOntology Clinical Protocol #228',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR58.3',
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
    protocolId: 'PROT-NEUR-229',
    title: 'NeurologyCerebralOntology Clinical Protocol #229',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR59.4',
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
    protocolId: 'PROT-NEUR-230',
    title: 'NeurologyCerebralOntology Clinical Protocol #230',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR60.5',
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
    protocolId: 'PROT-NEUR-231',
    title: 'NeurologyCerebralOntology Clinical Protocol #231',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR61.6',
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
    protocolId: 'PROT-NEUR-232',
    title: 'NeurologyCerebralOntology Clinical Protocol #232',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR62.7',
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
    protocolId: 'PROT-NEUR-233',
    title: 'NeurologyCerebralOntology Clinical Protocol #233',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR63.8',
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
    protocolId: 'PROT-NEUR-234',
    title: 'NeurologyCerebralOntology Clinical Protocol #234',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR64.0',
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
    protocolId: 'PROT-NEUR-235',
    title: 'NeurologyCerebralOntology Clinical Protocol #235',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR65.1',
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
    protocolId: 'PROT-NEUR-236',
    title: 'NeurologyCerebralOntology Clinical Protocol #236',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR66.2',
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
    protocolId: 'PROT-NEUR-237',
    title: 'NeurologyCerebralOntology Clinical Protocol #237',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR67.3',
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
    protocolId: 'PROT-NEUR-238',
    title: 'NeurologyCerebralOntology Clinical Protocol #238',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR68.4',
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
    protocolId: 'PROT-NEUR-239',
    title: 'NeurologyCerebralOntology Clinical Protocol #239',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR69.5',
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
    protocolId: 'PROT-NEUR-240',
    title: 'NeurologyCerebralOntology Clinical Protocol #240',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR70.6',
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
    protocolId: 'PROT-NEUR-241',
    title: 'NeurologyCerebralOntology Clinical Protocol #241',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR71.7',
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
    protocolId: 'PROT-NEUR-242',
    title: 'NeurologyCerebralOntology Clinical Protocol #242',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR72.8',
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
    protocolId: 'PROT-NEUR-243',
    title: 'NeurologyCerebralOntology Clinical Protocol #243',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR73.0',
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
    protocolId: 'PROT-NEUR-244',
    title: 'NeurologyCerebralOntology Clinical Protocol #244',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR74.1',
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
    protocolId: 'PROT-NEUR-245',
    title: 'NeurologyCerebralOntology Clinical Protocol #245',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR75.2',
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
    protocolId: 'PROT-NEUR-246',
    title: 'NeurologyCerebralOntology Clinical Protocol #246',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR76.3',
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
    protocolId: 'PROT-NEUR-247',
    title: 'NeurologyCerebralOntology Clinical Protocol #247',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR77.4',
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
    protocolId: 'PROT-NEUR-248',
    title: 'NeurologyCerebralOntology Clinical Protocol #248',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR78.5',
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
    protocolId: 'PROT-NEUR-249',
    title: 'NeurologyCerebralOntology Clinical Protocol #249',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR79.6',
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
    protocolId: 'PROT-NEUR-250',
    title: 'NeurologyCerebralOntology Clinical Protocol #250',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR80.7',
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
    protocolId: 'PROT-NEUR-251',
    title: 'NeurologyCerebralOntology Clinical Protocol #251',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR81.8',
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
    protocolId: 'PROT-NEUR-252',
    title: 'NeurologyCerebralOntology Clinical Protocol #252',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR82.0',
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
    protocolId: 'PROT-NEUR-253',
    title: 'NeurologyCerebralOntology Clinical Protocol #253',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR83.1',
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
    protocolId: 'PROT-NEUR-254',
    title: 'NeurologyCerebralOntology Clinical Protocol #254',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR84.2',
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
    protocolId: 'PROT-NEUR-255',
    title: 'NeurologyCerebralOntology Clinical Protocol #255',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR85.3',
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
    protocolId: 'PROT-NEUR-256',
    title: 'NeurologyCerebralOntology Clinical Protocol #256',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR86.4',
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
    protocolId: 'PROT-NEUR-257',
    title: 'NeurologyCerebralOntology Clinical Protocol #257',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR87.5',
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
    protocolId: 'PROT-NEUR-258',
    title: 'NeurologyCerebralOntology Clinical Protocol #258',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR88.6',
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
    protocolId: 'PROT-NEUR-259',
    title: 'NeurologyCerebralOntology Clinical Protocol #259',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR89.7',
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
    protocolId: 'PROT-NEUR-260',
    title: 'NeurologyCerebralOntology Clinical Protocol #260',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR90.8',
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
    protocolId: 'PROT-NEUR-261',
    title: 'NeurologyCerebralOntology Clinical Protocol #261',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR91.0',
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
    protocolId: 'PROT-NEUR-262',
    title: 'NeurologyCerebralOntology Clinical Protocol #262',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR92.1',
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
    protocolId: 'PROT-NEUR-263',
    title: 'NeurologyCerebralOntology Clinical Protocol #263',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR93.2',
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
    protocolId: 'PROT-NEUR-264',
    title: 'NeurologyCerebralOntology Clinical Protocol #264',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR94.3',
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
    protocolId: 'PROT-NEUR-265',
    title: 'NeurologyCerebralOntology Clinical Protocol #265',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR95.4',
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
    protocolId: 'PROT-NEUR-266',
    title: 'NeurologyCerebralOntology Clinical Protocol #266',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR96.5',
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
    protocolId: 'PROT-NEUR-267',
    title: 'NeurologyCerebralOntology Clinical Protocol #267',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR97.6',
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
    protocolId: 'PROT-NEUR-268',
    title: 'NeurologyCerebralOntology Clinical Protocol #268',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR98.7',
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
    protocolId: 'PROT-NEUR-269',
    title: 'NeurologyCerebralOntology Clinical Protocol #269',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR99.8',
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
    protocolId: 'PROT-NEUR-270',
    title: 'NeurologyCerebralOntology Clinical Protocol #270',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR10.0',
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
    protocolId: 'PROT-NEUR-271',
    title: 'NeurologyCerebralOntology Clinical Protocol #271',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR11.1',
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
    protocolId: 'PROT-NEUR-272',
    title: 'NeurologyCerebralOntology Clinical Protocol #272',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR12.2',
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
    protocolId: 'PROT-NEUR-273',
    title: 'NeurologyCerebralOntology Clinical Protocol #273',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR13.3',
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
    protocolId: 'PROT-NEUR-274',
    title: 'NeurologyCerebralOntology Clinical Protocol #274',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR14.4',
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
    protocolId: 'PROT-NEUR-275',
    title: 'NeurologyCerebralOntology Clinical Protocol #275',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR15.5',
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
    protocolId: 'PROT-NEUR-276',
    title: 'NeurologyCerebralOntology Clinical Protocol #276',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR16.6',
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
    protocolId: 'PROT-NEUR-277',
    title: 'NeurologyCerebralOntology Clinical Protocol #277',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR17.7',
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
    protocolId: 'PROT-NEUR-278',
    title: 'NeurologyCerebralOntology Clinical Protocol #278',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR18.8',
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
    protocolId: 'PROT-NEUR-279',
    title: 'NeurologyCerebralOntology Clinical Protocol #279',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR19.0',
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
    protocolId: 'PROT-NEUR-280',
    title: 'NeurologyCerebralOntology Clinical Protocol #280',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR20.1',
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
    protocolId: 'PROT-NEUR-281',
    title: 'NeurologyCerebralOntology Clinical Protocol #281',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR21.2',
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
    protocolId: 'PROT-NEUR-282',
    title: 'NeurologyCerebralOntology Clinical Protocol #282',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR22.3',
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
    protocolId: 'PROT-NEUR-283',
    title: 'NeurologyCerebralOntology Clinical Protocol #283',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR23.4',
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
    protocolId: 'PROT-NEUR-284',
    title: 'NeurologyCerebralOntology Clinical Protocol #284',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR24.5',
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
    protocolId: 'PROT-NEUR-285',
    title: 'NeurologyCerebralOntology Clinical Protocol #285',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR25.6',
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
    protocolId: 'PROT-NEUR-286',
    title: 'NeurologyCerebralOntology Clinical Protocol #286',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR26.7',
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
    protocolId: 'PROT-NEUR-287',
    title: 'NeurologyCerebralOntology Clinical Protocol #287',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR27.8',
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
    protocolId: 'PROT-NEUR-288',
    title: 'NeurologyCerebralOntology Clinical Protocol #288',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR28.0',
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
    protocolId: 'PROT-NEUR-289',
    title: 'NeurologyCerebralOntology Clinical Protocol #289',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR29.1',
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
    protocolId: 'PROT-NEUR-290',
    title: 'NeurologyCerebralOntology Clinical Protocol #290',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR30.2',
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
    protocolId: 'PROT-NEUR-291',
    title: 'NeurologyCerebralOntology Clinical Protocol #291',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR31.3',
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
    protocolId: 'PROT-NEUR-292',
    title: 'NeurologyCerebralOntology Clinical Protocol #292',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR32.4',
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
    protocolId: 'PROT-NEUR-293',
    title: 'NeurologyCerebralOntology Clinical Protocol #293',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR33.5',
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
    protocolId: 'PROT-NEUR-294',
    title: 'NeurologyCerebralOntology Clinical Protocol #294',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR34.6',
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
    protocolId: 'PROT-NEUR-295',
    title: 'NeurologyCerebralOntology Clinical Protocol #295',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR35.7',
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
    protocolId: 'PROT-NEUR-296',
    title: 'NeurologyCerebralOntology Clinical Protocol #296',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR36.8',
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
    protocolId: 'PROT-NEUR-297',
    title: 'NeurologyCerebralOntology Clinical Protocol #297',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR37.0',
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
    protocolId: 'PROT-NEUR-298',
    title: 'NeurologyCerebralOntology Clinical Protocol #298',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR38.1',
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
    protocolId: 'PROT-NEUR-299',
    title: 'NeurologyCerebralOntology Clinical Protocol #299',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR39.2',
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
    protocolId: 'PROT-NEUR-300',
    title: 'NeurologyCerebralOntology Clinical Protocol #300',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR40.3',
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
    protocolId: 'PROT-NEUR-301',
    title: 'NeurologyCerebralOntology Clinical Protocol #301',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR41.4',
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
    protocolId: 'PROT-NEUR-302',
    title: 'NeurologyCerebralOntology Clinical Protocol #302',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR42.5',
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
    protocolId: 'PROT-NEUR-303',
    title: 'NeurologyCerebralOntology Clinical Protocol #303',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR43.6',
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
    protocolId: 'PROT-NEUR-304',
    title: 'NeurologyCerebralOntology Clinical Protocol #304',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR44.7',
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
    protocolId: 'PROT-NEUR-305',
    title: 'NeurologyCerebralOntology Clinical Protocol #305',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR45.8',
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
    protocolId: 'PROT-NEUR-306',
    title: 'NeurologyCerebralOntology Clinical Protocol #306',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR46.0',
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
    protocolId: 'PROT-NEUR-307',
    title: 'NeurologyCerebralOntology Clinical Protocol #307',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR47.1',
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
    protocolId: 'PROT-NEUR-308',
    title: 'NeurologyCerebralOntology Clinical Protocol #308',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR48.2',
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
    protocolId: 'PROT-NEUR-309',
    title: 'NeurologyCerebralOntology Clinical Protocol #309',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR49.3',
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
    protocolId: 'PROT-NEUR-310',
    title: 'NeurologyCerebralOntology Clinical Protocol #310',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR50.4',
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
    protocolId: 'PROT-NEUR-311',
    title: 'NeurologyCerebralOntology Clinical Protocol #311',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR51.5',
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
    protocolId: 'PROT-NEUR-312',
    title: 'NeurologyCerebralOntology Clinical Protocol #312',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR52.6',
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
    protocolId: 'PROT-NEUR-313',
    title: 'NeurologyCerebralOntology Clinical Protocol #313',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR53.7',
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
    protocolId: 'PROT-NEUR-314',
    title: 'NeurologyCerebralOntology Clinical Protocol #314',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR54.8',
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
    protocolId: 'PROT-NEUR-315',
    title: 'NeurologyCerebralOntology Clinical Protocol #315',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR55.0',
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
    protocolId: 'PROT-NEUR-316',
    title: 'NeurologyCerebralOntology Clinical Protocol #316',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR56.1',
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
    protocolId: 'PROT-NEUR-317',
    title: 'NeurologyCerebralOntology Clinical Protocol #317',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR57.2',
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
    protocolId: 'PROT-NEUR-318',
    title: 'NeurologyCerebralOntology Clinical Protocol #318',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR58.3',
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
    protocolId: 'PROT-NEUR-319',
    title: 'NeurologyCerebralOntology Clinical Protocol #319',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR59.4',
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
    protocolId: 'PROT-NEUR-320',
    title: 'NeurologyCerebralOntology Clinical Protocol #320',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR60.5',
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
    protocolId: 'PROT-NEUR-321',
    title: 'NeurologyCerebralOntology Clinical Protocol #321',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR61.6',
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
    protocolId: 'PROT-NEUR-322',
    title: 'NeurologyCerebralOntology Clinical Protocol #322',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR62.7',
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
    protocolId: 'PROT-NEUR-323',
    title: 'NeurologyCerebralOntology Clinical Protocol #323',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR63.8',
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
    protocolId: 'PROT-NEUR-324',
    title: 'NeurologyCerebralOntology Clinical Protocol #324',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR64.0',
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
    protocolId: 'PROT-NEUR-325',
    title: 'NeurologyCerebralOntology Clinical Protocol #325',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR65.1',
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
    protocolId: 'PROT-NEUR-326',
    title: 'NeurologyCerebralOntology Clinical Protocol #326',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR66.2',
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
    protocolId: 'PROT-NEUR-327',
    title: 'NeurologyCerebralOntology Clinical Protocol #327',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR67.3',
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
    protocolId: 'PROT-NEUR-328',
    title: 'NeurologyCerebralOntology Clinical Protocol #328',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR68.4',
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
    protocolId: 'PROT-NEUR-329',
    title: 'NeurologyCerebralOntology Clinical Protocol #329',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR69.5',
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
    protocolId: 'PROT-NEUR-330',
    title: 'NeurologyCerebralOntology Clinical Protocol #330',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR70.6',
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
    protocolId: 'PROT-NEUR-331',
    title: 'NeurologyCerebralOntology Clinical Protocol #331',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR71.7',
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
    protocolId: 'PROT-NEUR-332',
    title: 'NeurologyCerebralOntology Clinical Protocol #332',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR72.8',
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
    protocolId: 'PROT-NEUR-333',
    title: 'NeurologyCerebralOntology Clinical Protocol #333',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR73.0',
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
    protocolId: 'PROT-NEUR-334',
    title: 'NeurologyCerebralOntology Clinical Protocol #334',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR74.1',
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
    protocolId: 'PROT-NEUR-335',
    title: 'NeurologyCerebralOntology Clinical Protocol #335',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR75.2',
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
    protocolId: 'PROT-NEUR-336',
    title: 'NeurologyCerebralOntology Clinical Protocol #336',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR76.3',
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
    protocolId: 'PROT-NEUR-337',
    title: 'NeurologyCerebralOntology Clinical Protocol #337',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR77.4',
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
    protocolId: 'PROT-NEUR-338',
    title: 'NeurologyCerebralOntology Clinical Protocol #338',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR78.5',
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
    protocolId: 'PROT-NEUR-339',
    title: 'NeurologyCerebralOntology Clinical Protocol #339',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR79.6',
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
    protocolId: 'PROT-NEUR-340',
    title: 'NeurologyCerebralOntology Clinical Protocol #340',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR80.7',
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
    protocolId: 'PROT-NEUR-341',
    title: 'NeurologyCerebralOntology Clinical Protocol #341',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR81.8',
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
    protocolId: 'PROT-NEUR-342',
    title: 'NeurologyCerebralOntology Clinical Protocol #342',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR82.0',
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
    protocolId: 'PROT-NEUR-343',
    title: 'NeurologyCerebralOntology Clinical Protocol #343',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR83.1',
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
    protocolId: 'PROT-NEUR-344',
    title: 'NeurologyCerebralOntology Clinical Protocol #344',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR84.2',
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
    protocolId: 'PROT-NEUR-345',
    title: 'NeurologyCerebralOntology Clinical Protocol #345',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR85.3',
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
    protocolId: 'PROT-NEUR-346',
    title: 'NeurologyCerebralOntology Clinical Protocol #346',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR86.4',
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
    protocolId: 'PROT-NEUR-347',
    title: 'NeurologyCerebralOntology Clinical Protocol #347',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR87.5',
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
    protocolId: 'PROT-NEUR-348',
    title: 'NeurologyCerebralOntology Clinical Protocol #348',
    domain: 'NeurologyCerebralOntology',
    category: 'Ischemic stroke clinical pathways',
    icd10Code: 'NEUR88.6',
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
    protocolId: 'PROT-NEUR-349',
    title: 'NeurologyCerebralOntology Clinical Protocol #349',
    domain: 'NeurologyCerebralOntology',
    category: 'epilepsy seizure frequency indexing',
    icd10Code: 'NEUR89.7',
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
    protocolId: 'PROT-NEUR-350',
    title: 'NeurologyCerebralOntology Clinical Protocol #350',
    domain: 'NeurologyCerebralOntology',
    category: 'and Parkinson motor scoring',
    icd10Code: 'NEUR90.8',
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

export class NEUR_ProtocolCatalog {
  static search(query: string): ClinicalProtocolSpec[] {
    const q = query.toLowerCase().trim();
    if (!q) return PROTOCOL_NEUR_DATASET.slice(0, 20);
    return PROTOCOL_NEUR_DATASET.filter(p => p.title.toLowerCase().includes(q) || p.icd10Code.toLowerCase().includes(q));
  }
}
