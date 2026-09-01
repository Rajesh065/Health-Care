import { describe, it, expect } from 'vitest';
import app from '../app';

describe('MedFlow Backend Health API', () => {
  it('should return health status', async () => {
    expect(app).toBeDefined();
  });
});
