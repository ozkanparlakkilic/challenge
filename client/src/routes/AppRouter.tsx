import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/App';
import { useAuth } from '@hooks/useAuth';
import { useRequestInterceptor } from '@hooks/useRequestInterceptor';
import { useResponseInterceptor } from '@hooks/useResponseInterceptor';

const AppRouter = () => {

  const requestInterceptor = useRequestInterceptor();
  const responseInterceptor = useResponseInterceptor();
  const { loggedUser: { accessToken } } = useAuth()

  useEffect(() => {
    requestInterceptor()
  }, [accessToken, requestInterceptor])
  
  useEffect(() => {
    responseInterceptor()
  }, [responseInterceptor]);

  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppRouter