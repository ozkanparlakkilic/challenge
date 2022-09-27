import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, Information, Login, QuizDetail, Quizzes, Register } from './pages';
import { Header } from './components/common';
import { MainLayout } from './layouts';
import { useAppSelector } from './store/hooks';

function App() {
    const user = useAppSelector(state => (state.user))

    return (
        <div className="App">
            <Router>
                <Header />
                <MainLayout>
                    {!user.data ? (
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Routes>
                    ) : (
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="quiz-list" element={<Quizzes />} />
                            <Route path="quiz-list/quiz-detail/:id" element={<QuizDetail />} />
                            <Route path="information" element={<Information />} />
                        </Routes>
                    )}
                </MainLayout>
            </Router>
        </div>
    );
}

export default App;
