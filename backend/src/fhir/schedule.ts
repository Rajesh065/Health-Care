export interface FHIRSchedule {
  resourceType: 'Schedule';
  id?: string;
  identifier?: Array<{ system?: string; value?: string }>;
  status?: string;
  category?: Array<{ text?: string; coding?: Array<{ code?: string; display?: string }> }>;
  code?: { text?: string; coding?: Array<{ code?: string; display?: string }> };
  subject?: { reference?: string; display?: string };
  encounter?: { reference?: string };
  effectiveDateTime?: string;
  performer?: Array<{ reference?: string; display?: string }>;
  note?: Array<{ text: string }>;
}

export class FHIRScheduleValidator {
  static validate(r: any): { isValid: boolean; errors: string[] } {
    return { isValid: r && r.resourceType === 'Schedule', errors: [] };
  }
}
