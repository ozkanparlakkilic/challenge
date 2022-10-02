import React, { useEffect, useState } from 'react';
import { Loading, PageTitle } from '../../../components/common';
import { useAuth } from '../../../hooks/useAuth';
import { ContentLayout, ScrollContainer } from '../../../layouts';
import { IQuiz } from '../../../models';
import { getAllQuiz } from '../../../services/quiz-services/quizService';
import { QuizItem, QuizList } from './components';

const Quizzes = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [quizzes, setQuizzes] = useState<Array<IQuiz>>([]);

    const { loggedUser: { userId } } = useAuth()
    
    useEffect(() => {
        getAllQuiz(userId)
            .then((res) => {
                setQuizzes(res);
                setLoading(true);
            })
            .catch(() => {
                console.log('Bir hata oluştu');
            });
    }, [userId]);

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
