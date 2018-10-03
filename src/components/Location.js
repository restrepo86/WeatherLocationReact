import React from 'react';

//Destructuring => Cuando tenenmos una propiedad que luego queremos asignar a una variable o constante
//con el mismo nombre de la propiedad utilizamos esa técnica

const Location = ({ city }) => (

      <div>
        <h1>
          { city }
        </h1>
      </div>

);

export default Location;
