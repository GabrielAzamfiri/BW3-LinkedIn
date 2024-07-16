import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import MainProfile from "./components/MainProfile";
import AsideBar from "./components/AsideBar";
import LinkedInNavbar from "./components/Navbar/Navbar";
import Risorse from "./components/bodydata/Risorse";
import Progetti from "./components/bodydata/Progetti";
import Footer from "./components/bodydata/Footer";
import Esperienze from "./components/bodydata/Esperienza";
import Modalexp from "./components/bodydata/Modalexp";
import Analisi from "./components/bodydata/Analisi";
import Corsi from "./components/bodydata/Corsi";

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
                <Modalexp />
                <Esperienze />
                <Analisi />
                <Risorse />
                <Corsi />
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
