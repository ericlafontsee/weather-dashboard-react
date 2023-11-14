import React from "react";
import Card from "../../UI/card/Card";
import CurrentWeather from "../currentWeather/CurrentWeather";

const Forecast = () => {
  return (
    <div className="forecast__container">
      <CurrentWeather />
      <h2>5-Day Forecast:</h2>
      <div className="forecast__container-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Forecast;
