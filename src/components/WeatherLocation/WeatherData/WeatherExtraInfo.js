import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (

  <div className="weatherExtraInfoCont" >
    <span className="extraInfoText">{`Humedad: ${humidity} % - `}</span>
    <span className="extraInfoText">{`Vientos: ${wind}`}</span>
  </div>

);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;
/**
 el template string se comporta como los string de scala (ecma script 6, el ejemplo está en los span anteriores)
**/
