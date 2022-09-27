import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IQuiz } from '../../../@types';
import { Button, Loading, PageTitle } from '../../../components/common';
import { ContentLayout } from '../../../layouts';
import { getQuizDetail } from '../../../services/quizServices/quizService';
import { DateCard } from '../components';
import { QuizDescription, QuizTitle, QuizDurationBox, QuizDetailContainer } from './components';
import './QuizDetail.css';

const QuizDetail = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [quiz, setQuiz] = useState<IQuiz>();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        getQuizDetail(id)
            .then((res) => {
                setQuiz(res);
                setLoading(true);
            })
            .catch(() => {
                console.log('Bir hata oluştu');
            });
    }, [id]);

    return (
        <ContentLayout>
            <PageTitle title="Quiz Detail" />
            {loading && quiz ? (
                <QuizDetailContainer>
                    <QuizTitle title={quiz.title} />
                    <QuizDescription description={quiz.description} />
                    <QuizDurationBox duration={quiz.duration} />
                    <DateCard start_date={new Date(quiz.start_date)} end_date={new Date(quiz.end_date)} />
                    <Button
                        title="Start"
                        onClick={() => navigate(`../quiz/${quiz._id}`, { replace: true })}
                        classname="extra-button-style"
                    />
                </QuizDetailContainer>
            ) : (
                <Loading />
            )}
        </ContentLayout>
    );
};

export default QuizDetail;
