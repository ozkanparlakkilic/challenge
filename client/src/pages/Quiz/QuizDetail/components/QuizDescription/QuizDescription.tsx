import React from 'react'
import './QuizDescription.css'

interface QuizDescriptionProps {
    description: string
}

const QuizDescription = ({description}:QuizDescriptionProps) => {
  return (
    <p className="quiz-text">{description}</p>
  )
}

export default QuizDescription