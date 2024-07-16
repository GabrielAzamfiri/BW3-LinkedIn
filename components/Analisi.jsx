import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../src/assets/analisi.css";

function Analisi() {
  return (
    <Container className="container-fluid ">
      <Row className="d-flex justify-content-between align-middle border mt-3 px-3 pb-3 tabella">
        <h4 className="mt-3">Analisi</h4>
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

        <Col md="4" className="justify-content-between">
          <div className="div2 d-flex">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
            </div>
            <div className="div3">
              <p className="titolo">21 visualizzazioni del profilo</p>
              <p className="bodyText">Scorpi chi ha visto il tuo profilo.</p>
              <p className="testoAggiuntivo"></p>
            </div>
          </div>
        </Col>
        <Col md="4 d-flex justify-content-between">
          <div className="div2 d-flex">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-bar-chart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
              </svg>
            </div>
            <div className="div3">
              <p className="titolo">60 impressioni del post</p>
              <p className="bodyText">
                Scorpi chi sta interagendo con il tuo profilo.
              </p>
              <p className="sotto">Ultimi 7 giorni</p>
              <p className="testoAggiuntivo"></p>
            </div>
          </div>
        </Col>
        <Col md="4 d-flex">
          <div className="div2 d-flex">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
            <div className="div3">
              <p className="titolo">1 comparsa nei motori di ricerca</p>
              <p className="body">
                Vedi quante volte compari nei risultati di ricerca.
              </p>
              <p className="testoAggiuntivo"></p>
            </div>
          </div>
        </Col>
        <Col md="12" className="border-top mt-4">
          <p className=" text-center align-middle mt-3 ultimo">
            Mostra tutte le analisi
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Analisi;
