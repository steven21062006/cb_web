// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import HojaDeVida from './components/HojaDeVida';
import BlogList from './components/Blog/BlogList';
import PostDetail from './components/Blog/PostDetail';
import './App.css';

// Componente Navbar interno para acceder al Contexto
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="main-nav">
      <div className="nav-links">
        <Link to="/">Hoja de Vida</Link>
        <Link to="/posts">Blog Técnico</Link>
      </div>
      <button onClick={toggleTheme} className="theme-btn">
        {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
      </button>
    </nav>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<HojaDeVida />} />
              <Route path="/posts" element={<BlogList />} />
              <Route path="/posts/:id" element={<PostDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;