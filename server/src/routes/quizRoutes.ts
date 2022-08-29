import express from 'express';
const router = express.Router();

import { getAllQuizzes, getQuizById, getQuizByIdWithQuestions, getQuizBySolverId } from '../controllers/quizController';

router.route('/').get(getAllQuizzes);
router.route('/quiz-detail/:id').get(getQuizById);
router.route('/quiz/:id').get(getQuizByIdWithQuestions);
router.route('/quiz-result/:id').get(getQuizBySolverId);

export default router;
