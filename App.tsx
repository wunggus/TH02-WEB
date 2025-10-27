// src/App.tsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherApp from './components/WeatherApp';
import StudentList from './components/StudentList';
import NewsApp from './components/NewsApp';
import Home from './pages/Home';
import StudentPage from './pages/StudentPage';
import NewsPage from './pages/NewsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
