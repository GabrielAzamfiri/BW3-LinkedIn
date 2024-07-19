import { useEffect, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import "./SearchBar.css";

const JobSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length > 2) {
      onSearch(query);
    }
  };

  useEffect(()=>{
    onSearch(query)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="search-bar-container">
      <Form className="mx-auto search-bar" onSubmit={handleSearch}>
        <FormControl
          type="text"
          placeholder="Search jobs"
          className="mr-sm-2 search-input"
          value={query}
          onChange={handleQueryChange}
        />
      </Form>
    </div>
  );
};

export default JobSearchBar;
