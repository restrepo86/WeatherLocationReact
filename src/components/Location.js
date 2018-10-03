import React from 'react';

const Location = ({ city }) => {
  //Destructuring => Cuando tenenmos una propiedad que luego queremos asignar a una variable o constante
  //con el mismo nombre de la propiedad utilizamos esa técnica

  return (
      <div><h1>{ city }</h1></div>
  );

};

export default Location;
