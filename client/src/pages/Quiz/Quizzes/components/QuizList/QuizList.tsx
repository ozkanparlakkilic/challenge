import React from 'react'
import styles from './QuizList.module.scss';

interface QuizListProps {
    children: React.ReactNode,
    classname?: string
}

const QuizList = ({ children, classname }: QuizListProps) => {
  return (
    <div className={`${classname ?? ''} ${styles.quiz_list}`}>{children}</div>
  )
}

export default QuizList