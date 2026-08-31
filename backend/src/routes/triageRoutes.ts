import { Router } from 'express';
import { TriageController } from '../controllers/triageController';

const router = Router();
router.post('/assess', TriageController.assess);

export default router;
