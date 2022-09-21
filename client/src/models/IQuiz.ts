import IUser from './IUser';

export default interface IQuiz {
    _id: string;
    title: string;
    description: string;
    duration: number;
    start_date: Date;
    end_date: Date;
    isFinish: boolean;
    questions: {
        title: string;
        options: { _id: string; title: string; id: number; selected: boolean }[];
        answer: object;
    }[];
    solvers: {
        _id: IUser['_id'];
        result: {
            correctAnswers: number;
            wrongAnswers: number;
            quizPoint: number;
            durationPoint: number;
            totalPoint: number;
        };
    }[];
}
