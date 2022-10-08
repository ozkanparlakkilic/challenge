import React from 'react'
import styles from './Form.module.scss'

interface FormProps {
  children: React.ReactNode,
  classname?: string
  autoComplete?: string
}

const Form = (props: FormProps) => {
  const {children,classname,autoComplete} = props
  return (
      <form className={`${classname ?? ''} ${styles.form}`} autoComplete={autoComplete}>{children}</form>
  )
}

export default React.memo(Form)