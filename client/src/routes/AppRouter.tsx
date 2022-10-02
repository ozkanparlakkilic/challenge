import axios, { AxiosRequestConfig } from 'axios';
import React, { useCallback, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { useAuth } from '../hooks/useAuth';

const AppRouter = () => {

  const { loggedUser: { accessToken } } = useAuth();

  const fetchPreAppRunData = useCallback(async () => {
    try {
      axios.interceptors.request.use((config: AxiosRequestConfig) => {
        if (config.headers) {
          config.headers.Authorization = 'Bearer ' + accessToken
        }
        return config
      })
    } catch (error) {
      console.log(error)
    }
  }, [accessToken])

  useEffect(() => {
    fetchPreAppRunData()
  }, [accessToken, fetchPreAppRunData])

  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppRouter