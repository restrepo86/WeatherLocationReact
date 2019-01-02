import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

/**
  Tambien se puede utilizar el doble destructuring en los objetos para desenvolver tanto el objeto
  como sus propiedades y lo podemos ver a continuación con el parametro data y todas sus propiedades
**/

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (
  <div className="weatherDataCont" >
    <WeatherTemperature
      temperature={temperature}
      weatherState={weatherState}
    />
  <WeatherExtraInfo humidity={humidity} wind={wind}/>
  </div>
);

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

export default WeatherData;

/**
Instalamos prop types para validar las propiedades que les pasamos a los diferentes componentes ...

yarn add prop-types
npm install prop-types
**/
