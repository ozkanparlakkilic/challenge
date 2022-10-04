import express from 'express';
const router = express.Router();

import { loginController, registerController, tokenController } from '../../controllers/auth-controller/authController';

router.route('/register').post(registerController);
router.route('/login').post(loginController);
router.route('/token').post(tokenController);

export default router;
