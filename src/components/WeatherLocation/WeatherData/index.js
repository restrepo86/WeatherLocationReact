import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from './../../../constants/Weathers';

const WeatherData = () => (
  <div>
    <WeatherTemperature
      temperature={20}
      weatherState={SUN}
    />
    <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
  </div>
);

export default WeatherData;

/**
Instalamos prop types para validar las propiedades que les pasamos a los diferentes componentes ...

yarn add prop-types
npm install prop-types
**/
