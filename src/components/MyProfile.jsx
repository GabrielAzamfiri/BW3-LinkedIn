import { Col, Row } from "react-bootstrap";
import AsideBar from "./MainInfo-AsideBar/AsideBar";
import AllMainProfileComponents from "./MainInfo-AsideBar/AllMainProfileComponents";
import AllExperience from "./MainInfo-AsideBar/AllExperience";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const profileInfo = useSelector(state => state.showHide.profileInfo);
  const experieces = useSelector(state => state.showHide.experieces);

  return (
    <>
      <Row className=" mt-3">
        <Col>
          {profileInfo && <AllMainProfileComponents />}
          {experieces && <AllExperience />}
        </Col>
        <Col xs={3}>
          <AsideBar />
        </Col>
      </Row>
    </>
  );
};

export default MyProfile;
