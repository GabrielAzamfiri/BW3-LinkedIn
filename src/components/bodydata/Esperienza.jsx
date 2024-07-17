import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/analisi.css";
import Modalexp from "./Modalexp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profileEsperienzeAction } from "../../redux/actions";
import { Pencil } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
function Esperienza() {
  const dispatch = useDispatch();
  const Profile = useSelector(state => state.profile.profile);

  const options = {
    month: "long",

    year: "numeric",
  };

  useEffect(() => {
    Profile && dispatch(profileEsperienzeAction(Profile._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Profile]);

  const experiences = useSelector(state => state.profile.experiences);

  return (
    <Container className="container-fluid ">
      <Row className="d-flex justify-content-between align-middle border mt-3 px-3 pb-3 tabella">
        <Col md="12 d-flex justify-content-between">
          <h4 className="mt-3 line">Esperienze</h4>
          <div className="line d-flex mt-3">
            <Modalexp />
            <Link to={"/MyEsperienze"} className="pencil btn rounded-circle   d-flex align-items-center justify-content-center  ">
              <Pencil className="fs-4  " />
            </Link>
          </div>
        </Col>
        {experiences &&
          experiences.map(experience => {
            return (
              <>
                <Col md="12" className="justify-content-between mb-4">
                  <div className="div2 d-flex">
                    <div className="">
                      <h4 className="fw-bold fs-5">{experience.role}</h4>
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
              </>
            );
          })}
      </Row>
    </Container>
  );
}

export default Esperienza;
