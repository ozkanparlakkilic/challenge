import React from 'react';
import './QuizDurationBox.css';

interface QuizDurationBoxProps {
    duration: number
}

const QuizDurationBox = ({duration}:QuizDurationBoxProps) => {
    return (
        <div className="quiz-duration-box">
            <span>Quiz Duration :</span>
            <span className="duration-text">{Math.floor(duration)}</span>
        </div>
    );
};

export default QuizDurationBox;
