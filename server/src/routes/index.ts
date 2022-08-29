import express from 'express';
const router = express.Router();
import userRoutes from './userRoutes';
import quizRoutes from './quizRoutes';

router.use('/users', userRoutes);
router.use('/quizzes', quizRoutes);

export default router;
