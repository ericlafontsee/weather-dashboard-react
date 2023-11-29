import { React, useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const [zip, setZip] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    // This block will be executed after the state has been updated
    fetchForecast();
  }, [lat, lon]);

  useEffect(() => {
    // This block will be executed after the state has been updated
    // console.log(weather);
    // console.log(temp);
    // let tempF = (weather.list[0].main.temp - 273.15) * 1.80 + 32;
    // let tempF = weather.list[0].main.temp;
    // console.log(tempF);
  }, [weather]);

  // Click event on search button will populate page with input city's weather
  const submitHandler = (event) => {
    event.preventDefault();
    zip === "" ? alert("Enter a zip code!") : fetchCoordinates(zip);
  };

  const zipChangeHandler = (event) => {
    setZip(event.target.value);
  };

  const fetchCoordinates = (zip) => {
    let APIKey = "205e65f3bbbf65a0b6de249409614a50";
    let queryURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${APIKey}`;

    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => {
        setLat(data.lat);
        setLon(data.lon);
      });
  };

  const fetchForecast = () => {
    let APIKey = "205e65f3bbbf65a0b6de249409614a50";
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`;

    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        if (data.list && data.list.length > 0) {
          if (data.list[0].main) {
            console.log("DATA: ", data.list[0].main.temp);
          }
        }
      });
  };

  return (
    <div className="search__container">
      <h2>Search City: </h2>
      <form onSubmit={submitHandler}>
        <input
          id="zipSearch"
          type="text"
          placeholder="Enter Zip Code"
          value={zip}
          onChange={zipChangeHandler}
        />
        <button id="searchBtn" type="submit" class="">
          <i class="fas fa-search-location"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
