/**
 * FHIR R4 CarePlan Resource Definition
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient.
 * Standard: HL7 FHIR Release 4 (v4.0.1)
 */

export interface FHIRIdentifier {
  use?: 'usual' | 'official' | 'temp' | 'secondary' | 'old';
  type?: FHIRCodeableConcept;
  system?: string;
  value?: string;
  period?: FHIRPeriod;
  assigner?: FHIRReference;
}

export interface FHIRCodeableConcept {
  coding?: FHIRCoding[];
  text?: string;
}

export interface FHIRCoding {
  system?: string;
  version?: string;
  code?: string;
  display?: string;
  userSelected?: boolean;
}

export interface FHIRPeriod {
  start?: string;
  end?: string;
}

export interface FHIRReference {
  reference?: string;
  type?: string;
  identifier?: FHIRIdentifier;
  display?: string;
}

export interface FHIRHumanName {
  use?: 'usual' | 'official' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden';
  text?: string;
  family?: string;
  given?: string[];
  prefix?: string[];
  suffix?: string[];
  period?: FHIRPeriod;
}

export interface FHIRContactPoint {
  system?: 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other';
  value?: string;
  use?: 'home' | 'work' | 'temp' | 'old' | 'mobile';
  rank?: number;
  period?: FHIRPeriod;
}

export interface FHIRAddress {
  use?: 'home' | 'work' | 'temp' | 'old' | 'billing';
  type?: 'postal' | 'physical' | 'both';
  text?: string;
  line?: string[];
  city?: string;
  district?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  period?: FHIRPeriod;
}

export interface FHIRQuantity {
  value?: number;
  comparator?: '<' | '<=' | '>=' | '>';
  unit?: string;
  system?: string;
  code?: string;
}

export interface FHIRCarePlan {
  resourceType: 'CarePlan';
  id?: string;
  meta?: {
    versionId?: string;
    lastUpdated?: string;
    source?: string;
    profile?: string[];
    security?: FHIRCoding[];
    tag?: FHIRCoding[];
  };
  implicitRules?: string;
  language?: string;
  text?: {
    status: 'generated' | 'extensions' | 'additional' | 'empty';
    div: string;
  };
  identifier?: FHIRIdentifier[];
  active?: boolean;
  status?: string;
  category?: FHIRCodeableConcept[];
  code?: FHIRCodeableConcept;
  subject?: FHIRReference;
  encounter?: FHIRReference;
  effectiveDateTime?: string;
  effectivePeriod?: FHIRPeriod;
  issued?: string;
  performer?: FHIRReference[];
  valueQuantity?: FHIRQuantity;
  valueCodeableConcept?: FHIRCodeableConcept;
  valueString?: string;
  valueBoolean?: boolean;
  valueInteger?: number;
  valueRange?: { low?: FHIRQuantity; high?: FHIRQuantity };
  dataAbsentReason?: FHIRCodeableConcept;
  interpretation?: FHIRCodeableConcept[];
  note?: Array<{ authorString?: string; time?: string; text: string }>;
  bodySite?: FHIRCodeableConcept;
  method?: FHIRCodeableConcept;
  specimen?: FHIRReference;
  device?: FHIRReference;
  referenceRange?: Array<{
    low?: FHIRQuantity;
    high?: FHIRQuantity;
    type?: FHIRCodeableConcept;
    appliesTo?: FHIRCodeableConcept[];
    age?: { low?: FHIRQuantity; high?: FHIRQuantity };
    text?: string;
  }>;
  hasMember?: FHIRReference[];
  derivedFrom?: FHIRReference[];
  component?: Array<{
    code: FHIRCodeableConcept;
    valueQuantity?: FHIRQuantity;
    valueCodeableConcept?: FHIRCodeableConcept;
    valueString?: string;
    interpretation?: FHIRCodeableConcept[];
    referenceRange?: Array<{
      low?: FHIRQuantity;
      high?: FHIRQuantity;
      text?: string;
    }>;
  }>;
}

export class FHIRCarePlanValidator {
  static validate(resource: any): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    if (!resource) {
      return { isValid: false, errors: ['Resource is null or undefined'] };
    }
    if (resource.resourceType !== 'CarePlan') {
      errors.push(`Invalid resourceType: expected 'CarePlan', got '${resource.resourceType}'`);
    }
    if (resource.id && typeof resource.id !== 'string') {
      errors.push('Resource id must be a string');
    }
    if (resource.identifier && !Array.isArray(resource.identifier)) {
      errors.push('Identifier must be an array');
    }
    return { isValid: errors.length === 0, errors };
  }

  static create(initial: Partial<FHIRCarePlan>): FHIRCarePlan {
    return {
      resourceType: 'CarePlan',
      id: initial.id || 'res-' + Math.random().toString(36).substring(2, 9),
      ...initial
    };
  }

  static toJSON(resource: FHIRCarePlan): string {
    return JSON.stringify(resource, null, 2);
  }

  static fromJSON(jsonStr: string): FHIRCarePlan {
    const parsed = JSON.parse(jsonStr);
    const validation = this.validate(parsed);
    if (!validation.isValid) {
      throw new Error(`FHIR Validation Error in CarePlan: ` + validation.errors.join(', '));
    }
    return parsed as FHIRCarePlan;
  }
}
