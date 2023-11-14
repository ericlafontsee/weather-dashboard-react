import React from "react";

const CurrentWeather = () => {
  return (
    <div class="currentWeather__container">
      <h2 id="currentCity" class="text-dark p-3">
        Today's Forecast
      </h2>
      <p class="text-dark p-3">
        Temperature: <span id="temperature"></span>
      </p>
      <p class="text-dark p-3">
        Humidity: <span id="humidity"></span>
      </p>
      <p class="text-dark p-3">
        Wind Speed: <span id="windSpeed"></span>
      </p>
      <p class="text-dark p-3">
        UV Index: <span id="uvIndexSpan"></span>
      </p>
    </div>
  );
};

export default CurrentWeather;
