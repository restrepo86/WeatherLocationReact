import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation />
      </div>
    );
  }
}

export default App;

/**
  En React tenemos dos clases de componentes, los ClassComponents y los FunctionalComponnents
  por ejemplo el App.js es un class component porque la clase hereda de component y el metodo
  render es lo que permite dibujar ese componente, encambio WeatherLocation es un functionalComponent
  porque no tiene un método render y es solo una arrow function que define lo que el componentes va a
  dibujar en pantalla.


  Para transformar un componente funcional en un ClassComponent ------------>>

    - importamos no solo React si no tambien component para que nos permita generar el componente.
    - creamos la clase que hereda de component
    - creamos el método render() {
      - aquí dentro del método render creacmos un return(
        dentro del return ponemos el contenido del anterior const del functionalComponent.
      );
    }
    - La idea es implementar siempre el comoponente mas sencillo quue se pueda

**/
