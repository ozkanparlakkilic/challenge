import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Information, Login, QuizDetail, Quizzes, Register } from './pages';
import { Header } from './components/common';
import { MainLayout } from './layouts';
import { PrivateRoute } from './routes/PrivateRouter';

function App() {
    return (
        <div className="App">
            <Header />
            <MainLayout>
                <Routes>
                    <Route path="/" element={<PrivateRoute/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="quiz-list" element={<Quizzes />} />
                        <Route path="quiz-list/quiz-detail/:id" element={<QuizDetail />} />
                        <Route path="information" element={<Information />} />
                    </Route>

                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
                </MainLayout>
        </div>
    );
}

export default App;
