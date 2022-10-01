import express from 'express';
const router = express.Router();

import { loginController, registerController } from '../../controllers/auth-controller/authController';

router.route('/register').post(registerController);
router.route('/login').post(loginController);

export default router;
