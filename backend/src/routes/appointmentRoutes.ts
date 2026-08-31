import { Router } from 'express';
import { AppointmentController } from '../controllers/appointmentController';
import { authenticate } from '../middleware/auth';

const router = Router();
router.use(authenticate);

router.get('/', AppointmentController.getAll);
router.get('/:id', AppointmentController.getById);
router.post('/', AppointmentController.create);
router.patch('/:id/status', AppointmentController.updateStatus);

export default router;
