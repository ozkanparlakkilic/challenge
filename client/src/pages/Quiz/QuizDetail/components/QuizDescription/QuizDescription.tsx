import React from 'react'
import styles from './QuizDescription.module.scss';

interface QuizDescriptionProps {
    description: string
}

const QuizDescription = ({description}:QuizDescriptionProps) => {
  return (
    <p className={`${styles.quiz_text}`}>{description}</p>
  )
}

export default QuizDescription