import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectProfileAction } from "../../redux/actions";

const Profili = ({ epicProfile }) => {
  const dispatch = useDispatch();

  return (
    <Row className="p-2">
      <Col xs={3} className="d-flex align-items-top justify-content-end">
        <img src={epicProfile.image} alt="profile image" className="rounded-circle  border-white position-absolute" width={50} height={50} />
      </Col>
      <Col className="p-0">
        <a className=" fs-6 asideLink d-block text-dark fw-bold link-underline link-underline-opacity-0 link-underline-opacity-75-hover" onClick={() => dispatch(selectProfileAction(epicProfile))}>
          {epicProfile.name} {epicProfile.surname}
        </a>
        <span className=" opacity-75 ">{epicProfile.title}</span>
      </Col>
    </Row>
  );
};

export default Profili;
