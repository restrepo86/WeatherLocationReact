import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
  SUN
} from './../../constants/Weathers';

const location = "Buenos Aires,ar";
const api_key = "58c8d3cafad79d77e8a4ae3f66c33cb5";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
  temperature: 10,
  weatherState: SUN,
  humidity: 15,
  wind: '10 m/s',
}

class WeatherLocation extends Component {

  /**
    Solo puedo modificar el estado (state) con la propiedad this.state en el constructor,
    en el resto del componente solo se puede utilizar this.setState para modificar ese estado
  **/

  constructor() {
    super();
    this.state = {
      city: 'Buenos Aires',
      data: data,
    };
  }

  getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
  }
  getWeatherState = weather_data => {
    return SUN;
  }

  getData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(weather_data);
    const temperature = this.getTemp(temp);

    const data = {
      humidity,
      temperature,
      weatherState,
      wind: `${speed} m/s`,
    }

    return data;
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
      console.log(resolve);

      return resolve.json();
    }).then( data => {
      const newWeather = this.getData(data);
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
    const { city, data } = this.state;
    return (
      <div className="WeatherLocationCont">
        <Location city = {city}/>
        <WeatherData data = {data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
