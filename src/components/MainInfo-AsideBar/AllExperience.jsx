import { Button, Col, Container, Row } from "react-bootstrap";
import Modalexp from "../bodydata/Modalexp";

import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from "react-bootstrap-icons";
import { showInfoProfileAction } from "../../redux/actions";

const AllExperience = () => {
  const dispatch = useDispatch();

  const options = {
    month: "long",

    year: "numeric",
  };
  const experiences = useSelector(state => state.profile.experiences);

  return (
    <Container className="container-fluid ">
      <Row className="d-flex justify-content-between align-middle border mt-3 px-3 pb-3 tabella">
        <Col md="12 d-flex justify-content-between align-items-center">
          <Button variant="transparent" className="ArrowLeft rounded-circle  d-flex align-items-center justify-content-center mt-3">
            <ArrowLeft onClick={() => dispatch(showInfoProfileAction())} className="fs-4  " />
          </Button>

          <h4 className="mt-3 line">Esperienze</h4>
          <div className="line d-flex mt-3">
            <Modalexp title="Aggiungi Esperienza" />
          </div>
        </Col>
        {experiences &&
          experiences.map((experience, index) => {
            return (
              <Row key={index}>
                <Col xs={2} className="d-flex align-items-top justify-content-end">
                  <img src={experience.image} alt="profile image" className="" width={80} height={80} />
                </Col>
                <Col md="10" className="justify-content-between mb-4">
                  <div>
                    <div className="">
                      <div className="d-flex align-items-center justify-content-between">
                        <h4 className="fw-bold fs-5">{experience.role}</h4>
                        <Modalexp title="Modifica Esperienza" experience={experience} />
                      </div>
                      <span className=" fs-5 opacity-75 d-block">{experience.company}</span>
                      <span className="opacity-50 fs-5 d-block">
                        {/* <h2>{new Date(infoCity.dt * 1000).toLocaleTimeString("eng", options)}</h2> */}
                        {new Date(experience.startDate).toLocaleDateString("ita", options)} -- {new Date(experience.endDate).toLocaleDateString("ita", options)}
                      </span>
                      <span className="opacity-50 fs-5">{experience.area}</span>
                      <p className="opacity-75 fs-5"> - {experience.description}</p>
                    </div>
                  </div>
                </Col>
                <hr />
              </Row>
            );
          })}
      </Row>
    </Container>
  );
};

export default AllExperience;
