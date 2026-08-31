import { mockDataStore } from '../models/mockData';
import { TriageAssessment } from '../models/types';

export class TriageService {
  static assessSymptoms(symptoms: string[], duration: string, severity: number): TriageAssessment {
    const sLower = symptoms.map(s => s.toLowerCase());
    let hasRedFlags = false;
    let triageColor: TriageAssessment['triageColor'] = 'GREEN';
    let specialty = 'General Medicine';
    let action = 'Schedule standard outpatient consultation.';

    // Red flag emergency checks
    if (sLower.some(s => s.includes('chest pain') || s.includes('shortness of breath') || s.includes('unconscious') || s.includes('severe bleeding'))) {
      hasRedFlags = true;
      triageColor = 'RED';
      specialty = 'Emergency Medicine / Cardiology';
      action = 'EMERGENCY: Immediate Emergency Room intake or call 911.';
    } else if (severity >= 7 || sLower.some(s => s.includes('fever') && severity >= 6)) {
      triageColor = 'ORANGE';
      specialty = 'Urgent Care / Internal Medicine';
      action = 'Urgent evaluation needed within 12-24 hours.';
    } else if (severity >= 4 || sLower.some(s => s.includes('headache') || s.includes('dizziness'))) {
      triageColor = 'YELLOW';
      specialty = 'Internal Medicine';
      action = 'Outpatient consultation recommended within 48-72 hours.';
    }

    const assessment: TriageAssessment = {
      id: 'tri-' + Date.now(),
      symptoms,
      duration,
      severityScore: severity,
      hasRedFlags,
      triageColor,
      recommendedAction: action,
      suggestedSpecialty: specialty,
      summary: `Triage evaluation for symptoms (${symptoms.join(', ')}). Severity level ${severity}/10 resulting in ${triageColor} urgency category.`,
      createdAt: new Date().toISOString()
    };

    mockDataStore.triageAssessments.unshift(assessment);
    return assessment;
  }
}
