import React from 'react';
import styles from './QuizItem.module.scss';
import { useNavigate } from 'react-router-dom';
import { IQuiz } from '@/models';
import { DateCard } from '@/pages/Quiz/components';
import { getDateWithoutTimezone } from '@/utils';

interface QuizItemProps {
    quiz: IQuiz;
    style?: Object;
}

const QuizItem = (props: QuizItemProps) => {
    const { quiz, style } = props;
    const navigate = useNavigate();    

    return (
        <div
            className={`${styles.quiz_item}`}
            onClick={() => navigate(`quiz-detail/${quiz._id}`, { replace: true })}
            style={style}
        >
            <div className={`${styles.quiz_title_box}`}>
                <h2 className={`${styles.quiz_title}`}>{quiz.title}</h2>
                <p className={`${styles.quiz_description}`}>{quiz.description}</p>
                <div className={`${styles.quiz_duration_box}`}>
                    <p>Time : </p> <span className={`${styles.quiz_duration}`}>{Math.floor(quiz.duration)}</span>
                </div>
            </div>
            <div className={`${styles.date_card_box}`}>
                <DateCard start_date={getDateWithoutTimezone(quiz.start_date)} end_date={getDateWithoutTimezone(quiz.end_date)} />
            </div>
        </div>
    );
};

export default QuizItem;
