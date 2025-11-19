
import React from 'react';

function Habilidades({ data }) {
  const categories = Object.keys(data); 

  return (
    <section className="cv-section habilidades-section">
      <h3>HABILIDADES:</h3>
      
      {categories.map(category => (
        <React.Fragment key={category}>
          <h4>{category}:</h4>
          <ul>
            {data[category].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </section>
  );
}

export default Habilidades;