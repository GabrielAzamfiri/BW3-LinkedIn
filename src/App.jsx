import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import PostIndex from "./components/newsPage/PostIndex";
import Navbar from "./components/Navbar/Navbar";
import MyProfile from "./components/MyProfile";
import JobsPage from "./components/jobsPage/JobsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { myProfileAction } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`);
      if (!response.ok) {
        throw new Error("Failed to fetch job search results");
      }
      const data = await response.json();
      setJobs(data.data); // assuming `data.data` contains the results
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(myProfileAction());
  }, [dispatch]);

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Routes>
              <Route path="/" element={<PostIndex />} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/jobs" element={<JobsPage jobs={jobs} loading={loading} error={error} onSearch={handleSearch} />} /> {/* Aggiungi il percorso per Jobs */}
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
