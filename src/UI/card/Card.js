import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ weather }) => {
  const [temp, setTemp] = useState();
  console.log("CARD", weather)

  useEffect(() => {
    // This block will be executed after the state has been updated
    getCurrentWeather();
  }, [weather]);

  const getCurrentWeather = () => {
    if (weather ) {
      const presentWeather = weather.main;
      console.log("TODAY WEATHER: ", presentWeather);

      setTemp((presentWeather.temp - 273.15) * 1.8 + 32);
    }
  };
  return (
    <div className="card">
      <h3>Date</h3>
      <div>Icon</div>
      <p>Temp: {temp}</p>
      <p>Humidity: </p>
    </div>
  );
};

export default Card;
