import React from 'react';
import PropTypes from 'prop-types';
const WeatherExtraInfo = ({ humidity, wind }) => (

  <div>
    <span>{`${humidity} % - `}</span>
    <span>{`${wind} wind`}</span>
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
