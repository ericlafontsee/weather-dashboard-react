import "./Search.css";

const Search = (props) => {
  return (
    <div className="search__container">
      <h2>Search City: </h2>
      <form onSubmit={props.onSubmit}>
        <input
          id="zipSearch"
          type="text"
          placeholder="Enter Zip Code"
          value={props.zip}
          onChange={props.onZipChange}
        />
        <button id="searchBtn" type="submit">
          <i class="fas fa-search-location"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
