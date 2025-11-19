
import React from 'react';


function Contacto({ data }) {
  return (
    <section className="cv-section contacto-section">
      <h3>CONTACTO</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.icon} {item.value} {}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contacto;