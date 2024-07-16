import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import MainProfile from "./components/MainProfile";
import AsideBar from "./components/AsideBar";
import LinkedInNavbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <LinkedInNavbar />
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Row className=" mt-5">
              <Col xs={9}>
                <MainProfile />
              </Col>
              <Col xs={3}>
                <AsideBar />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
