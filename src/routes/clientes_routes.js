import { Router } from 'express';
import ClienteController from '../controller/cliente_controller.js';

const router = Router();

router.get('/', ClienteController.findAll);
router.post('/', ClienteController.create);

export default router;
