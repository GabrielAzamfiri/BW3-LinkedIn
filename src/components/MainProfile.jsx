import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { myProfileAction } from "../redux/actions";
import { BookHalf, Pencil, ShieldCheck } from "react-bootstrap-icons";

const MainProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const profile = useSelector(state => state.profile.profile);
  return (
    profile && (
      <Card className=" position-relative mt-5 rounded">
        <div className="position-relative">
          <Card.Img
            className="object-fit-cover  "
            height={250}
            variant="top"
            src="https://media.licdn.com/dms/image/C5616AQHZGvVazLoGBQ/profile-displaybackgroundimage-shrink_350_1400/0/1654694401780?e=1726704000&v=beta&t=E73F_BUro83tkJ8NOckNJsjctaqUGwTbU-ejLx0WFLo"
          />
          <Button id="pencil" variant="transparent" className="rounded-circle bg-white position-absolute top-0 end-0 d-flex align-items-center justify-content-center me-4 mt-4 py-3">
            <Pencil className="fs-4" />
          </Button>
          <Button id="pencil" variant="transparent" className="rounded-circle h-25 position-absolute top-100 end-0 d-flex align-items-center justify-content-center me-4 mt-4 ">
            <Pencil className="fs-2  " />
          </Button>
        </div>
        <img id="imgProfile" src={profile.image} alt="profile image" className="rounded-circle border border-5 border-white position-absolute" width={200} />
        <Row className="pt-5 mt-5 px-4  ">
          <Col>
            <Card.Body>
              <div className="d-flex">
                <Card.Title className=" fs-2 ">
                  {profile.name} {profile.surname}
                </Card.Title>

                <Button variant="btn btn-outline-primary " className="mx-2 rounded-pill d-flex align-items-center ">
                  <ShieldCheck className="fs-5 me-2" /> Verifica ora
                </Button>
              </div>
              <Card.Text> {profile.title}</Card.Text>
              <Card.Text>
                <span className="opacity-50 me-3 lead"> {profile.area}</span>
                <a className="fw-bold link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
                  Informazioni di contatto
                </a>
                <br />
                <a className="fw-bold link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
                  171 collegamenti
                </a>
              </Card.Text>
            </Card.Body>
          </Col>

          <Col className="d-flex mt-4 align-items-center justify-content-end ">
            <BookHalf className="fs-1 me-3" />
            <span className="lh-sm">
              <strong>
                Istituto Tecnico Industriale <br /> Renato Cartesio
              </strong>
            </span>
          </Col>
          <Col xs={12} className="mb-4">
            <Button variant="primary" className="rounded-pill me-2  ">
              Disponibile per
            </Button>
            <Button variant="btn btn-outline-primary" className="me-2 rounded-pill">
              Aggiungi sezione del profilo
            </Button>
            <Button variant="btn btn-outline-primary" className="me-2 rounded-pill">
              Migliora profilo
            </Button>
            <Button variant="btn btn-outline-dark" className="me-2 rounded-pill">
              Altro
            </Button>
          </Col>
        </Row>
      </Card>
    )
  );
};

export default MainProfile;
