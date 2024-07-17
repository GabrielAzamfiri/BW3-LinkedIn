import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/analisi.css";

function Progetti() {
  return (
    <Container className="container-fluid ">
      <Row className="d-flex justify-content-between align-middle border mt-3 px-3 pb-3 tabella">
        <h4 className="mt-3">Progetti</h4>
        <div className="d-flex align-middle ml-3 mb-4"></div>

        <Col md="12" className="justify-content-between mb-4">
          <div className="div2 d-flex">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-gear-wide"
                viewBox="0 0 16 16"
              >
                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
              </svg>
            </div>
            <div className="div3">
              <p className="titolo">Hospital Run</p>
              <p className="testoAggiuntivo">12 Ago 2024</p>
              <p className="bodyText ">
                HospitalRun is one of the most popular offline-first electronic
                health records and hospital information system. HospitalRun s
                goal is a higher choice to its proprietary counterparts. The
                software can be deployed in a variety of healthcare
                environments. Thanks to its technical feature that allows use
                even without connectivity, it is also suitable for clinics
                located in the most rural areas of the planet. With inspiring
                volunteers and contributors dedicated to leading HR s status as
                a free, open-source software solution for medical practices with
                a commitment to openness, kindness and cooperation.
              </p>
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
                className="bi bi-gear-wide"
                viewBox="0 0 16 16"
              >
                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
              </svg>
            </div>
            <div className="div3">
              <p className="titolo">MyShiftPal</p>
              <p className="testoAggiuntivo">10 Jan 2023</p>
              <p className="bodyText">
                MyShiftPal is the first web application dedicated to planning,
                organizing and managing shifts and availabilities of doctors
                working in the Continuity Care health districts. The service
                takes advantage of all benefits of cloud computing: speed,
                performance, scalability and security. We use Microsoft Azure to
                ensure the best operating standards and comply with applicable
                GDPR and HIPAA regulations.
              </p>
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
                className="bi bi-gear-wide"
                viewBox="0 0 16 16"
              >
                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
              </svg>
            </div>
            <div className="div3">
              <p className="titolo">Kiron</p>
              <p className="testoAggiuntivo">23 Jul 2021</p>
              <p className="bodyText">
                Project Kiron leads mixed-reality to your operating room. Using
                the Microsoft HoloLens, you can see a virtual model of the brain
                projected onto your visual field. Our solution can show you
                cancerous tumor area, brain aneurysm, vascular malformation,
                assist and guide you along anatomical and functional pathways of
                the brain and spinal cord. The project aims at developing the
                current navigation systems, offering surgeons more sophisticated
                and thus more useful information. Holograms that faithfully
                reproduce the 3D model of the patient’s brain, showing both
                cortical surfaces and deep structures, including tissue
                vascularization, are created using data acquired through
                neurodiagnostic testing (high field MRI scan, CAT scan). In
                addition to exclusively anatomic data, functional data and
                tractographies of neural tracts can be provided through
                functional magnetic resonance imaging (fMRI).
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

export default Progetti;
