import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Pages } from './components/Pages';
import { VideoPage } from './components/VideoPage';
import { Header } from './components/Header';
import './Global.css';

function App() {
    return (
        <>
            <Header /> {}
            <Routes>
                <Route path="/" element={<Pages />} />
                <Route path="/videopage" element={<VideoPage />} />
            </Routes>
        </>
    );
}

export default App;