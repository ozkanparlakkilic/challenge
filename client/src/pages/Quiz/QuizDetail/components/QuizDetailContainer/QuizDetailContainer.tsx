import React from 'react'
import './QuizDetailContainer.css'

interface QuizDetailContainerProps {
    children: React.ReactNode
}

const QuizDetailContainer = ({children}:QuizDetailContainerProps) => {
  return (
    <div className='quiz-detail-container'>{children}</div>
  )
}

export default QuizDetailContainer