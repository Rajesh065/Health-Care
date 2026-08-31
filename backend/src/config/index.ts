import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'medflow-enterprise-secret-jwt-key-2026',
  jwtExpiresIn: '24h',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  hospitalName: 'MedFlow Memorial Health System',
  hipaaComplianceEnabled: true,
};
