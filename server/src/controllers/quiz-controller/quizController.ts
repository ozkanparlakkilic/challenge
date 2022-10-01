import asyncHandler from 'express-async-handler';
import Quiz, { IQuiz } from '../../models/quizModel';

const getAllQuizzes = asyncHandler(async (req, res) => {
    const currentDate = new Date().getTime() + Math.abs(new Date().getTimezoneOffset() * 60000);

    await Quiz.updateMany(
        { $and: [{ end_date: { $lte: new Date(currentDate) } }, { isFinish: false }] },
        { $set: { isFinish: true } },
    );

    const allQuizzes: Array<IQuiz> | [] = await Quiz.find({
        $and: [{ 'solvers.solver': { $ne: req.query.id } }, { isFinish: { $ne: true } }],
    })
        .select('title description duration start_date end_date solvers isFinish')
        .populate('solvers');

    res.json(allQuizzes);
});

const getQuizById = asyncHandler(async (req, res) => {
    const quiz: IQuiz | null = await Quiz.findById(req.params.id).select(
        'title description duration start_date end_date',
    );
    if (quiz) {
        res.status(200).json(quiz);
    } else {
        res.status(404).json('Quiz not found');
    }
});

const getQuizByIdWithQuestions = asyncHandler(async (req, res) => {
    const quiz: IQuiz | null = await Quiz.findById(req.params.id);
    const currentDate = new Date().getTime() + Math.abs(new Date().getTimezoneOffset() * 60000);

    if (quiz) {
        const newDuration = (quiz.end_date.getTime() - currentDate) / 1000;

        const newQuiz = await Quiz.findByIdAndUpdate(req.params.id, { duration: newDuration }, { new: true });
        res.status(200).json(newQuiz);
    } else {
        res.status(404).json('Quiz not found');
    }
});

const getQuizBySolverId = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const quiz = await Quiz.findOne({ solvers: { $elemMatch: { solver: id } } }).select(
        'title description duration start_date end_date isFinish solvers',
    );

    if (quiz) {
        res.status(200).json(quiz);
    } else {
        res.status(404).json('Quiz not found');
    }
});

export { getAllQuizzes, getQuizById, getQuizByIdWithQuestions, getQuizBySolverId };
