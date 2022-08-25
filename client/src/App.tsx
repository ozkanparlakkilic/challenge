import React from 'react';
import './App.css';
import Header from './components/common/Header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import MainLayout from './layouts/MainLayout/MainLayout';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import HomePage from './pages/HomePage/HomePage';
import { loadStorage } from './utils/loadStorage';
import { IUser } from './@types';

function App() {
    const user = loadStorage<IUser>('user');

    console.log(user);
    return (
        <div className="App">
            <Router>
                <Header />
                <MainLayout>
                    {!user ? (
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="login" element={<LoginPage />} />
                            <Route path="register" element={<RegisterPage />} />
                        </Routes>
                    ) : (
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                        </Routes>
                    )}
                </MainLayout>
            </Router>
        </div>
    );
}

export default App;
