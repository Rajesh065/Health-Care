import { Router } from 'express';
import authRoutes from './authRoutes';
import patientRoutes from './patientRoutes';
import appointmentRoutes from './appointmentRoutes';
import clinicalRoutes from './clinicalRoutes';
import pharmacyRoutes from './pharmacyRoutes';
import labRoutes from './labRoutes';
import billingRoutes from './billingRoutes';
import hospitalRoutes from './hospitalRoutes';
import auditRoutes from './auditRoutes';
import triageRoutes from './triageRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/patients', patientRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/clinical', clinicalRoutes);
router.use('/pharmacy', pharmacyRoutes);
router.use('/lab', labRoutes);
router.use('/billing', billingRoutes);
router.use('/hospital', hospitalRoutes);
router.use('/audit', auditRoutes);
router.use('/triage', triageRoutes);

export default router;
