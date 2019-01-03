const api_key = "58c8d3cafad79d77e8a4ae3f66c33cb5";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const location = "Medellín,co";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
