
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Contacto from './Contacto';
import SobreMi from './SobreMi';
import Experiencia from './Experiencia';
import Educacion from './Educacion';
import Habilidades from './Habilidades';
import Referencias from './Referencias';
import client from '../api/client'; 


const initialStaticData = {
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
  habilidades: {
    Programación: ['Python', 'Javascript'],
    'Bases De Datos': ['PostgreSQL'],
    IDIOMAS: ['Español', 'Inglés (Intermedio)'],
  },
  referencias: [
    { id: 1, name: 'Yuliana Zambrano', phone: '0987415079' },
  ],
};

function HojaDeVida() {
  const [cvData, setCvData] = useState({
    ...initialStaticData,
    experiencia: [] 
  });

 
  useEffect(() => {
    client.get('/experiencia')
      .then(response => {
        setCvData(prevState => ({
          ...prevState,
          experiencia: response.data
        }));
      })
      .catch(error => console.error("Error cargando experiencia", error));
  }, []);


  const handleDeleteItem = (section, id) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id),
    }));
  };

  const handleAddItem = (section, newItem) => {
    
    const newId = Date.now();
    setCvData(prev => ({
      ...prev,
      [section]: [...prev[section], { ...newItem, id: newId }],
    }));
  };

  return (
    <div className="cv-container">
      <aside className="cv-sidebar">
        <Header />
        <Contacto data={cvData.contacto} />
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

export default HojaDeVida;