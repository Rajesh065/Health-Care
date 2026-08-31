import { Router } from 'express';
import { BillingController } from '../controllers/billingController';
import { authenticate } from '../middleware/auth';
const router = Router();
router.use(authenticate);
router.get('/invoices', BillingController.getInvoices);
router.get('/cpt-codes', BillingController.getCptCodes);
export default router;
