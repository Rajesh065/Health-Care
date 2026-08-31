import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app';

describe('Auth & Security API', () => {
  it('should return health check ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
    expect(res.body.hipaaComplianceActive).toBe(true);
  });

  it('should authenticate a doctor and return a valid JWT', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'doctor@medflow.health' });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.token).toBeDefined();
    expect(res.body.data.user.role).toBe('DOCTOR');
  });

  it('should reject unauthenticated profile requests', async () => {
    const res = await request(app).get('/api/v1/auth/me');
    expect(res.status).toBe(401);
  });
});
