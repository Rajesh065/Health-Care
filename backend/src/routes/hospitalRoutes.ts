import { Router } from 'express';
import { HospitalController } from '../controllers/hospitalController';
import { authenticate } from '../middleware/auth';

const router = Router();
router.use(authenticate);

router.get('/beds', HospitalController.getBeds);
router.get('/occupancy', HospitalController.getOccupancy);
router.get('/shifts', HospitalController.getShifts);

export default router;
