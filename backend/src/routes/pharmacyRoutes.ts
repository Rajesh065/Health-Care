import { Router } from 'express';
import { PharmacyController } from '../controllers/pharmacyController';
import { authenticate } from '../middleware/auth';
const router = Router();
router.use(authenticate);
router.get('/inventory', PharmacyController.getInventory);
router.get('/prescriptions', PharmacyController.getPrescriptions);
router.post('/prescriptions/:id/dispense', PharmacyController.dispense);
export default router;
