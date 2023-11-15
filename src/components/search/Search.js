import { React, useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);


  /* NOTE TO SELF - GEOCODER HAS BEEN DEPRECATED, USE GEOCODER API SUGGESTED TO CONVERT CITY INTO LAT AND LONG */

  // Click event on search button will populate page with input city's weather
  const submitHandler = (event) => {
    event.preventDefault();

    if (city === "") {
      alert("Enter a city!");
    } else {
      fetchForecast(city);
    }
  };

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const fetchForecast = (city) => {
    var APIKey = "205e65f3bbbf65a0b6de249409614a50";
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${APIKey}`;
    fetch(queryURL)
      .then(response => response.json())
      .then(data => setWeather(data));
    console.log("WEATHER: ", weather);
  };

  useEffect(() => {
    fetchForecast();
  }, []);


  return (
    <div className="search__container">
      <h2>Search City: </h2>
      <form onSubmit={submitHandler}>
        <input
          id="citySearch"
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={cityChangeHandler}
        />
        <button id="searchBtn" type="submit" class="">
          <i class="fas fa-search-location"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
