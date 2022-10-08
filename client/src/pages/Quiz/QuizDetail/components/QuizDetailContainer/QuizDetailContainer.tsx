import React from 'react'
import styles from './QuizDetailContainer.module.scss'

interface QuizDetailContainerProps {
    children: React.ReactNode
}

const QuizDetailContainer = ({children}:QuizDetailContainerProps) => {
  return (
    <div className={`${styles.quiz_detail_container}`}>{children}</div>
  )
}

export default QuizDetailContainer