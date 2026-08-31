import { Router } from 'express';
import { AppointmentController } from '../controllers/appointmentController';
import { authenticate } from '../middleware/auth';
const router = Router();
router.use(authenticate);
router.get('/', AppointmentController.getAll);
router.patch('/:id/status', AppointmentController.updateStatus);
export default router;
