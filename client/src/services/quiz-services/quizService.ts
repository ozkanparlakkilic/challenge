import axios from 'axios';
import { IQuiz } from '@/models';
import { baseUrl } from '@/utils';

const getAllQuiz = (userId: string | null): Promise<Array<IQuiz>> =>
    axios.get(`${baseUrl}/api/quizzes/`, { params: { id: userId } }).then((res) => res.data);

const getQuizDetail = (quizId: string | undefined): Promise<IQuiz> =>
    axios
        .get(`${baseUrl}/api/quizzes/quiz-detail/${quizId}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));

export { getAllQuiz, getQuizDetail };
