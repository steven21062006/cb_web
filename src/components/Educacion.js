
import React, { useState } from 'react';

function Educacion({ data, onDelete, onAdd }) {
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
      <h2>EDUCACIÓN:</h2>
      {data.map((item) => (
        <div key={item.id} className="educacion-item editable-item">
          <h4>{item.title} ({item.period}).</h4>
          <button className="delete-btn" onClick={() => onDelete(item.id)}>Eliminar</button>
        </div>
      ))}

      <button className="add-btn" onClick={() => setIsAdding(!isAdding)}>
        {isAdding ? 'Cancelar' : '➕ Agregar Educación'}
      </button>

      {isAdding && (
        <form onSubmit={handleSubmit} className="add-form">
          <input
            type="text"
            placeholder="Título/Institución"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Período (ej: 2023-2024)"
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

export default Educacion;