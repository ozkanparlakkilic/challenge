import React from 'react'
import styles from './AuthLayout.module.scss'

interface AuthLayoutProps {
    children: React.ReactNode;
    classname?: string | '';
}

const AuthLayout = ({children,classname}:AuthLayoutProps) => {
  return (
    <div className={`${classname ?? ''} ${styles.auth_layout}`}>{children}</div>
  )
}

export default React.memo(AuthLayout)