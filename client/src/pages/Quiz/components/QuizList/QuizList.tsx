import React from 'react'
import './QuizList.css'

interface QuizListProps {
    children: React.ReactNode,
    classname?: string
}

const QuizList = ({ children, classname }: QuizListProps) => {
  return (
    <div className={`${classname ?? ''} quiz-list`}>{children}</div>
  )
}

export default QuizList