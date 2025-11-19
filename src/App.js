
import React, { useState } from 'react'; 
import Header from './components/Header';
import Contacto from './components/Contacto';
import SobreMi from './components/SobreMi';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Habilidades from './components/Habilidades';
import Referencias from './components/Referencias';
import './App.css';


const initialData = {
  contacto: [
    { type: 'Teléfono', value: '0998838421', icon: '📞' },
    { type: 'Email', value: 'Joelyandun2021@gmail.com', icon: '📧' },
    { type: 'Identificación', value: '1751145994', icon: '🆔' },
    { type: 'Ubicación', value: 'San Isidro de Puengasí E14, S6-528', icon: '📍' },
  ],
  educacion: [
    { id: 1, title: 'PUCE TEC - Desarrollo de Software', period: '2024-presente' },
    { id: 2, title: 'Bachiller en Ciencias (Unidad Educativa Municipal Fernández Madrid)', period: '2024' },
  ],
  experiencia: [
    { id: 1, title: 'Desarrollo de Página Web Yzdeesigner', period: '2025' },
  ],
  habilidades: {
    Programación: ['Pyhton', 'Javascript'],
    'Bases De Datos': ['PostgresSQL'],
    IDIOMAS: ['Español', 'Inglés (Intermedio)'],
  },
  referencias: [
    { id: 1, name: 'Yuliana Zambrano', phone: '0987415079' },
  ],
};

function App() {
  const [cvData, setCvData] = useState(initialData);

  
  const handleDeleteItem = (section, id) => {
    setCvData(prevData => ({
      ...prevData,
      [section]: prevData[section].filter(item => item.id !== id),
    }));
  };

  
  const handleAddItem = (section, newItem) => {
    const newId = Date.now(); 
    setCvData(prevData => ({
      ...prevData,
      [section]: [...prevData[section], { ...newItem, id: newId }],
    }));
  };

  return (
    <div className="cv-container">
      <aside className="cv-sidebar">
        <Header />
        <Contacto data={cvData.contacto} />
        {}
        <Habilidades data={cvData.habilidades} />
        <Referencias
          data={cvData.referencias}
          onDelete={(id) => handleDeleteItem('referencias', id)}
          onAdd={(item) => handleAddItem('referencias', item)}
        />
      </aside>

      <main className="cv-content">
        <SobreMi />
        <Experiencia
          data={cvData.experiencia}
          onDelete={(id) => handleDeleteItem('experiencia', id)}
          onAdd={(item) => handleAddItem('experiencia', item)}
        />
        <Educacion
          data={cvData.educacion}
          onDelete={(id) => handleDeleteItem('educacion', id)}
          onAdd={(item) => handleAddItem('educacion', item)}
        />
      </main>
    </div>
  );
}

export default App;