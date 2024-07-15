import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../src/assets/analisi.css";
import Form from "react-bootstrap/Form";

function Footer() {
  return (
    <Container className="container-fluid mt-4">
      <Row className="bgFooter">
        <Col md="12">
          <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid mx-5 text-left text-md-left">
              <div className="row">
                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3 ">
                  <ul className="list-unstyled listOne">
                    <li>
                      <a href="#!">Prova</a>
                    </li>
                    <li>
                      <a href="#!">Linee guida</a>
                    </li>
                    <li>
                      <a href="#!">Privacy e condizioni</a>
                    </li>
                    <li>
                      <a href="#!">Sales Solution</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3 footerlist listOne">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Accessibilità</a>
                    </li>
                    <li>
                      <a href="#!">Carriera</a>
                    </li>
                    <li>
                      <a href="#!">Opzioni per gli annunci</a>
                    </li>
                    <li>
                      <a href="#!">Mobile</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3 footerBiglist">
                  <Col md="3 d-block justify-content-between ">
                    <div className="div2 d-flex">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-question-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                        </svg>
                      </div>
                      <div className="div3">
                        <p className="titolo">
                          <a href="#!">Domande?</a>
                        </p>
                      </div>
                    </div>

                    <div className="div2 d-flex">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-gear-wide-connected"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z" />
                        </svg>
                      </div>
                      <div className="div3">
                        <p className="titolo">
                          <a href="#!">Impostazioni</a>
                        </p>
                      </div>
                    </div>

                    <div className="div2 d-flex">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-shield-lock"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                          <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
                        </svg>
                      </div>
                      <div className="div3">
                        <p className="titolo">
                          <a href="#!">Trasparenza</a>
                        </p>
                      </div>
                    </div>
                  </Col>
                </div>

                <div className="col-md-2 mt-md-0 mt-3 ">
                  <h5 className="lingua">Seleziona la tua lingua</h5>
                  <Form.Select aria-label="Lingua" className="lingua">
                    <option>Lingue</option>
                    <option value="1">日本語</option>
                    <option value="2">Italiano</option>
                    <option value="3">English</option>
                    <option value="4">Français</option>
                  </Form.Select>
                </div>
              </div>
            </div>

            <div className="footer-copyright text-center py-3">
              <a href="https://www.epicode.com/">LinkedIn © 2024 by Epicode</a>
            </div>
          </footer>
        </Col>

        {/* <div className="chat">
          <p>prova</p>
        </div> */}
      </Row>
    </Container>
  );
}

export default Footer;
