import express from 'express';
const router = express.Router();
import userRoutes from './auth-routes/authRoutes';
import quizRoutes from './quiz-routes/quizRoutes';

router.use('/auth', userRoutes);
router.use('/quizzes', quizRoutes);

export default router;
