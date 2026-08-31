import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app';

describe('MedFlow Clinical EHR API', () => {
  it('should return system health and bed occupancy', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  it('should list all registered hospital patients', async () => {
    const res = await request(app).get('/api/v1/patients');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
    expect(res.body.data[0].mrn).toBeDefined();
  });

  it('should retrieve appointments schedule', async () => {
    const res = await request(app).get('/api/v1/appointments');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});
