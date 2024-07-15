import { useSelector, useDispatch } from 'react-redux';
import { Form, FormControl, ListGroup, Image } from 'react-bootstrap';
import { setQuery, fetchSearchResults } from '../../features/search/searchSlice';
import './SearchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);
  const loading = useSelector((state) => state.search.loading);
  const error = useSelector((state) => state.search.error);

  const handleQueryChange = (e) => {
    const newQuery = e.target.value;
    dispatch(setQuery(newQuery));
    if (newQuery.length > 2) {
      dispatch(fetchSearchResults(newQuery));
    }
  };

  return (
    <div className="search-bar-container">
      <Form inline className="mx-auto search-bar">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 search-input"
          value={query}
          onChange={handleQueryChange}
        />
      </Form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {results.length > 0 && (
        <ListGroup className="search-results">
          {results.map(result => (
            <ListGroup.Item key={result._id} className="d-flex align-items-center search-result-item">
              <Image src={result.image} roundedCircle width="50" height="50" className="mr-3" />
              <div>
                <div>{result.name} {result.surname}</div>
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
