import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import PostIndex from "./components/newsPage/PostIndex";
import LinkedInNavbar from "./components/Navbar/Navbar";
import MyProfile from "./components/MyProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { myProfileAction } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <BrowserRouter>
        <LinkedInNavbar />
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <Routes>
                <Route path="/" element={<PostIndex />} />
                <Route path="/Profile" element={<MyProfile />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
