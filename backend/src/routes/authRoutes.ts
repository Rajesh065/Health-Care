import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { authenticate } from '../middleware/auth';
import { hipaaAuditMiddleware } from '../middleware/auditLogger';

const router = Router();
router.post('/login', hipaaAuditMiddleware('LOGIN'), AuthController.login);
router.get('/me', authenticate, AuthController.getProfile);
router.get('/users', authenticate, AuthController.listUsers);

export default router;
