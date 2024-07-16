import { Col, Row } from "react-bootstrap";

const Profili = ({ epicProfile }) => {
  return (
    <Row className="p-2">
      <Col xs={3} className="d-flex align-items-top justify-content-end">
        <img src={epicProfile.image} alt="profile image" className="rounded-circle  border-white position-absolute" width={50} height={50} />
      </Col>
      <Col className="p-0">
        <a className="m-0 fs-6 d-block text-dark fw-bold link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
          {epicProfile.name} {epicProfile.surname}
        </a>
        <span className=" opacity-75 ">{epicProfile.title}</span>
      </Col>
    </Row>
  );
};

export default Profili;
