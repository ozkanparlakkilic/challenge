import axios from 'axios';
import { IQuiz } from '../../@types';
import { baseUrl } from '../../utils';

const getAllQuiz = (userId: string | undefined): Promise<Array<IQuiz>> =>
    axios
        .get(`${baseUrl}/api/quizzes/`, { params: { id: userId } })
        .then((res) => res.data)
        .catch((err) => console.log(err));

const getQuizDetail = (quizId: string | undefined): Promise<IQuiz> =>
    axios
        .get(`${baseUrl}/api/quizzes/quiz-detail/${quizId}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));

export { getAllQuiz, getQuizDetail };
