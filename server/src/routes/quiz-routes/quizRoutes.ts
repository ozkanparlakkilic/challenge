import express from 'express';
const router = express.Router();

import {
    getAllQuizzes,
    getQuizById,
    getQuizByIdWithQuestions,
    getQuizBySolverId,
} from '../../controllers/quiz-controller/quizController';
import { checkAuth } from '../../middlewares/auth/authMiddleware';

router.route('/').get(checkAuth, getAllQuizzes);
router.route('/quiz-detail/:id').get(checkAuth, getQuizById);
router.route('/quiz/:id').get(checkAuth, getQuizByIdWithQuestions);
router.route('/quiz-result/:id').get(checkAuth, getQuizBySolverId);

export default router;
