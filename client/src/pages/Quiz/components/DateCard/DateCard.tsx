import React from 'react';
import { getMonthName } from '../../../../utils';
import './DateCard.css';

interface DateCardProps {
    start_date: Date;
    end_date: Date;
    style?: Object;
}

const DateCard = (props: DateCardProps) => {
    const { start_date, end_date, style } = props;

    return (
        <div className="date-card-wrapper d-flex" style={style}>
            <div>
                <p className="date-title">Quiz Start</p>
                <div className="date-card quiz-start-date">
                    <span>{getMonthName(start_date.getMonth())}</span>
                    <span className="date-day">{start_date.getDate()}</span>
                    <span>{start_date.getFullYear()}</span>
                </div>
            </div>
            <div>
                <p className="date-title">Quiz End</p>
                <div className="date-card quiz-end-date">
                    <span>{getMonthName(end_date.getMonth())}</span>
                    <span className="date-day">{end_date.getDate()}</span>
                    <span>{end_date.getFullYear()}</span>
                </div>
            </div>
        </div>
    );
};

export default DateCard;
