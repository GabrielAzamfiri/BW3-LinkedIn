import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfiliSimili = () => {
  const profile = useSelector(state => state.profile.profile);

  return (
    <Row className="py-4">
      <Col xs={4} className="d-flex align-items-center justify-content-center">
        <img src={profile.image} alt="profile image" className="rounded-circle  border-white position-absolute" width={80} />
      </Col>
      <Col xs={8}>
        <p className="m-0 fw-bold">
          {profile.name} {profile.surname}
        </p>
        <p className="m-0 opacity-75">{profile.title}</p>
      </Col>
    </Row>
  );
};

export default ProfiliSimili;
