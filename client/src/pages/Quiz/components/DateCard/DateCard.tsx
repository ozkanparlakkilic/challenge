import React from 'react';
import { getMonthName } from '@/utils';
import styles from './DateCard.module.scss';

interface DateCardProps {
    start_date: Date;
    end_date: Date;
    style?: Object;
}

const DateCard = (props: DateCardProps) => {
    const { start_date, end_date, style } = props;

    return (
        <div className={`${styles.date_card_wrapper}`} style={style}>
            <div>
                <p className={`${styles.date_title}`}>Quiz Start</p>
                <div className={`${styles.date_card} ${styles.quiz_start_date}`}>
                    <span>{getMonthName(start_date.getMonth())}</span>
                    <span className={`${styles.date_day}`}>{start_date.getDate()}</span>
                    <span>{start_date.getFullYear()}</span>
                </div>
            </div>
            <div>
                <p className={`${styles.date_title}`}>Quiz End</p>
                <div className={`${styles.date_card} ${styles.quiz_end_date}`}>
                    <span>{getMonthName(end_date.getMonth())}</span>
                    <span className={`${styles.date_day}`}>{end_date.getDate()}</span>
                    <span>{end_date.getFullYear()}</span>
                </div>
            </div>
        </div>
    );
};

export default DateCard;
