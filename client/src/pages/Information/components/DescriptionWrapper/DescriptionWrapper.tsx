import React from 'react'
import styles from './DescriptionWrapper.module.scss'

interface DescriptionWrapperProps {
    children?: React.ReactNode
}

const DescriptionWrapper = ({children}:DescriptionWrapperProps) => {
  return (
    <div className={`${styles.description_wrapper}`}>
        {children}
    </div>
  )
}

export default DescriptionWrapper