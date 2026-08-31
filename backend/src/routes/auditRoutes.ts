import { Router } from 'express';
import { AuditController } from '../controllers/auditController';
import { authenticate } from '../middleware/auth';
const router = Router();
router.use(authenticate);
router.get('/logs', AuditController.getLogs);
export default router;
