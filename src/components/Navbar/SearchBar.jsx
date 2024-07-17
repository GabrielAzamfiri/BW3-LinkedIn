import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, FormControl, ListGroup, Image } from "react-bootstrap";
import { setQuery, fetchSearchResults } from "../../redux/actions";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector(state => state.search.query);
  const results = useSelector(state => state.search.results);
  const loading = useSelector(state => state.search.loading);
  const error = useSelector(state => state.search.error);

  const [recentSearches, setRecentSearches] = useState([]);
  const [showRecentSearches, setShowRecentSearches] = useState(false);

  const searchBarRef = useRef(null);

  const handleQueryChange = e => {
    const newQuery = e.target.value;
    dispatch(setQuery(newQuery));
    if (newQuery.length > 2) {
      dispatch(fetchSearchResults(newQuery));
      setShowRecentSearches(false)
    }
  };

  const handleSearchClick = () => {
    setShowRecentSearches(true);
  };

  const handleRecentSearchClick = search => {
    dispatch(setQuery(search));
    dispatch(fetchSearchResults(search));
    setShowRecentSearches(false);
  };

  const handleResultClick = result => {
    dispatch(setQuery(result.name));
    dispatch(fetchSearchResults(result.name));
    setRecentSearches(prevSearches => [result, ...prevSearches.filter(s => s._id !== result._id).slice(0, 4)]);
    setShowRecentSearches(false);
  };

  const handleClearRecent = () => {
    setRecentSearches([]);
  };

  const handleClearSearch = () => {
    dispatch(setQuery(""));
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowRecentSearches(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBarRef]);

  return (
    <div className="search-bar-container" ref={searchBarRef}>
      <Form className="mx-auto search-bar" onClick={handleSearchClick}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 search-input"
          value={query}
          onChange={handleQueryChange}
        />
        {query && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x clear-icon"
            viewBox="0 0 16 16"
            onClick={handleClearSearch}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        )}
      </Form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {showRecentSearches && recentSearches.length > 0 && (
        <div className="search-results">
          <div className="recent-searches-header">
            <span>Recent</span>
            <span onClick={handleClearRecent} style={{ cursor: 'pointer', color: 'blue' }}>Clear</span>
          </div>
          {recentSearches.map((search, index) => (
            <div
              key={index}
              className="recent-search-item"
              onClick={() => handleRecentSearchClick(search.name)}
            >
              <Image src={search.image} roundedCircle width="30" height="30" className="me-2" />
              <span className="ms-2">{search.name} {search.surname}</span>
            </div>
          ))}
        </div>
      )}
      {!showRecentSearches && results.length > 0 && (
        <ListGroup className="search-results">
          {results.map(result => (
            <ListGroup.Item
              key={result._id}
              className="d-flex align-items-center search-result-item"
              onClick={() => handleResultClick(result)}
            >
              <Image src={result.image} roundedCircle width="50" height="50" className="mr-3" />
              <div>
                <div>
                  {result.name} {result.surname}
                </div>
                <div className="text-muted">{result.title}</div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default SearchBar;
