import React from 'react';
import styles from './QuizDurationBox.module.scss';

interface QuizDurationBoxProps {
    duration: number
}

const QuizDurationBox = ({duration}:QuizDurationBoxProps) => {
    return (
        <div className={`${styles.quiz_duration_box}`}>
            <span>Quiz Duration :</span>
            <span className={`${styles.quiz_duration_text}`}>{Math.floor(duration)}</span>
        </div>
    );
};

export default QuizDurationBox;
