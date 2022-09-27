import React from 'react';
import './QuizItem.css';
import { useNavigate } from 'react-router-dom';
import DateCard from '../../../components/DateCard/DateCard';
import { IQuiz } from '../../../../../@types';

interface QuizItemProps {
    quiz: IQuiz;
    style?: Object;
}

const QuizItem = (props: QuizItemProps) => {
    const { quiz, style } = props;
    const navigate = useNavigate();

    return (
        <div
            className="d-flex quiz-item"
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

export default QuizItem;
