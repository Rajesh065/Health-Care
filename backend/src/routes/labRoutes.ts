import { Router } from 'express';
import { LabController } from '../controllers/labController';
import { authenticate } from '../middleware/auth';
import { authorize } from '../middleware/rbac';
import { hipaaAuditMiddleware } from '../middleware/auditLogger';

const router = Router();
router.use(authenticate);

router.get('/', LabController.getAll);
router.get('/:id', hipaaAuditMiddleware('VIEW_LAB_RESULTS'), LabController.getById);
router.post('/', authorize(['ADMIN', 'DOCTOR']), LabController.createOrder);
router.patch('/:id/results', authorize(['ADMIN', 'LAB_TECH']), LabController.updateResults);

export default router;
