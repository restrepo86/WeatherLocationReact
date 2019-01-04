import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather'
import { api_weather } from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


class WeatherLocation extends Component {

  /**
    Solo puedo modificar el estado (state) con la propiedad this.state en el constructor,
    en el resto del componente solo se puede utilizar this.setState para modificar ese estado
  **/


  constructor() {
    super();
    this.state = {
      city: 'Medellín',
      data: null,
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  handleUpdateClick = () => {

    /**
    El fetch sirve para hacer una peticion a un servicio API,
    se debe tener en cuenta que solo funciona en navegadores
    modernos, para mas compatibilidad se sugiere axxios.
    El Fetch devuelve una promise pero esa promire todavía no
    tiene el resultado que nosotros esperamos .
    **/

    fetch(api_weather).then( resolve => {
      return resolve.json();
    }).then( data => {
      console.log("resultado del hundleUpdateClick");
      const newWeather = transformWeather(data);
      console.log(newWeather);

      this.setState({
        data: newWeather
      });

    });

  }
      /**
        Promise -> Es un objeto utilizado para peticiones asincronas
        y que puede ser utilizado "ahora", "en un futuro" ó "nunca"
        las promesas tiene tres estados posibles que son pendiente,
        cumplida o rechazada
      **/

  render() {
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className="WeatherLocationCont">
        <Location city = {city}/>
        { data ?
          <WeatherData data = {data}></WeatherData> :
          "Cargando ..."
        }
      </div>
    );
  }
}

export default WeatherLocation;
