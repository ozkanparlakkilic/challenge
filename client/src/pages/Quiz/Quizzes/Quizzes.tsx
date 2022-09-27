import React, { useEffect, useState } from 'react';
import { IQuiz } from '../../../@types';
import { Loading, PageTitle } from '../../../components/common';
import { ContentLayout, ScrollContainer } from '../../../layouts';
import { getAllQuiz } from '../../../services/quizServices/quizService';
import { useAppSelector } from '../../../store/hooks';
import { QuizItem, QuizList } from './components';

const Quizzes = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [quizzes, setQuizzes] = useState<Array<IQuiz>>([]);
    const user = useAppSelector((state) => state.user);

    useEffect(() => {
        getAllQuiz(user.data?._id)
            .then((res) => {
                setQuizzes(res);
                setLoading(true);
            })
            .catch(() => {
                console.log('Bir hata oluştu');
            });
    }, [user.data]);

    return (
        <ContentLayout>
            <PageTitle title="Quiz List" />
            {loading ? (
                <ScrollContainer>
                    <QuizList>
                        {quizzes && quizzes.map((quiz, index) => <QuizItem key={index} quiz={quiz} />)}
                    </QuizList>
                </ScrollContainer>
            ) : (
                <Loading />
            )}
        </ContentLayout>
    );
};

export default Quizzes;
