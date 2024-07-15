import { Form, FormControl } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <Form inline className="search-bar">
      <FormControl type="text" placeholder="Search" className="mr-sm-1 search-input" />
    </Form>
  );
};

export default SearchBar;
