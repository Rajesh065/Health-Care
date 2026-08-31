import { Router } from 'express';
import { LabController } from '../controllers/labController';
import { authenticate } from '../middleware/auth';
const router = Router();
router.use(authenticate);
router.get('/', LabController.getAll);
export default router;
