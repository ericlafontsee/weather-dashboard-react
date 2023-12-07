import "./Search.css";
import SearchHistory from "./SearchHistory";

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
      {props.searchedZips &&
        props.searchedZips.map((zip, index) => {
          return <SearchHistory key={index} searchedZips={zip} />;
        })}
    </div>
  );
};

export default Search;
