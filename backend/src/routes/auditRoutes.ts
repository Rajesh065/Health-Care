import { Router } from 'express';
import { AuditController } from '../controllers/auditController';
import { authenticate } from '../middleware/auth';
import { authorize } from '../middleware/rbac';

const router = Router();
router.use(authenticate);
router.get('/logs', authorize(['ADMIN']), AuditController.getLogs);

export default router;
