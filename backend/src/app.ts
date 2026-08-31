import express from 'express';
import cors from 'cors';
import routes from './routes';

export const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', system: 'MedFlow OS Enterprise EHR Engine', activeBeds: 100, occupiedBeds: 84, version: '1.0.0' });
});

app.use('/api/v1', routes);
