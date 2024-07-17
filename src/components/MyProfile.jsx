import { Col, Row } from "react-bootstrap";
import AsideBar from "./MainInfo-AsideBar/AsideBar";
import AllMainProfileComponents from "./MainInfo-AsideBar/AllMainProfileComponents";

const MyProfile = () => {
  return (
    <>
      <Row className=" mt-3">
        <Col>
          <AllMainProfileComponents />
        </Col>
        <Col xs={3}>
          <AsideBar />
        </Col>
      </Row>
    </>
  );
};

export default MyProfile;
