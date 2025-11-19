
import React, { useState } from 'react';

function Experiencia({ data, onDelete, onAdd }) {
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newPeriod, setNewPeriod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle && newPeriod) {
      onAdd({ title: newTitle, period: newPeriod });
      setNewTitle('');
      setNewPeriod('');
      setIsAdding(false);
    }
  };

  return (
    <section className="cv-section">
      <h2>EXPERIENCIA</h2>
      {data.map((item) => (
        <div key={item.id} className="experiencia-item editable-item">
          <h4>{item.title}</h4>
          <p className="periodo">{item.period}</p>
          <button className="delete-btn" onClick={() => onDelete(item.id)}>Eliminar</button>
        </div>
      ))}

      <button className="add-btn" onClick={() => setIsAdding(!isAdding)}>
        {isAdding ? 'Cancelar' : '➕ Agregar Experiencia'}
      </button>

      {isAdding && (
        <form onSubmit={handleSubmit} className="add-form">
          <input
            type="text"
            placeholder="Puesto/Empresa"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Período"
            value={newPeriod}
            onChange={(e) => setNewPeriod(e.target.value)}
            required
          />
          <button type="submit">Guardar</button>
        </form>
      )}
    </section>
  );
}

export default Experiencia;