import { Router } from 'express';
import { PharmacyController } from '../controllers/pharmacyController';
import { authenticate } from '../middleware/auth';
import { authorize } from '../middleware/rbac';
import { hipaaAuditMiddleware } from '../middleware/auditLogger';

const router = Router();
router.use(authenticate);

router.get('/inventory', PharmacyController.getInventory);
router.get('/prescriptions', PharmacyController.getPrescriptions);
router.post('/prescriptions', authorize(['ADMIN', 'DOCTOR']), hipaaAuditMiddleware('ISSUE_PRESCRIPTION'), PharmacyController.createPrescription);
router.post('/prescriptions/:id/dispense', authorize(['ADMIN', 'PHARMACIST']), hipaaAuditMiddleware('DISPENSE_MEDICATION'), PharmacyController.dispense);

export default router;
