import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import { Pencil, ShieldCheck } from "react-bootstrap-icons";
import ModalChangeImg from "./ModalChangeImg";

const MainProfile = () => {
  const myProfile = useSelector(state => state.profile.profile);
  const selectedProfile = useSelector(state => state.profile.selectedProfile);
  const profile = selectedProfile ? selectedProfile : myProfile;
  return (
    profile && (
      <Card className=" position-relative rounded">
        <div className="position-relative">
          <Card.Img
            className="object-fit-cover  "
            height={220}
            variant="top"
            src="https://media.licdn.com/dms/image/C5616AQHZGvVazLoGBQ/profile-displaybackgroundimage-shrink_350_1400/0/1654694401780?e=1726704000&v=beta&t=E73F_BUro83tkJ8NOckNJsjctaqUGwTbU-ejLx0WFLo"
          />
          {profile === myProfile && (
            <>
              <Button variant="transparent" className="rounded-circle bg-white position-absolute top-0 end-0 d-flex align-items-center justify-content-center me-4 mt-4 py-3">
                <Pencil className="fs-5 " fill="blue" />
              </Button>
              <Button variant="transparent" className="pencil rounded-circle h-25 position-absolute top-100 end-0 d-flex align-items-center justify-content-center me-4 mt-4 ">
                <Pencil className="fs-4  " />
              </Button>
            </>
          )}
        </div>
        {profile === myProfile ? (
          <ModalChangeImg />
        ) : (
          <img id="imgProfile" src={profile.image} alt="profile image" className="rounded-circle border border-5 border-white position-absolute" width={160} height={160} />
        )}
        <Row className="pt-5  px-4  ">
          <Col xs={8}>
            <Card.Body className="lh-sm">
              <div className="d-flex">
                <Card.Title className=" fs-4 fw-bold">
                  {profile.name} {profile.surname}
                </Card.Title>

                <Button variant="btn btn-outline-primary " className="mx-2 p-0 px-3 rounded-pill d-flex align-items-center  fw-bold ">
                  <ShieldCheck className="fs-5 me-2 fw-bold" /> Verifica ora
                </Button>
              </div>
              <Card.Text> {profile.title}</Card.Text>
              <Card.Text>
                <span className="opacity-75 me-3 lead fs-6"> {profile.area}</span>
                <a className="fw-bold text-primary fs-6 link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
                  Informazioni di contatto
                </a>
                <br />
                <a className="fw-bold text-primary fs-6 link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
                  171 collegamenti
                </a>
              </Card.Text>
            </Card.Body>
          </Col>

          <Col xs={4} className="d-flex mt-4 align-items-center justify-content-end ">
            <a href="https://www.linkedin.com/school/epicodeitalia/" className="btn">
              <img src="src\assets\epicodeschool_logo.jpg" alt="logo Epico" width={60} />
              <span className="lh-sm">
                <strong>EPICODE</strong>
              </span>
            </a>
          </Col>
          <Col xs={12} className="mb-4">
            <Button variant="primary" className="rounded-pill me-2 py-1 px-3  fw-bold ">
              Disponibile per
            </Button>
            <Button variant="btn btn-outline-primary" className="me-2 py-1 px-3  rounded-pill fw-bold">
              Aggiungi sezione del profilo
            </Button>
            <Button variant="btn btn-outline-primary" className="me-2 py-1 px-3 rounded-pill fw-bold">
              Migliora profilo
            </Button>
            <Button variant="btn btn-outline-dark" className="me-2 py-1 px-3 rounded-pill fw-bold">
              Altro
            </Button>
          </Col>
        </Row>
      </Card>
    )
  );
};

export default MainProfile;
