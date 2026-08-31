import { Router } from 'express';
import { BillingController } from '../controllers/billingController';
import { authenticate } from '../middleware/auth';
import { authorize } from '../middleware/rbac';
import { hipaaAuditMiddleware } from '../middleware/auditLogger';

const router = Router();
router.use(authenticate);

router.get('/cpt-codes', BillingController.getCptCodes);
router.get('/invoices', BillingController.getInvoices);
router.get('/claims', BillingController.getClaims);
router.post('/invoices', authorize(['ADMIN']), hipaaAuditMiddleware('GENERATE_INVOICE'), BillingController.createInvoice);
router.post('/invoices/:id/pay', BillingController.payInvoice);

export default router;
