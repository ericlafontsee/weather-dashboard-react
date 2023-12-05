import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ forecast }) => {
  const [temp, setTemp] = useState();
  const [date, setDate] = useState();
  const [humidity, setHumidity] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [weatherIconAltText, setWeatherIconAltText] = useState();

  console.log("CARD: ", forecast);

  useEffect(() => {
    // This block will be executed after the state has been updated
    getFiveDayWeather();
  }, [forecast]);

  const getFiveDayWeather = () => {
    if (forecast) {
      const { main, weather, dt_txt } = forecast;
      
      getFormattedDate(dt_txt);
      getWeatherIcon(weather);

      setTemp(Math.round((main.temp - 273.15) * 1.8 + 32));
      setHumidity(main.humidity);
    }
  };

  const getFormattedDate = (inputDateString) => {
    // Use the input date string directly without creating a new Date object
    const formattedDate = new Date(inputDateString).toLocaleDateString(
      "en-US",
      {
        month: "numeric",
        day: "numeric",
        year: "numeric"
      }
    );

    setDate(formattedDate);
  };

  const getWeatherIcon = (iconData) => {
    const iconURL = `https://openweathermap.org/img/wn/${iconData[0].icon}@2x.png`;
    const iconAltText = iconData.description;
    setWeatherIcon(iconURL);
    setWeatherIconAltText(iconAltText);
  };

  return (
    <div className="card">
      <h3>{date}</h3>
      <div>
        <img src={weatherIcon} alt={weatherIconAltText} />
      </div>
      <p>Temp: {temp}</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

export default Card;
