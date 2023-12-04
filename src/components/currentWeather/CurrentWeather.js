import React, { useState, useEffect } from "react";

const CurrentWeather = ({weather}) => {
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [windSpeed, setWindSpeed] = useState();

  useEffect(() => {
    // This block will be executed after the state has been updated
    getCurrentWeather();
  }, [weather]);

  const getCurrentWeather = () => {
    if (weather && weather.list && weather.list[0]) {
      const presentWeather = weather.list[0].main;
      console.log("TODAY WEATHER: ", presentWeather);
      
      setTemp((presentWeather.temp - 273.15) * 1.80 + 32);
      setHumidity(presentWeather.humidity);
      setWindSpeed(weather.list[0].wind.speed + " MPH")
    }
  }


  return (
    <div className="currentWeather__container">
      <h2 id="currentCity" className="text-dark p-3">
        Today's Forecast
      </h2>
      <p className="text-dark p-3">
        Temperature: <span id="temperature">{temp}</span>
      </p>
      <p className="text-dark p-3">
        Humidity: <span id="humidity">{humidity}</span>
      </p>
      <p className="text-dark p-3">
        Wind Speed: <span id="windSpeed">{windSpeed}</span>
      </p>
      <p className="text-dark p-3">
        UV Index: <span id="uvIndexSpan"></span>
      </p>
    </div>
  );
};

export default CurrentWeather;
