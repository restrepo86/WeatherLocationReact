import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (

  <div>
    <span>{`${humidity} % - `}</span>
    <span>{`${wind} wind`}</span>
  </div>

);

export default WeatherExtraInfo;
/**
 el template string se comporta como los string de scala (ecma script 6, el ejemplo está en los span anteriores)
**/
