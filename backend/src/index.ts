import { app } from './app';
import { config } from './config';
import { logger } from './config/logger';

app.listen(config.port, () => {
  logger.info(`🏥 MedFlow Health Enterprise Server running on port ${config.port}`);
  logger.info(`Environment: ${config.nodeEnv}`);
  logger.info(`Health check: http://localhost:${config.port}/api/health`);
});
