import { React, useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const [zip, setZip] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [weather, setWeather] = useState([]);

  // Click event on search button will populate page with input city's weather
  const submitHandler = (event) => {
    event.preventDefault();

    if (zip === "") {
      alert("Enter a zip code!");
    } else {
      fetchCoordinates(zip);
    }
  };

  const zipChangeHandler = (event) => {
    setZip(event.target.value);
  };

  const fetchCoordinates = (zip) => {
    var APIKey = "205e65f3bbbf65a0b6de249409614a50";
    var queryURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${APIKey}`;
    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => {
        setLat(data.lat);
        setLon(data.lon);
      });
  };

  const fetchForecast = (lat, lon) => {
    var APIKey = "205e65f3bbbf65a0b6de249409614a50";
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}.34&lon=${lon}&appid=${APIKey}`;
    fetch(queryURL)
      .then(response => response.json())
      .then(data => setWeather(data));
    console.log("WEATHER: ", weather);
  };

  useEffect(() => {
    // This block will be executed after the state has been updated
    console.log("LAT: ", lat);
    console.log("LON: ", lon);
  }, [lat, lon]);

  useEffect(() => {
    fetchForecast();
  }, []);

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
