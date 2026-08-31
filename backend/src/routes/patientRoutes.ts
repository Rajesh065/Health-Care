import { Router } from 'express';
import { PatientController } from '../controllers/patientController';
import { authenticate } from '../middleware/auth';
import { authorize } from '../middleware/rbac';
import { hipaaAuditMiddleware } from '../middleware/auditLogger';

const router = Router();
router.use(authenticate);

router.get('/', authorize(['ADMIN', 'DOCTOR', 'NURSE', 'PHARMACIST']), PatientController.getAll);
router.get('/:id', hipaaAuditMiddleware('VIEW_PATIENT_RECORD'), PatientController.getById);
router.post('/', authorize(['ADMIN', 'DOCTOR', 'NURSE']), hipaaAuditMiddleware('UPDATE_PATIENT_RECORD'), PatientController.create);
router.post('/:id/vitals', authorize(['ADMIN', 'DOCTOR', 'NURSE']), hipaaAuditMiddleware('UPDATE_PATIENT_RECORD'), PatientController.addVitals);
router.post('/:id/allergies', authorize(['ADMIN', 'DOCTOR', 'NURSE']), hipaaAuditMiddleware('UPDATE_PATIENT_RECORD'), PatientController.addAllergy);

export default router;
