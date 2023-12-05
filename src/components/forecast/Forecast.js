import React, { useState, useEffect } from "react";
import "./Forecast.css";
import Card from "../../UI/card/Card";
import CurrentWeather from "../currentWeather/CurrentWeather";

const Forecast = ({ lat, lon }) => {
  const [weather, setWeather] = useState({ list: [] });

  useEffect(() => {
    // This block will be executed after the state has been updated
    fetchForecast();
  }, [lat, lon]);

  const fetchForecast = () => {
    let APIKey = "205e65f3bbbf65a0b6de249409614a50";
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`;

    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => {
        if (data.list && data.list.length > 0) {
          setWeather(data);
          console.log("DATA: ", data);
        }
      });
  };

  return (
    <div className="forecast__container">
      <CurrentWeather weather={weather} />
      <h2>5-Day Forecast:</h2>
      <div className="forecast__container-cards">
      {weather.list && weather.list.map((forecastItem, index) => {
          if (forecastItem.dt_txt.indexOf("15:00:00") !== -1) {
            return <Card key={index} forecast={forecastItem}/>;
          }
          return null; // If condition is not met, return null
        })}
      </div>
    </div>
  );
};

export default Forecast;
