import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Risorse() {
  return (
    <Container className="container-fluid ">
      <Row className="d-flex justify-content-between align-middle border mt-3 px-3 pb-3 tabella">
        <h4 className="mt-3">Risorse</h4>
        <div className="d-flex align-middle ml-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-eye-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
          </svg>
          <p className="d-flex mr-3 mb-3 sottotitolo">Solo per te</p>
        </div>

        <Col md="12" className="justify-content-between mb-4">
          <div className="div2 d-flex">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
            </div>
            <div className="div3">
              <p className="titolo">La mia rete</p>
              <p className="bodyText ">
                Salva e gestisci i tuoi collegamenti e interessi.
              </p>
              <p className="testoAggiuntivo"></p>
            </div>
          </div>
        </Col>
        <hr></hr>
        <Col md="12 d-flex justify-content-between mt-4">
          <div className="div2 d-flex">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-bookmark-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
              </svg>
            </div>
            <div className="div3">
              <p className="titolo">Elementi salvati</p>
              <p className="bodyText">
                Monitora le tue offerte di lavoro, i corsi e gli articoli
              </p>
            </div>
          </div>
        </Col>
        <Col md="12" className="border-top mt-4">
          <p className=" text-center align-middle mt-3 ultimo">
            Mostra tutte le risorse (4)
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Risorse;
