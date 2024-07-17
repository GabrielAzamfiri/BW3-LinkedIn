import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import PostIndex from "./components/newsPage/PostIndex";
import LinkedInNavbar from "./components/Navbar/Navbar";
import MyProfile from "./components/MyProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.profile.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserInfo());
    }
  }, [token, dispatch]);

  return (
    <>
      <BrowserRouter>
        <LinkedInNavbar />
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <Routes>
                <Route path="/Home" element={<PostIndex />} />
                <Route path="/" element={<MyProfile />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
