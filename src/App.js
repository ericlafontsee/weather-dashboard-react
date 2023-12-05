import { React, useState, useEffect } from "react";
import "./App.css";
import Search from "./components/search/Search";
import Forecast from "./components/forecast/Forecast";
import Header from "./components/header/Header";

function App() {
  const [zip, setZip] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  // Click event on search button will populate page with input city's weather
  const submitHandler = (event) => {
    event.preventDefault();
    zip === "" ? alert("Enter a zip code!") : fetchCoordinates(); 
  };

  const fetchCoordinates = () => {
    let APIKey = "205e65f3bbbf65a0b6de249409614a50";
    let queryURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${APIKey}`;

    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => {
        setLat(data.lat);
        setLon(data.lon);
      });
  };

  const zipChangeHandler = (event) => {
    setZip(event.target.value);
  };

  return (
    <>
      <Header />
      <main>
        <Search
          onSubmit={submitHandler}
          onZipChange={zipChangeHandler}
          zip={zip}
        />
        <Forecast lat={lat} lon={lon}/>
      </main>
    </>
  );
}

export default App;
