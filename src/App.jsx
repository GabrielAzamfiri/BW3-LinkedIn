import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import MainProfile from "./components/MainInfo-AsideBar/MainProfile";
import AsideBar from "./components/MainInfo-AsideBar/AsideBar";
import LinkedInNavbar from "./components/Navbar/Navbar";
import Analisi from "../components/Analisi";
import Risorse from "../components/Risorse";
import Corsi from "../components/Corsi";
import Progetti from "../components/Progetti";
import Footer from "../components/Footer";
import Esperienze from "../components/Esperienza";

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
                <Analisi />
                <Risorse />
                <Corsi />
                <Esperienze />
                <Progetti />
                <Footer />
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
