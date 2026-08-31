import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app';

describe('AI Clinical Triage Engine', () => {
  it('should classify emergency chest pain symptoms as RED urgency', async () => {
    const res = await request(app)
      .post('/api/v1/triage/assess')
      .send({
        symptoms: ['Crushing chest pain', 'Shortness of breath'],
        duration: '30 minutes',
        severity: 9
      });

    expect(res.status).toBe(200);
    expect(res.body.data.triageColor).toBe('RED');
    expect(res.body.data.hasRedFlags).toBe(true);
  });

  it('should classify mild headache as YELLOW urgency', async () => {
    const res = await request(app)
      .post('/api/v1/triage/assess')
      .send({
        symptoms: ['Mild headache'],
        duration: '2 days',
        severity: 4
      });

    expect(res.status).toBe(200);
    expect(res.body.data.triageColor).toBe('YELLOW');
    expect(res.body.data.hasRedFlags).toBe(false);
  });
});
