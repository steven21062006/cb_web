// src/App.js (CÓDIGO CORRECTO)
import React from 'react';
import Header from './components/Header';
import Contacto from './components/Contacto';
import SobreMi from './components/SobreMi';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Habilidades from './components/Habilidades';
import Referencias from './components/Referencias';
import './App.css'; 

function App() {
  return (
    <div className="cv-container">
      
      {/* Columna Lateral para Contacto/Habilidades/Referencias */}
      <aside className="cv-sidebar">
        {/* Usamos el Header simple, sin props, como lo hicimos en la versión aprendiz */}
        <Header /> 
        <Contacto />
        <Habilidades />
        <Referencias />
      </aside>

      {/* Columna Principal para Perfil/Experiencia/Educación */}
      <main className="cv-content">
        <SobreMi />
        <Experiencia />
        <Educacion />
      </main>

    </div>
  );
}

export default App;