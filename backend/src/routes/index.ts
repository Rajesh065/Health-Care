import { Router } from 'express';
import { EhrController } from '../controllers/ehrController';

const router = Router();
router.get('/patients', EhrController.getPatients);
router.get('/patients/:id', EhrController.getPatientById);
router.post('/patients', EhrController.createPatient);
router.get('/appointments', EhrController.getAppointments);
router.get('/notes', EhrController.getClinicalNotes);

export default router;
