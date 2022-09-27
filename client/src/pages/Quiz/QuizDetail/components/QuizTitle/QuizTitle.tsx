import React from 'react'

interface QuizTitleProps {
    title: string
}

const QuizTitle = ({title}:QuizTitleProps) => {
  return (
    <h1>{title}</h1>
  )
}

export default QuizTitle