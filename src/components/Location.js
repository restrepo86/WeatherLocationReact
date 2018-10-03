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

/**
  El destrucuring nos permite extraer las propiedades de un
  objeto sin necesidad de especificar sus propiedades

  EJ =>
    const obj = { name: 'Emiliano', nick: 'Oke'}
    El destructuring de lo anterior se haría así ->
    const { name: nyName, nick: myNick } = obj;

    entonces si imprimimos las variables que acabamos
    de asignar podemos ver que imprime
    myName = 'Emiliano'
    myNick = 'Oke'

    Cuando las propiedades a las cuales vamos a asignar
    el valor son iguales a las de origen se puede haccer así ->
    const {name, nick} = obj

    entonces ya quedaría asignado a name = 'Emiliano'
    y a nick = 'Oke'

    ahora destrucuring de Arrays así
    const myArray = ['a', 'b'] se le hace destrucuring así
    const [x, y] = myArray
    entonces x = 'a', y = 'b'

    Destructuring para asignaciones con const, let, y var.
    El destrucuring se puede anidar, por ejemplo cuando
    tenemos objetos dentro de otros objetos.

    Cuando hacemos destrucuring de un objeto no es necesario
    utilizar todas sus propiedades... solo las que necesitemos

    const source = { x: 7, y: 3 };
    const { x } = source;

    x = '7'

    como se establecen valores por defecto

    const { x, y = 1 } = {}
    x = undefined
    y = 1

    elision => para omitir uno o mas elementos de la posición
    de un Array

    const [, , x, y] = ['a', 'b', 'c', 'd'];

    las dos primeras posiciones a y b no tienen valores

    rest operator => se utiliza en conjución con destrucuring
    para extraer los elementos remanentes, que los elementos
    que queden, despues de tomar los primeros identificados.

    
**/
