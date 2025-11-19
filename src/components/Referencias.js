
import React, { useState } from 'react';

function Referencias({ data, onDelete, onAdd }) {
  const [isAdding, setIsAdding] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName && newPhone) {
      onAdd({ name: newName, phone: newPhone });
      setNewName('');
      setNewPhone('');
      setIsAdding(false);
    }
  };

  return (
    <section className="cv-section referencias-section">
      <h3>REFERENCIAS</h3>
      {data.map((item) => (
        <div key={item.id} className="referencia-item editable-item">
          <p><strong>{item.name}</strong></p>
          <p>Teléfono: {item.phone}</p>
          <button className="delete-btn" onClick={() => onDelete(item.id)}>Eliminar</button>
        </div>
      ))}

      <button className="add-btn" onClick={() => setIsAdding(!isAdding)}>
        {isAdding ? 'Cancelar' : '➕ Agregar Referencia'}
      </button>

      {isAdding && (
        <form onSubmit={handleSubmit} className="add-form">
          <input
            type="text"
            placeholder="Nombre de la Referencia"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            required
          />
          <button type="submit">Guardar</button>
        </form>
      )}
    </section>
  );
}

export default Referencias;