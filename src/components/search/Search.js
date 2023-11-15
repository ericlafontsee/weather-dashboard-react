import React from "react";
import './Search.css';

const Search = () => {
  return (
    <div className="search__container">
      <h2>Search City: </h2>
      <form>
        <input id="citySearch" type="text" placeholder="Enter City" />
        <button id="searchBtn" type="button" class="">
          <i class="fas fa-search-location"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
