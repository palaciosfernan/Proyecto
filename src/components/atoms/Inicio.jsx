import React from 'react';
import { database3 } from '../../store/database';
function MiComponente() {
  return (
    <div>
      {database3.texto.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}
    </div>
  );
}

export default MiComponente;


