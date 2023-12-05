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
      const presentWeather = forecast.main;
      getFormattedDate();
      getWeatherIcon();

      setTemp(Math.round((presentWeather.temp - 273.15) * 1.8 + 32));

      setHumidity(presentWeather.humidity);
    }
  };

  const getFormattedDate = () => {
    // Input date string
    const inputDateString = "2023-12-05 15:00:00";

    // Create a new Date object using the input date string
    const inputDate = new Date(inputDateString);

    // Get the month, day, and year components
    const month = inputDate.getMonth() + 1; // Months are zero-based, so we add 1
    const day = inputDate.getDate();
    const year = inputDate.getFullYear();

    // Format the date as MM/DD/YYYY
    const formattedDate = `${month}/${day}/${year}`;
    setDate(formattedDate);
  };

  const getWeatherIcon = () => {
    const iconData = forecast.weather[0];
    const iconURL = `https://openweathermap.org/img/wn/${iconData.icon}@2x.png`;
    const iconAltText = iconData.description;
    setWeatherIcon(iconURL);
    setWeatherIconAltText(iconAltText);
  }

  return (
    <div className="card">
      <h3>{date}</h3>
      <div><img src={weatherIcon} alt={weatherIconAltText}/></div>
      <p>Temp: {temp}</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

export default Card;
