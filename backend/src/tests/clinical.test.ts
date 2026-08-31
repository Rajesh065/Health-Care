import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app';
import { checkDrugInteractions } from '../utils/drugInteractions';
import { searchIcd10 } from '../utils/icd10Data';

describe('Clinical CDS and Drug Safety Engine', () => {
  it('should detect major drug interactions between Warfarin and Aspirin', () => {
    const interactions = checkDrugInteractions(['Warfarin 5mg', 'Aspirin 81mg']);
    expect(interactions.length).toBeGreaterThan(0);
    expect(interactions[0].severity).toBe('MAJOR');
  });

  it('should search ICD-10 diagnostic codes', () => {
    const results = searchIcd10('hypertension');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].code).toBe('I10');
  });

  it('should perform clinical safety check for patient allergies', async () => {
    const loginRes = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'doctor@medflow.health' });
    const token = loginRes.body.data.token;

    const res = await request(app)
      .post('/api/v1/clinical/safety-check')
      .set('Authorization', `Bearer ${token}`)
      .send({
        patientId: 'pat-1001',
        medications: ['Penicillin VK 500mg']
      });

    expect(res.status).toBe(200);
    expect(res.body.data.allergyWarnings.length).toBeGreaterThan(0);
    expect(res.body.data.isSafe).toBe(false);
  });
});
