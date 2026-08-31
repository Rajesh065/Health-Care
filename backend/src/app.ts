import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';

export const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    system: 'MedFlow Health OS Enterprise API',
    timestamp: new Date().toISOString(),
    hipaaComplianceActive: true
  });
});

app.use('/api/v1', routes);

app.use(errorHandler);
