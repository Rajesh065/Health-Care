/**
 * Clinical Protocol Specification: DermatologyPathologyOntology
 * Medical Specialization: Psoriasis PASI severity indices, melanoma ABCDE dermatoscopy criteria, and topical biologic regimens
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

export const PROTOCOL_DERM_DATASET: ClinicalProtocolSpec[] = [
  {
    protocolId: 'PROT-DERM-001',
    title: 'DermatologyPathologyOntology Clinical Protocol #1',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM11.1',
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
    protocolId: 'PROT-DERM-002',
    title: 'DermatologyPathologyOntology Clinical Protocol #2',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM12.2',
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
    protocolId: 'PROT-DERM-003',
    title: 'DermatologyPathologyOntology Clinical Protocol #3',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM13.3',
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
    protocolId: 'PROT-DERM-004',
    title: 'DermatologyPathologyOntology Clinical Protocol #4',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM14.4',
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
    protocolId: 'PROT-DERM-005',
    title: 'DermatologyPathologyOntology Clinical Protocol #5',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM15.5',
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
    protocolId: 'PROT-DERM-006',
    title: 'DermatologyPathologyOntology Clinical Protocol #6',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM16.6',
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
    protocolId: 'PROT-DERM-007',
    title: 'DermatologyPathologyOntology Clinical Protocol #7',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM17.7',
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
    protocolId: 'PROT-DERM-008',
    title: 'DermatologyPathologyOntology Clinical Protocol #8',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM18.8',
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
    protocolId: 'PROT-DERM-009',
    title: 'DermatologyPathologyOntology Clinical Protocol #9',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM19.0',
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
    protocolId: 'PROT-DERM-010',
    title: 'DermatologyPathologyOntology Clinical Protocol #10',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM20.1',
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
    protocolId: 'PROT-DERM-011',
    title: 'DermatologyPathologyOntology Clinical Protocol #11',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM21.2',
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
    protocolId: 'PROT-DERM-012',
    title: 'DermatologyPathologyOntology Clinical Protocol #12',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM22.3',
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
    protocolId: 'PROT-DERM-013',
    title: 'DermatologyPathologyOntology Clinical Protocol #13',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM23.4',
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
    protocolId: 'PROT-DERM-014',
    title: 'DermatologyPathologyOntology Clinical Protocol #14',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM24.5',
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
    protocolId: 'PROT-DERM-015',
    title: 'DermatologyPathologyOntology Clinical Protocol #15',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM25.6',
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
    protocolId: 'PROT-DERM-016',
    title: 'DermatologyPathologyOntology Clinical Protocol #16',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM26.7',
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
    protocolId: 'PROT-DERM-017',
    title: 'DermatologyPathologyOntology Clinical Protocol #17',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM27.8',
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
    protocolId: 'PROT-DERM-018',
    title: 'DermatologyPathologyOntology Clinical Protocol #18',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM28.0',
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
    protocolId: 'PROT-DERM-019',
    title: 'DermatologyPathologyOntology Clinical Protocol #19',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM29.1',
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
    protocolId: 'PROT-DERM-020',
    title: 'DermatologyPathologyOntology Clinical Protocol #20',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM30.2',
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
    protocolId: 'PROT-DERM-021',
    title: 'DermatologyPathologyOntology Clinical Protocol #21',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM31.3',
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
    protocolId: 'PROT-DERM-022',
    title: 'DermatologyPathologyOntology Clinical Protocol #22',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM32.4',
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
    protocolId: 'PROT-DERM-023',
    title: 'DermatologyPathologyOntology Clinical Protocol #23',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM33.5',
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
    protocolId: 'PROT-DERM-024',
    title: 'DermatologyPathologyOntology Clinical Protocol #24',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM34.6',
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
    protocolId: 'PROT-DERM-025',
    title: 'DermatologyPathologyOntology Clinical Protocol #25',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM35.7',
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
    protocolId: 'PROT-DERM-026',
    title: 'DermatologyPathologyOntology Clinical Protocol #26',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM36.8',
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
    protocolId: 'PROT-DERM-027',
    title: 'DermatologyPathologyOntology Clinical Protocol #27',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM37.0',
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
    protocolId: 'PROT-DERM-028',
    title: 'DermatologyPathologyOntology Clinical Protocol #28',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM38.1',
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
    protocolId: 'PROT-DERM-029',
    title: 'DermatologyPathologyOntology Clinical Protocol #29',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM39.2',
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
    protocolId: 'PROT-DERM-030',
    title: 'DermatologyPathologyOntology Clinical Protocol #30',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM40.3',
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
    protocolId: 'PROT-DERM-031',
    title: 'DermatologyPathologyOntology Clinical Protocol #31',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM41.4',
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
    protocolId: 'PROT-DERM-032',
    title: 'DermatologyPathologyOntology Clinical Protocol #32',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM42.5',
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
    protocolId: 'PROT-DERM-033',
    title: 'DermatologyPathologyOntology Clinical Protocol #33',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM43.6',
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
    protocolId: 'PROT-DERM-034',
    title: 'DermatologyPathologyOntology Clinical Protocol #34',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM44.7',
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
    protocolId: 'PROT-DERM-035',
    title: 'DermatologyPathologyOntology Clinical Protocol #35',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM45.8',
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
    protocolId: 'PROT-DERM-036',
    title: 'DermatologyPathologyOntology Clinical Protocol #36',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM46.0',
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
    protocolId: 'PROT-DERM-037',
    title: 'DermatologyPathologyOntology Clinical Protocol #37',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM47.1',
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
    protocolId: 'PROT-DERM-038',
    title: 'DermatologyPathologyOntology Clinical Protocol #38',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM48.2',
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
    protocolId: 'PROT-DERM-039',
    title: 'DermatologyPathologyOntology Clinical Protocol #39',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM49.3',
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
    protocolId: 'PROT-DERM-040',
    title: 'DermatologyPathologyOntology Clinical Protocol #40',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM50.4',
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
    protocolId: 'PROT-DERM-041',
    title: 'DermatologyPathologyOntology Clinical Protocol #41',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM51.5',
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
    protocolId: 'PROT-DERM-042',
    title: 'DermatologyPathologyOntology Clinical Protocol #42',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM52.6',
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
    protocolId: 'PROT-DERM-043',
    title: 'DermatologyPathologyOntology Clinical Protocol #43',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM53.7',
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
    protocolId: 'PROT-DERM-044',
    title: 'DermatologyPathologyOntology Clinical Protocol #44',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM54.8',
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
    protocolId: 'PROT-DERM-045',
    title: 'DermatologyPathologyOntology Clinical Protocol #45',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM55.0',
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
    protocolId: 'PROT-DERM-046',
    title: 'DermatologyPathologyOntology Clinical Protocol #46',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM56.1',
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
    protocolId: 'PROT-DERM-047',
    title: 'DermatologyPathologyOntology Clinical Protocol #47',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM57.2',
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
    protocolId: 'PROT-DERM-048',
    title: 'DermatologyPathologyOntology Clinical Protocol #48',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM58.3',
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
    protocolId: 'PROT-DERM-049',
    title: 'DermatologyPathologyOntology Clinical Protocol #49',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM59.4',
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
    protocolId: 'PROT-DERM-050',
    title: 'DermatologyPathologyOntology Clinical Protocol #50',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM60.5',
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
    protocolId: 'PROT-DERM-051',
    title: 'DermatologyPathologyOntology Clinical Protocol #51',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM61.6',
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
    protocolId: 'PROT-DERM-052',
    title: 'DermatologyPathologyOntology Clinical Protocol #52',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM62.7',
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
    protocolId: 'PROT-DERM-053',
    title: 'DermatologyPathologyOntology Clinical Protocol #53',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM63.8',
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
    protocolId: 'PROT-DERM-054',
    title: 'DermatologyPathologyOntology Clinical Protocol #54',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM64.0',
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
    protocolId: 'PROT-DERM-055',
    title: 'DermatologyPathologyOntology Clinical Protocol #55',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM65.1',
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
    protocolId: 'PROT-DERM-056',
    title: 'DermatologyPathologyOntology Clinical Protocol #56',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM66.2',
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
    protocolId: 'PROT-DERM-057',
    title: 'DermatologyPathologyOntology Clinical Protocol #57',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM67.3',
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
    protocolId: 'PROT-DERM-058',
    title: 'DermatologyPathologyOntology Clinical Protocol #58',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM68.4',
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
    protocolId: 'PROT-DERM-059',
    title: 'DermatologyPathologyOntology Clinical Protocol #59',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM69.5',
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
    protocolId: 'PROT-DERM-060',
    title: 'DermatologyPathologyOntology Clinical Protocol #60',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM70.6',
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
    protocolId: 'PROT-DERM-061',
    title: 'DermatologyPathologyOntology Clinical Protocol #61',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM71.7',
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
    protocolId: 'PROT-DERM-062',
    title: 'DermatologyPathologyOntology Clinical Protocol #62',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM72.8',
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
    protocolId: 'PROT-DERM-063',
    title: 'DermatologyPathologyOntology Clinical Protocol #63',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM73.0',
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
    protocolId: 'PROT-DERM-064',
    title: 'DermatologyPathologyOntology Clinical Protocol #64',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM74.1',
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
    protocolId: 'PROT-DERM-065',
    title: 'DermatologyPathologyOntology Clinical Protocol #65',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM75.2',
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
    protocolId: 'PROT-DERM-066',
    title: 'DermatologyPathologyOntology Clinical Protocol #66',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM76.3',
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
    protocolId: 'PROT-DERM-067',
    title: 'DermatologyPathologyOntology Clinical Protocol #67',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM77.4',
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
    protocolId: 'PROT-DERM-068',
    title: 'DermatologyPathologyOntology Clinical Protocol #68',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM78.5',
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
    protocolId: 'PROT-DERM-069',
    title: 'DermatologyPathologyOntology Clinical Protocol #69',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM79.6',
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
    protocolId: 'PROT-DERM-070',
    title: 'DermatologyPathologyOntology Clinical Protocol #70',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM80.7',
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
    protocolId: 'PROT-DERM-071',
    title: 'DermatologyPathologyOntology Clinical Protocol #71',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM81.8',
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
    protocolId: 'PROT-DERM-072',
    title: 'DermatologyPathologyOntology Clinical Protocol #72',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM82.0',
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
    protocolId: 'PROT-DERM-073',
    title: 'DermatologyPathologyOntology Clinical Protocol #73',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM83.1',
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
    protocolId: 'PROT-DERM-074',
    title: 'DermatologyPathologyOntology Clinical Protocol #74',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM84.2',
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
    protocolId: 'PROT-DERM-075',
    title: 'DermatologyPathologyOntology Clinical Protocol #75',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM85.3',
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
    protocolId: 'PROT-DERM-076',
    title: 'DermatologyPathologyOntology Clinical Protocol #76',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM86.4',
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
    protocolId: 'PROT-DERM-077',
    title: 'DermatologyPathologyOntology Clinical Protocol #77',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM87.5',
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
    protocolId: 'PROT-DERM-078',
    title: 'DermatologyPathologyOntology Clinical Protocol #78',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM88.6',
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
    protocolId: 'PROT-DERM-079',
    title: 'DermatologyPathologyOntology Clinical Protocol #79',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM89.7',
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
    protocolId: 'PROT-DERM-080',
    title: 'DermatologyPathologyOntology Clinical Protocol #80',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM90.8',
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
    protocolId: 'PROT-DERM-081',
    title: 'DermatologyPathologyOntology Clinical Protocol #81',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM91.0',
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
    protocolId: 'PROT-DERM-082',
    title: 'DermatologyPathologyOntology Clinical Protocol #82',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM92.1',
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
    protocolId: 'PROT-DERM-083',
    title: 'DermatologyPathologyOntology Clinical Protocol #83',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM93.2',
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
    protocolId: 'PROT-DERM-084',
    title: 'DermatologyPathologyOntology Clinical Protocol #84',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM94.3',
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
    protocolId: 'PROT-DERM-085',
    title: 'DermatologyPathologyOntology Clinical Protocol #85',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM95.4',
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
    protocolId: 'PROT-DERM-086',
    title: 'DermatologyPathologyOntology Clinical Protocol #86',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM96.5',
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
    protocolId: 'PROT-DERM-087',
    title: 'DermatologyPathologyOntology Clinical Protocol #87',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM97.6',
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
    protocolId: 'PROT-DERM-088',
    title: 'DermatologyPathologyOntology Clinical Protocol #88',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM98.7',
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
    protocolId: 'PROT-DERM-089',
    title: 'DermatologyPathologyOntology Clinical Protocol #89',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM99.8',
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
    protocolId: 'PROT-DERM-090',
    title: 'DermatologyPathologyOntology Clinical Protocol #90',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM10.0',
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
    protocolId: 'PROT-DERM-091',
    title: 'DermatologyPathologyOntology Clinical Protocol #91',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM11.1',
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
    protocolId: 'PROT-DERM-092',
    title: 'DermatologyPathologyOntology Clinical Protocol #92',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM12.2',
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
    protocolId: 'PROT-DERM-093',
    title: 'DermatologyPathologyOntology Clinical Protocol #93',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM13.3',
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
    protocolId: 'PROT-DERM-094',
    title: 'DermatologyPathologyOntology Clinical Protocol #94',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM14.4',
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
    protocolId: 'PROT-DERM-095',
    title: 'DermatologyPathologyOntology Clinical Protocol #95',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM15.5',
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
    protocolId: 'PROT-DERM-096',
    title: 'DermatologyPathologyOntology Clinical Protocol #96',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM16.6',
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
    protocolId: 'PROT-DERM-097',
    title: 'DermatologyPathologyOntology Clinical Protocol #97',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM17.7',
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
    protocolId: 'PROT-DERM-098',
    title: 'DermatologyPathologyOntology Clinical Protocol #98',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM18.8',
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
    protocolId: 'PROT-DERM-099',
    title: 'DermatologyPathologyOntology Clinical Protocol #99',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM19.0',
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
    protocolId: 'PROT-DERM-100',
    title: 'DermatologyPathologyOntology Clinical Protocol #100',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM20.1',
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
    protocolId: 'PROT-DERM-101',
    title: 'DermatologyPathologyOntology Clinical Protocol #101',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM21.2',
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
    protocolId: 'PROT-DERM-102',
    title: 'DermatologyPathologyOntology Clinical Protocol #102',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM22.3',
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
    protocolId: 'PROT-DERM-103',
    title: 'DermatologyPathologyOntology Clinical Protocol #103',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM23.4',
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
    protocolId: 'PROT-DERM-104',
    title: 'DermatologyPathologyOntology Clinical Protocol #104',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM24.5',
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
    protocolId: 'PROT-DERM-105',
    title: 'DermatologyPathologyOntology Clinical Protocol #105',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM25.6',
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
    protocolId: 'PROT-DERM-106',
    title: 'DermatologyPathologyOntology Clinical Protocol #106',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM26.7',
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
    protocolId: 'PROT-DERM-107',
    title: 'DermatologyPathologyOntology Clinical Protocol #107',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM27.8',
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
    protocolId: 'PROT-DERM-108',
    title: 'DermatologyPathologyOntology Clinical Protocol #108',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM28.0',
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
    protocolId: 'PROT-DERM-109',
    title: 'DermatologyPathologyOntology Clinical Protocol #109',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM29.1',
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
    protocolId: 'PROT-DERM-110',
    title: 'DermatologyPathologyOntology Clinical Protocol #110',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM30.2',
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
    protocolId: 'PROT-DERM-111',
    title: 'DermatologyPathologyOntology Clinical Protocol #111',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM31.3',
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
    protocolId: 'PROT-DERM-112',
    title: 'DermatologyPathologyOntology Clinical Protocol #112',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM32.4',
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
    protocolId: 'PROT-DERM-113',
    title: 'DermatologyPathologyOntology Clinical Protocol #113',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM33.5',
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
    protocolId: 'PROT-DERM-114',
    title: 'DermatologyPathologyOntology Clinical Protocol #114',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM34.6',
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
    protocolId: 'PROT-DERM-115',
    title: 'DermatologyPathologyOntology Clinical Protocol #115',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM35.7',
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
    protocolId: 'PROT-DERM-116',
    title: 'DermatologyPathologyOntology Clinical Protocol #116',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM36.8',
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
    protocolId: 'PROT-DERM-117',
    title: 'DermatologyPathologyOntology Clinical Protocol #117',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM37.0',
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
    protocolId: 'PROT-DERM-118',
    title: 'DermatologyPathologyOntology Clinical Protocol #118',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM38.1',
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
    protocolId: 'PROT-DERM-119',
    title: 'DermatologyPathologyOntology Clinical Protocol #119',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM39.2',
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
    protocolId: 'PROT-DERM-120',
    title: 'DermatologyPathologyOntology Clinical Protocol #120',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM40.3',
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
    protocolId: 'PROT-DERM-121',
    title: 'DermatologyPathologyOntology Clinical Protocol #121',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM41.4',
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
    protocolId: 'PROT-DERM-122',
    title: 'DermatologyPathologyOntology Clinical Protocol #122',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM42.5',
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
    protocolId: 'PROT-DERM-123',
    title: 'DermatologyPathologyOntology Clinical Protocol #123',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM43.6',
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
    protocolId: 'PROT-DERM-124',
    title: 'DermatologyPathologyOntology Clinical Protocol #124',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM44.7',
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
    protocolId: 'PROT-DERM-125',
    title: 'DermatologyPathologyOntology Clinical Protocol #125',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM45.8',
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
    protocolId: 'PROT-DERM-126',
    title: 'DermatologyPathologyOntology Clinical Protocol #126',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM46.0',
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
    protocolId: 'PROT-DERM-127',
    title: 'DermatologyPathologyOntology Clinical Protocol #127',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM47.1',
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
    protocolId: 'PROT-DERM-128',
    title: 'DermatologyPathologyOntology Clinical Protocol #128',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM48.2',
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
    protocolId: 'PROT-DERM-129',
    title: 'DermatologyPathologyOntology Clinical Protocol #129',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM49.3',
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
    protocolId: 'PROT-DERM-130',
    title: 'DermatologyPathologyOntology Clinical Protocol #130',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM50.4',
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
    protocolId: 'PROT-DERM-131',
    title: 'DermatologyPathologyOntology Clinical Protocol #131',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM51.5',
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
    protocolId: 'PROT-DERM-132',
    title: 'DermatologyPathologyOntology Clinical Protocol #132',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM52.6',
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
    protocolId: 'PROT-DERM-133',
    title: 'DermatologyPathologyOntology Clinical Protocol #133',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM53.7',
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
    protocolId: 'PROT-DERM-134',
    title: 'DermatologyPathologyOntology Clinical Protocol #134',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM54.8',
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
    protocolId: 'PROT-DERM-135',
    title: 'DermatologyPathologyOntology Clinical Protocol #135',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM55.0',
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
    protocolId: 'PROT-DERM-136',
    title: 'DermatologyPathologyOntology Clinical Protocol #136',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM56.1',
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
    protocolId: 'PROT-DERM-137',
    title: 'DermatologyPathologyOntology Clinical Protocol #137',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM57.2',
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
    protocolId: 'PROT-DERM-138',
    title: 'DermatologyPathologyOntology Clinical Protocol #138',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM58.3',
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
    protocolId: 'PROT-DERM-139',
    title: 'DermatologyPathologyOntology Clinical Protocol #139',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM59.4',
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
    protocolId: 'PROT-DERM-140',
    title: 'DermatologyPathologyOntology Clinical Protocol #140',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM60.5',
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
    protocolId: 'PROT-DERM-141',
    title: 'DermatologyPathologyOntology Clinical Protocol #141',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM61.6',
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
    protocolId: 'PROT-DERM-142',
    title: 'DermatologyPathologyOntology Clinical Protocol #142',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM62.7',
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
    protocolId: 'PROT-DERM-143',
    title: 'DermatologyPathologyOntology Clinical Protocol #143',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM63.8',
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
    protocolId: 'PROT-DERM-144',
    title: 'DermatologyPathologyOntology Clinical Protocol #144',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM64.0',
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
    protocolId: 'PROT-DERM-145',
    title: 'DermatologyPathologyOntology Clinical Protocol #145',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM65.1',
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
    protocolId: 'PROT-DERM-146',
    title: 'DermatologyPathologyOntology Clinical Protocol #146',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM66.2',
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
    protocolId: 'PROT-DERM-147',
    title: 'DermatologyPathologyOntology Clinical Protocol #147',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM67.3',
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
    protocolId: 'PROT-DERM-148',
    title: 'DermatologyPathologyOntology Clinical Protocol #148',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM68.4',
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
    protocolId: 'PROT-DERM-149',
    title: 'DermatologyPathologyOntology Clinical Protocol #149',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM69.5',
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
    protocolId: 'PROT-DERM-150',
    title: 'DermatologyPathologyOntology Clinical Protocol #150',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM70.6',
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
    protocolId: 'PROT-DERM-151',
    title: 'DermatologyPathologyOntology Clinical Protocol #151',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM71.7',
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
    protocolId: 'PROT-DERM-152',
    title: 'DermatologyPathologyOntology Clinical Protocol #152',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM72.8',
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
    protocolId: 'PROT-DERM-153',
    title: 'DermatologyPathologyOntology Clinical Protocol #153',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM73.0',
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
    protocolId: 'PROT-DERM-154',
    title: 'DermatologyPathologyOntology Clinical Protocol #154',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM74.1',
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
    protocolId: 'PROT-DERM-155',
    title: 'DermatologyPathologyOntology Clinical Protocol #155',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM75.2',
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
    protocolId: 'PROT-DERM-156',
    title: 'DermatologyPathologyOntology Clinical Protocol #156',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM76.3',
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
    protocolId: 'PROT-DERM-157',
    title: 'DermatologyPathologyOntology Clinical Protocol #157',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM77.4',
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
    protocolId: 'PROT-DERM-158',
    title: 'DermatologyPathologyOntology Clinical Protocol #158',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM78.5',
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
    protocolId: 'PROT-DERM-159',
    title: 'DermatologyPathologyOntology Clinical Protocol #159',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM79.6',
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
    protocolId: 'PROT-DERM-160',
    title: 'DermatologyPathologyOntology Clinical Protocol #160',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM80.7',
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
    protocolId: 'PROT-DERM-161',
    title: 'DermatologyPathologyOntology Clinical Protocol #161',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM81.8',
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
    protocolId: 'PROT-DERM-162',
    title: 'DermatologyPathologyOntology Clinical Protocol #162',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM82.0',
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
    protocolId: 'PROT-DERM-163',
    title: 'DermatologyPathologyOntology Clinical Protocol #163',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM83.1',
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
    protocolId: 'PROT-DERM-164',
    title: 'DermatologyPathologyOntology Clinical Protocol #164',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM84.2',
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
    protocolId: 'PROT-DERM-165',
    title: 'DermatologyPathologyOntology Clinical Protocol #165',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM85.3',
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
    protocolId: 'PROT-DERM-166',
    title: 'DermatologyPathologyOntology Clinical Protocol #166',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM86.4',
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
    protocolId: 'PROT-DERM-167',
    title: 'DermatologyPathologyOntology Clinical Protocol #167',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM87.5',
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
    protocolId: 'PROT-DERM-168',
    title: 'DermatologyPathologyOntology Clinical Protocol #168',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM88.6',
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
    protocolId: 'PROT-DERM-169',
    title: 'DermatologyPathologyOntology Clinical Protocol #169',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM89.7',
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
    protocolId: 'PROT-DERM-170',
    title: 'DermatologyPathologyOntology Clinical Protocol #170',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM90.8',
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
    protocolId: 'PROT-DERM-171',
    title: 'DermatologyPathologyOntology Clinical Protocol #171',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM91.0',
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
    protocolId: 'PROT-DERM-172',
    title: 'DermatologyPathologyOntology Clinical Protocol #172',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM92.1',
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
    protocolId: 'PROT-DERM-173',
    title: 'DermatologyPathologyOntology Clinical Protocol #173',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM93.2',
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
    protocolId: 'PROT-DERM-174',
    title: 'DermatologyPathologyOntology Clinical Protocol #174',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM94.3',
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
    protocolId: 'PROT-DERM-175',
    title: 'DermatologyPathologyOntology Clinical Protocol #175',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM95.4',
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
    protocolId: 'PROT-DERM-176',
    title: 'DermatologyPathologyOntology Clinical Protocol #176',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM96.5',
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
    protocolId: 'PROT-DERM-177',
    title: 'DermatologyPathologyOntology Clinical Protocol #177',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM97.6',
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
    protocolId: 'PROT-DERM-178',
    title: 'DermatologyPathologyOntology Clinical Protocol #178',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM98.7',
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
    protocolId: 'PROT-DERM-179',
    title: 'DermatologyPathologyOntology Clinical Protocol #179',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM99.8',
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
    protocolId: 'PROT-DERM-180',
    title: 'DermatologyPathologyOntology Clinical Protocol #180',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM10.0',
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
    protocolId: 'PROT-DERM-181',
    title: 'DermatologyPathologyOntology Clinical Protocol #181',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM11.1',
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
    protocolId: 'PROT-DERM-182',
    title: 'DermatologyPathologyOntology Clinical Protocol #182',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM12.2',
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
    protocolId: 'PROT-DERM-183',
    title: 'DermatologyPathologyOntology Clinical Protocol #183',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM13.3',
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
    protocolId: 'PROT-DERM-184',
    title: 'DermatologyPathologyOntology Clinical Protocol #184',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM14.4',
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
    protocolId: 'PROT-DERM-185',
    title: 'DermatologyPathologyOntology Clinical Protocol #185',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM15.5',
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
    protocolId: 'PROT-DERM-186',
    title: 'DermatologyPathologyOntology Clinical Protocol #186',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM16.6',
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
    protocolId: 'PROT-DERM-187',
    title: 'DermatologyPathologyOntology Clinical Protocol #187',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM17.7',
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
    protocolId: 'PROT-DERM-188',
    title: 'DermatologyPathologyOntology Clinical Protocol #188',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM18.8',
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
    protocolId: 'PROT-DERM-189',
    title: 'DermatologyPathologyOntology Clinical Protocol #189',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM19.0',
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
    protocolId: 'PROT-DERM-190',
    title: 'DermatologyPathologyOntology Clinical Protocol #190',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM20.1',
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
    protocolId: 'PROT-DERM-191',
    title: 'DermatologyPathologyOntology Clinical Protocol #191',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM21.2',
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
    protocolId: 'PROT-DERM-192',
    title: 'DermatologyPathologyOntology Clinical Protocol #192',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM22.3',
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
    protocolId: 'PROT-DERM-193',
    title: 'DermatologyPathologyOntology Clinical Protocol #193',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM23.4',
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
    protocolId: 'PROT-DERM-194',
    title: 'DermatologyPathologyOntology Clinical Protocol #194',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM24.5',
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
    protocolId: 'PROT-DERM-195',
    title: 'DermatologyPathologyOntology Clinical Protocol #195',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM25.6',
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
    protocolId: 'PROT-DERM-196',
    title: 'DermatologyPathologyOntology Clinical Protocol #196',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM26.7',
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
    protocolId: 'PROT-DERM-197',
    title: 'DermatologyPathologyOntology Clinical Protocol #197',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM27.8',
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
    protocolId: 'PROT-DERM-198',
    title: 'DermatologyPathologyOntology Clinical Protocol #198',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM28.0',
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
    protocolId: 'PROT-DERM-199',
    title: 'DermatologyPathologyOntology Clinical Protocol #199',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM29.1',
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
    protocolId: 'PROT-DERM-200',
    title: 'DermatologyPathologyOntology Clinical Protocol #200',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM30.2',
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
    protocolId: 'PROT-DERM-201',
    title: 'DermatologyPathologyOntology Clinical Protocol #201',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM31.3',
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
    protocolId: 'PROT-DERM-202',
    title: 'DermatologyPathologyOntology Clinical Protocol #202',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM32.4',
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
    protocolId: 'PROT-DERM-203',
    title: 'DermatologyPathologyOntology Clinical Protocol #203',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM33.5',
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
    protocolId: 'PROT-DERM-204',
    title: 'DermatologyPathologyOntology Clinical Protocol #204',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM34.6',
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
    protocolId: 'PROT-DERM-205',
    title: 'DermatologyPathologyOntology Clinical Protocol #205',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM35.7',
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
    protocolId: 'PROT-DERM-206',
    title: 'DermatologyPathologyOntology Clinical Protocol #206',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM36.8',
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
    protocolId: 'PROT-DERM-207',
    title: 'DermatologyPathologyOntology Clinical Protocol #207',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM37.0',
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
    protocolId: 'PROT-DERM-208',
    title: 'DermatologyPathologyOntology Clinical Protocol #208',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM38.1',
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
    protocolId: 'PROT-DERM-209',
    title: 'DermatologyPathologyOntology Clinical Protocol #209',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM39.2',
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
    protocolId: 'PROT-DERM-210',
    title: 'DermatologyPathologyOntology Clinical Protocol #210',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM40.3',
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
    protocolId: 'PROT-DERM-211',
    title: 'DermatologyPathologyOntology Clinical Protocol #211',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM41.4',
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
    protocolId: 'PROT-DERM-212',
    title: 'DermatologyPathologyOntology Clinical Protocol #212',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM42.5',
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
    protocolId: 'PROT-DERM-213',
    title: 'DermatologyPathologyOntology Clinical Protocol #213',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM43.6',
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
    protocolId: 'PROT-DERM-214',
    title: 'DermatologyPathologyOntology Clinical Protocol #214',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM44.7',
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
    protocolId: 'PROT-DERM-215',
    title: 'DermatologyPathologyOntology Clinical Protocol #215',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM45.8',
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
    protocolId: 'PROT-DERM-216',
    title: 'DermatologyPathologyOntology Clinical Protocol #216',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM46.0',
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
    protocolId: 'PROT-DERM-217',
    title: 'DermatologyPathologyOntology Clinical Protocol #217',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM47.1',
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
    protocolId: 'PROT-DERM-218',
    title: 'DermatologyPathologyOntology Clinical Protocol #218',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM48.2',
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
    protocolId: 'PROT-DERM-219',
    title: 'DermatologyPathologyOntology Clinical Protocol #219',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM49.3',
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
    protocolId: 'PROT-DERM-220',
    title: 'DermatologyPathologyOntology Clinical Protocol #220',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM50.4',
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
    protocolId: 'PROT-DERM-221',
    title: 'DermatologyPathologyOntology Clinical Protocol #221',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM51.5',
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
    protocolId: 'PROT-DERM-222',
    title: 'DermatologyPathologyOntology Clinical Protocol #222',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM52.6',
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
    protocolId: 'PROT-DERM-223',
    title: 'DermatologyPathologyOntology Clinical Protocol #223',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM53.7',
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
    protocolId: 'PROT-DERM-224',
    title: 'DermatologyPathologyOntology Clinical Protocol #224',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM54.8',
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
    protocolId: 'PROT-DERM-225',
    title: 'DermatologyPathologyOntology Clinical Protocol #225',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM55.0',
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
    protocolId: 'PROT-DERM-226',
    title: 'DermatologyPathologyOntology Clinical Protocol #226',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM56.1',
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
    protocolId: 'PROT-DERM-227',
    title: 'DermatologyPathologyOntology Clinical Protocol #227',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM57.2',
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
    protocolId: 'PROT-DERM-228',
    title: 'DermatologyPathologyOntology Clinical Protocol #228',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM58.3',
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
    protocolId: 'PROT-DERM-229',
    title: 'DermatologyPathologyOntology Clinical Protocol #229',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM59.4',
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
    protocolId: 'PROT-DERM-230',
    title: 'DermatologyPathologyOntology Clinical Protocol #230',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM60.5',
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
    protocolId: 'PROT-DERM-231',
    title: 'DermatologyPathologyOntology Clinical Protocol #231',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM61.6',
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
    protocolId: 'PROT-DERM-232',
    title: 'DermatologyPathologyOntology Clinical Protocol #232',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM62.7',
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
    protocolId: 'PROT-DERM-233',
    title: 'DermatologyPathologyOntology Clinical Protocol #233',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM63.8',
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
    protocolId: 'PROT-DERM-234',
    title: 'DermatologyPathologyOntology Clinical Protocol #234',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM64.0',
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
    protocolId: 'PROT-DERM-235',
    title: 'DermatologyPathologyOntology Clinical Protocol #235',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM65.1',
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
    protocolId: 'PROT-DERM-236',
    title: 'DermatologyPathologyOntology Clinical Protocol #236',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM66.2',
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
    protocolId: 'PROT-DERM-237',
    title: 'DermatologyPathologyOntology Clinical Protocol #237',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM67.3',
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
    protocolId: 'PROT-DERM-238',
    title: 'DermatologyPathologyOntology Clinical Protocol #238',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM68.4',
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
    protocolId: 'PROT-DERM-239',
    title: 'DermatologyPathologyOntology Clinical Protocol #239',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM69.5',
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
    protocolId: 'PROT-DERM-240',
    title: 'DermatologyPathologyOntology Clinical Protocol #240',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM70.6',
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
    protocolId: 'PROT-DERM-241',
    title: 'DermatologyPathologyOntology Clinical Protocol #241',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM71.7',
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
    protocolId: 'PROT-DERM-242',
    title: 'DermatologyPathologyOntology Clinical Protocol #242',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM72.8',
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
    protocolId: 'PROT-DERM-243',
    title: 'DermatologyPathologyOntology Clinical Protocol #243',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM73.0',
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
    protocolId: 'PROT-DERM-244',
    title: 'DermatologyPathologyOntology Clinical Protocol #244',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM74.1',
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
    protocolId: 'PROT-DERM-245',
    title: 'DermatologyPathologyOntology Clinical Protocol #245',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM75.2',
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
    protocolId: 'PROT-DERM-246',
    title: 'DermatologyPathologyOntology Clinical Protocol #246',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM76.3',
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
    protocolId: 'PROT-DERM-247',
    title: 'DermatologyPathologyOntology Clinical Protocol #247',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM77.4',
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
    protocolId: 'PROT-DERM-248',
    title: 'DermatologyPathologyOntology Clinical Protocol #248',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM78.5',
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
    protocolId: 'PROT-DERM-249',
    title: 'DermatologyPathologyOntology Clinical Protocol #249',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM79.6',
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
    protocolId: 'PROT-DERM-250',
    title: 'DermatologyPathologyOntology Clinical Protocol #250',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM80.7',
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
    protocolId: 'PROT-DERM-251',
    title: 'DermatologyPathologyOntology Clinical Protocol #251',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM81.8',
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
    protocolId: 'PROT-DERM-252',
    title: 'DermatologyPathologyOntology Clinical Protocol #252',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM82.0',
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
    protocolId: 'PROT-DERM-253',
    title: 'DermatologyPathologyOntology Clinical Protocol #253',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM83.1',
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
    protocolId: 'PROT-DERM-254',
    title: 'DermatologyPathologyOntology Clinical Protocol #254',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM84.2',
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
    protocolId: 'PROT-DERM-255',
    title: 'DermatologyPathologyOntology Clinical Protocol #255',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM85.3',
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
    protocolId: 'PROT-DERM-256',
    title: 'DermatologyPathologyOntology Clinical Protocol #256',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM86.4',
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
    protocolId: 'PROT-DERM-257',
    title: 'DermatologyPathologyOntology Clinical Protocol #257',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM87.5',
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
    protocolId: 'PROT-DERM-258',
    title: 'DermatologyPathologyOntology Clinical Protocol #258',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM88.6',
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
    protocolId: 'PROT-DERM-259',
    title: 'DermatologyPathologyOntology Clinical Protocol #259',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM89.7',
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
    protocolId: 'PROT-DERM-260',
    title: 'DermatologyPathologyOntology Clinical Protocol #260',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM90.8',
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
    protocolId: 'PROT-DERM-261',
    title: 'DermatologyPathologyOntology Clinical Protocol #261',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM91.0',
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
    protocolId: 'PROT-DERM-262',
    title: 'DermatologyPathologyOntology Clinical Protocol #262',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM92.1',
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
    protocolId: 'PROT-DERM-263',
    title: 'DermatologyPathologyOntology Clinical Protocol #263',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM93.2',
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
    protocolId: 'PROT-DERM-264',
    title: 'DermatologyPathologyOntology Clinical Protocol #264',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM94.3',
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
    protocolId: 'PROT-DERM-265',
    title: 'DermatologyPathologyOntology Clinical Protocol #265',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM95.4',
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
    protocolId: 'PROT-DERM-266',
    title: 'DermatologyPathologyOntology Clinical Protocol #266',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM96.5',
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
    protocolId: 'PROT-DERM-267',
    title: 'DermatologyPathologyOntology Clinical Protocol #267',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM97.6',
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
    protocolId: 'PROT-DERM-268',
    title: 'DermatologyPathologyOntology Clinical Protocol #268',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM98.7',
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
    protocolId: 'PROT-DERM-269',
    title: 'DermatologyPathologyOntology Clinical Protocol #269',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM99.8',
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
    protocolId: 'PROT-DERM-270',
    title: 'DermatologyPathologyOntology Clinical Protocol #270',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM10.0',
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
    protocolId: 'PROT-DERM-271',
    title: 'DermatologyPathologyOntology Clinical Protocol #271',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM11.1',
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
    protocolId: 'PROT-DERM-272',
    title: 'DermatologyPathologyOntology Clinical Protocol #272',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM12.2',
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
    protocolId: 'PROT-DERM-273',
    title: 'DermatologyPathologyOntology Clinical Protocol #273',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM13.3',
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
    protocolId: 'PROT-DERM-274',
    title: 'DermatologyPathologyOntology Clinical Protocol #274',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM14.4',
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
    protocolId: 'PROT-DERM-275',
    title: 'DermatologyPathologyOntology Clinical Protocol #275',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM15.5',
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
    protocolId: 'PROT-DERM-276',
    title: 'DermatologyPathologyOntology Clinical Protocol #276',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM16.6',
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
    protocolId: 'PROT-DERM-277',
    title: 'DermatologyPathologyOntology Clinical Protocol #277',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM17.7',
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
    protocolId: 'PROT-DERM-278',
    title: 'DermatologyPathologyOntology Clinical Protocol #278',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM18.8',
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
    protocolId: 'PROT-DERM-279',
    title: 'DermatologyPathologyOntology Clinical Protocol #279',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM19.0',
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
    protocolId: 'PROT-DERM-280',
    title: 'DermatologyPathologyOntology Clinical Protocol #280',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM20.1',
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
    protocolId: 'PROT-DERM-281',
    title: 'DermatologyPathologyOntology Clinical Protocol #281',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM21.2',
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
    protocolId: 'PROT-DERM-282',
    title: 'DermatologyPathologyOntology Clinical Protocol #282',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM22.3',
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
    protocolId: 'PROT-DERM-283',
    title: 'DermatologyPathologyOntology Clinical Protocol #283',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM23.4',
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
    protocolId: 'PROT-DERM-284',
    title: 'DermatologyPathologyOntology Clinical Protocol #284',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM24.5',
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
    protocolId: 'PROT-DERM-285',
    title: 'DermatologyPathologyOntology Clinical Protocol #285',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM25.6',
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
    protocolId: 'PROT-DERM-286',
    title: 'DermatologyPathologyOntology Clinical Protocol #286',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM26.7',
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
    protocolId: 'PROT-DERM-287',
    title: 'DermatologyPathologyOntology Clinical Protocol #287',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM27.8',
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
    protocolId: 'PROT-DERM-288',
    title: 'DermatologyPathologyOntology Clinical Protocol #288',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM28.0',
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
    protocolId: 'PROT-DERM-289',
    title: 'DermatologyPathologyOntology Clinical Protocol #289',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM29.1',
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
    protocolId: 'PROT-DERM-290',
    title: 'DermatologyPathologyOntology Clinical Protocol #290',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM30.2',
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
    protocolId: 'PROT-DERM-291',
    title: 'DermatologyPathologyOntology Clinical Protocol #291',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM31.3',
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
    protocolId: 'PROT-DERM-292',
    title: 'DermatologyPathologyOntology Clinical Protocol #292',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM32.4',
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
    protocolId: 'PROT-DERM-293',
    title: 'DermatologyPathologyOntology Clinical Protocol #293',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM33.5',
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
    protocolId: 'PROT-DERM-294',
    title: 'DermatologyPathologyOntology Clinical Protocol #294',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM34.6',
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
    protocolId: 'PROT-DERM-295',
    title: 'DermatologyPathologyOntology Clinical Protocol #295',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM35.7',
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
    protocolId: 'PROT-DERM-296',
    title: 'DermatologyPathologyOntology Clinical Protocol #296',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM36.8',
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
    protocolId: 'PROT-DERM-297',
    title: 'DermatologyPathologyOntology Clinical Protocol #297',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM37.0',
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
    protocolId: 'PROT-DERM-298',
    title: 'DermatologyPathologyOntology Clinical Protocol #298',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM38.1',
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
    protocolId: 'PROT-DERM-299',
    title: 'DermatologyPathologyOntology Clinical Protocol #299',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM39.2',
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
    protocolId: 'PROT-DERM-300',
    title: 'DermatologyPathologyOntology Clinical Protocol #300',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM40.3',
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
    protocolId: 'PROT-DERM-301',
    title: 'DermatologyPathologyOntology Clinical Protocol #301',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM41.4',
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
    protocolId: 'PROT-DERM-302',
    title: 'DermatologyPathologyOntology Clinical Protocol #302',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM42.5',
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
    protocolId: 'PROT-DERM-303',
    title: 'DermatologyPathologyOntology Clinical Protocol #303',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM43.6',
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
    protocolId: 'PROT-DERM-304',
    title: 'DermatologyPathologyOntology Clinical Protocol #304',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM44.7',
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
    protocolId: 'PROT-DERM-305',
    title: 'DermatologyPathologyOntology Clinical Protocol #305',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM45.8',
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
    protocolId: 'PROT-DERM-306',
    title: 'DermatologyPathologyOntology Clinical Protocol #306',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM46.0',
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
    protocolId: 'PROT-DERM-307',
    title: 'DermatologyPathologyOntology Clinical Protocol #307',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM47.1',
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
    protocolId: 'PROT-DERM-308',
    title: 'DermatologyPathologyOntology Clinical Protocol #308',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM48.2',
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
    protocolId: 'PROT-DERM-309',
    title: 'DermatologyPathologyOntology Clinical Protocol #309',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM49.3',
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
    protocolId: 'PROT-DERM-310',
    title: 'DermatologyPathologyOntology Clinical Protocol #310',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM50.4',
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
    protocolId: 'PROT-DERM-311',
    title: 'DermatologyPathologyOntology Clinical Protocol #311',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM51.5',
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
    protocolId: 'PROT-DERM-312',
    title: 'DermatologyPathologyOntology Clinical Protocol #312',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM52.6',
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
    protocolId: 'PROT-DERM-313',
    title: 'DermatologyPathologyOntology Clinical Protocol #313',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM53.7',
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
    protocolId: 'PROT-DERM-314',
    title: 'DermatologyPathologyOntology Clinical Protocol #314',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM54.8',
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
    protocolId: 'PROT-DERM-315',
    title: 'DermatologyPathologyOntology Clinical Protocol #315',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM55.0',
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
    protocolId: 'PROT-DERM-316',
    title: 'DermatologyPathologyOntology Clinical Protocol #316',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM56.1',
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
    protocolId: 'PROT-DERM-317',
    title: 'DermatologyPathologyOntology Clinical Protocol #317',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM57.2',
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
    protocolId: 'PROT-DERM-318',
    title: 'DermatologyPathologyOntology Clinical Protocol #318',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM58.3',
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
    protocolId: 'PROT-DERM-319',
    title: 'DermatologyPathologyOntology Clinical Protocol #319',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM59.4',
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
    protocolId: 'PROT-DERM-320',
    title: 'DermatologyPathologyOntology Clinical Protocol #320',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM60.5',
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
    protocolId: 'PROT-DERM-321',
    title: 'DermatologyPathologyOntology Clinical Protocol #321',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM61.6',
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
    protocolId: 'PROT-DERM-322',
    title: 'DermatologyPathologyOntology Clinical Protocol #322',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM62.7',
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
    protocolId: 'PROT-DERM-323',
    title: 'DermatologyPathologyOntology Clinical Protocol #323',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM63.8',
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
    protocolId: 'PROT-DERM-324',
    title: 'DermatologyPathologyOntology Clinical Protocol #324',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM64.0',
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
    protocolId: 'PROT-DERM-325',
    title: 'DermatologyPathologyOntology Clinical Protocol #325',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM65.1',
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
    protocolId: 'PROT-DERM-326',
    title: 'DermatologyPathologyOntology Clinical Protocol #326',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM66.2',
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
    protocolId: 'PROT-DERM-327',
    title: 'DermatologyPathologyOntology Clinical Protocol #327',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM67.3',
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
    protocolId: 'PROT-DERM-328',
    title: 'DermatologyPathologyOntology Clinical Protocol #328',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM68.4',
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
    protocolId: 'PROT-DERM-329',
    title: 'DermatologyPathologyOntology Clinical Protocol #329',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM69.5',
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
    protocolId: 'PROT-DERM-330',
    title: 'DermatologyPathologyOntology Clinical Protocol #330',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM70.6',
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
    protocolId: 'PROT-DERM-331',
    title: 'DermatologyPathologyOntology Clinical Protocol #331',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM71.7',
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
    protocolId: 'PROT-DERM-332',
    title: 'DermatologyPathologyOntology Clinical Protocol #332',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM72.8',
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
    protocolId: 'PROT-DERM-333',
    title: 'DermatologyPathologyOntology Clinical Protocol #333',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM73.0',
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
    protocolId: 'PROT-DERM-334',
    title: 'DermatologyPathologyOntology Clinical Protocol #334',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM74.1',
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
    protocolId: 'PROT-DERM-335',
    title: 'DermatologyPathologyOntology Clinical Protocol #335',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM75.2',
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
    protocolId: 'PROT-DERM-336',
    title: 'DermatologyPathologyOntology Clinical Protocol #336',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM76.3',
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
    protocolId: 'PROT-DERM-337',
    title: 'DermatologyPathologyOntology Clinical Protocol #337',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM77.4',
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
    protocolId: 'PROT-DERM-338',
    title: 'DermatologyPathologyOntology Clinical Protocol #338',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM78.5',
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
    protocolId: 'PROT-DERM-339',
    title: 'DermatologyPathologyOntology Clinical Protocol #339',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM79.6',
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
    protocolId: 'PROT-DERM-340',
    title: 'DermatologyPathologyOntology Clinical Protocol #340',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM80.7',
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
    protocolId: 'PROT-DERM-341',
    title: 'DermatologyPathologyOntology Clinical Protocol #341',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM81.8',
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
    protocolId: 'PROT-DERM-342',
    title: 'DermatologyPathologyOntology Clinical Protocol #342',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM82.0',
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
    protocolId: 'PROT-DERM-343',
    title: 'DermatologyPathologyOntology Clinical Protocol #343',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM83.1',
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
    protocolId: 'PROT-DERM-344',
    title: 'DermatologyPathologyOntology Clinical Protocol #344',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM84.2',
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
    protocolId: 'PROT-DERM-345',
    title: 'DermatologyPathologyOntology Clinical Protocol #345',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM85.3',
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
    protocolId: 'PROT-DERM-346',
    title: 'DermatologyPathologyOntology Clinical Protocol #346',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM86.4',
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
    protocolId: 'PROT-DERM-347',
    title: 'DermatologyPathologyOntology Clinical Protocol #347',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM87.5',
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
    protocolId: 'PROT-DERM-348',
    title: 'DermatologyPathologyOntology Clinical Protocol #348',
    domain: 'DermatologyPathologyOntology',
    category: 'Psoriasis PASI severity indices',
    icd10Code: 'DERM88.6',
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
    protocolId: 'PROT-DERM-349',
    title: 'DermatologyPathologyOntology Clinical Protocol #349',
    domain: 'DermatologyPathologyOntology',
    category: 'melanoma ABCDE dermatoscopy criteria',
    icd10Code: 'DERM89.7',
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
    protocolId: 'PROT-DERM-350',
    title: 'DermatologyPathologyOntology Clinical Protocol #350',
    domain: 'DermatologyPathologyOntology',
    category: 'and topical biologic regimens',
    icd10Code: 'DERM90.8',
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

export class DERM_ProtocolCatalog {
  static search(query: string): ClinicalProtocolSpec[] {
    const q = query.toLowerCase().trim();
    if (!q) return PROTOCOL_DERM_DATASET.slice(0, 20);
    return PROTOCOL_DERM_DATASET.filter(p => p.title.toLowerCase().includes(q) || p.icd10Code.toLowerCase().includes(q));
  }
}
