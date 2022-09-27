import React from 'react'
import './DescriptionWrapper.css'

interface DescriptionWrapperProps {
    children?: React.ReactNode
}

const DescriptionWrapper = ({children}:DescriptionWrapperProps) => {
  return (
    <div className="description-wrapper">
        {children}
    </div>
  )
}

export default DescriptionWrapper