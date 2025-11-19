
import React, { useState } from 'react';

function SobreMi() {
  
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(
    'Soy estudiante de Desarrollo de Software en formación con un año de experiencia académica. Destaco por ser proactivo, tener una gran capacidad de aprendizaje y habilidades para el trabajo en equipo. Mi interés principal se centra en el desarrollo web y la gestión de proyectos tecnológicos.'
  );

  const handleSave = () => {
   
    setIsEditing(false); 
  };

  return (
    <section className="cv-section">
      <h2>SOBRE MÍ</h2>

      {isEditing ? (
        
        <div className="sobremi-edit-container">
          <textarea
            className="sobremi-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="5"
          />
          <button onClick={handleSave} className="save-btn">
            Guardar
          </button>
        </div>
      ) : (
        
        <div className="sobremi-view-container">
          <p>{text}</p>
          <button onClick={() => setIsEditing(true)} className="edit-btn">
             Editar
          </button>
        </div>
      )}
    </section>
  );
}

export default SobreMi;