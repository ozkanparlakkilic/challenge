import React, { lazy, Suspense } from 'react';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login, QuizDetail, Quizzes, Register } from './pages';
import { Header, Loading } from './components/common';
import { MainLayout } from './layouts';
import { PrivateRoute } from './routes/PrivateRouter';

const Information = lazy(() => import('./pages').then(({ Information }) => ({ default: Information })));
const Home = lazy(() => import('./pages').then(({ Home }) => ({ default: Home })));

function App() {
    return (
        <div className="App">
            <Header />
            <MainLayout>
                <Suspense fallback={ <Loading /> }>
                    <Routes>
                        <Route path="/" element={<PrivateRoute />}>
                            <Route path="/" element={<Home />} />
                            <Route path="quiz-list" element={<Quizzes />} />
                            <Route path="quiz-list/quiz-detail/:id" element={<QuizDetail />} />
                            <Route path="information" element={<Information />} />
                        </Route>

                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Routes>
                </Suspense>
            </MainLayout>
        </div>
    );
}

export default App;
