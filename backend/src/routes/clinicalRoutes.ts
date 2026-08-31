import { Router } from 'express';
import { ClinicalController } from '../controllers/clinicalController';
import { authenticate } from '../middleware/auth';
import { authorize } from '../middleware/rbac';
import { hipaaAuditMiddleware } from '../middleware/auditLogger';

const router = Router();
router.use(authenticate);

router.get('/diagnoses/search', ClinicalController.searchDiagnoses);
router.post('/safety-check', ClinicalController.checkSafety);
router.get('/soap/:patientId', authorize(['ADMIN', 'DOCTOR', 'NURSE']), hipaaAuditMiddleware('VIEW_PATIENT_RECORD'), ClinicalController.getSoapNotes);
router.post('/soap', authorize(['ADMIN', 'DOCTOR']), hipaaAuditMiddleware('CREATE_SOAP_NOTE'), ClinicalController.createSoapNote);

export default router;
