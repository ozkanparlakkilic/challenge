import React from 'react';
import './App.css';
import Header from './components/common/Header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import { loadStorage } from './utils/storage/loadStorage';
import { IUser } from './@types';
import { Home, Login, Register } from './pages';

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
                            <Route path="/" element={<Login />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Routes>
                    ) : (
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    )}
                </MainLayout>
            </Router>
        </div>
    );
}

export default App;
