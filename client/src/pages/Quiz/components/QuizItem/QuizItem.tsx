import React from 'react';
import './QuizCard.css';
import { useNavigate } from 'react-router-dom';
import DateCard from '../DateCard/DateCard';
import { IQuiz } from '../../../../@types';

interface QuizCardProps {
    quiz: IQuiz;
    style?: Object;
}

const QuizCard = (props: QuizCardProps) => {
    const { quiz, style } = props;
    const navigate = useNavigate();

    return (
        <div
            className="d-flex quiz-card"
            onClick={() => navigate(`quiz-detail/${quiz._id}`, { replace: true })}
            style={style}
        >
            <div className="flex-1 quiz-title-box">
                <h2 className="quiz-title">{quiz.title}</h2>
                <p className="quiz-description">{quiz.description}</p>
                <div className="d-flex align-items-center">
                    <p>Time : </p> <span className="quiz-duration">{Math.floor(quiz.duration)}</span>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-end flex-1">
                <DateCard start_date={new Date(quiz.start_date)} end_date={new Date(quiz.end_date)} />
            </div>
        </div>
    );
};

export default QuizCard;
