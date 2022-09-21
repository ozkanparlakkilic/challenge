import React, { useEffect, useState } from 'react';
import { IQuiz } from '../../../@types';
import { Loading, PageTitle } from '../../../components/common';
import { ContentLayout, ScrollContainer } from '../../../layouts';
import { getAllQuiz } from '../../../services/quizServices/quizService';
import { useAppSelector } from '../../../store/hooks';
import { QuizCard } from '../components';
import './QuizList.css';

const QuizList = () => {
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
                    <div className="d-flex flex-direction-column justify-content-center align-items-center quiz-list">
                        {quizzes && quizzes.map((quiz, index) => <QuizCard key={index} quiz={quiz} />)}
                    </div>
                </ScrollContainer>
            ) : (
                <Loading />
            )}
        </ContentLayout>
    );
};

export default QuizList;
