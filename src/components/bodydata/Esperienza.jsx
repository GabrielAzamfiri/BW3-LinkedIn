import "bootstrap/dist/css/bootstrap.css";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modalexp from "./Modalexp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profileEsperienzeAction, showExperiencesAction } from "../../redux/actions";
import { Pencil } from "react-bootstrap-icons";

function Esperienza() {
  const dispatch = useDispatch();
  // const Profile = useSelector(state => state.profile.profile);
  const myProfile = useSelector(state => state.profile.profile);
  const selectedProfile = useSelector(state => state.profile.selectedProfile);
  const profile = selectedProfile ? selectedProfile : myProfile;

  const experiences = useSelector(state => state.profile.experiences);

  const options = {
    month: "long",

    year: "numeric",
  };

  useEffect(() => {
    profile && dispatch(profileEsperienzeAction(profile._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return (
    <Container className="container-fluid ">
      <Row className="d-flex justify-content-between align-middle border mt-3 px-3 pb-3 tabella">
        <Col md="12 d-flex justify-content-between">
          <h4 className="mt-3 line">Esperienze</h4>
          {profile === myProfile && (
            <div className="line d-flex mt-3">
              <Modalexp title="Aggiungi Esperienza" />
              <Button variant="transparent" className="pencil  rounded-circle   d-flex align-items-center justify-content-center " onClick={() => dispatch(showExperiencesAction())}>
                <Pencil className="fs-4  " />
              </Button>
            </div>
          )}
        </Col>
        {experiences &&
          experiences.map((experience, index) => {
            return (
              <Row key={index}>
                <Col xs={2} className="d-flex align-items-top justify-content-end">
                  {experience.image ? (
                    <img src={experience.image} alt="profile image" width={80} height={80} />
                  ) : (
                    <img src="https://epicode-testapi-bucket.s3.eu-south-1.amazonaws.com/1721296396331-epicode%20logo.jpg" alt="profile image" width={80} height={80} />
                  )}
                </Col>
                <Col md="10" className="justify-content-between mb-4">
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
              </Row>
            );
          })}
      </Row>
    </Container>
  );
}

export default Esperienza;
