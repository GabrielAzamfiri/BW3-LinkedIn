import { Col, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import ProfiliSimili from "./ProfiliSimili";

const AsideBar = () => {
  const profile = useSelector(state => state.profile.profile);

  return (
    profile && (
      <Row className="flex-column gy-3 mb-4">
        <Col className="bg-white border rounded p-3">
          <div className="fs-5 d-flex justify-content-between">
            <span className="fw-bold">Lingua del profilo</span>
            <span className="d-flex  align-items-center">
              <Pencil className="fs-5 " />
            </span>
          </div>
          <span className="opacity-75">Italiano</span>
          <hr className="my-3" />
          <div className="fs-5 d-flex justify-content-between align-items-center">
            <span className="fw-bold">Profilo pubblico e URL</span>
            <span className="d-flex  align-items-center">
              <Pencil className="fs-5 " />
            </span>
          </div>

          <span className="opacity-75">
            www.linkedin.com/in/{profile.name}-{profile.surname}-{profile._id}
          </span>
        </Col>
        <Col className="bg-white border rounded p-0">
          <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" width="100%" alt="pubblicità" />
        </Col>

        {/* ************************************Altri profili simili**************************************/}

        <Col className="bg-white border rounded ">
          <div className="my-3">
            <span className="fw-bold">Altri Profili simili</span>
          </div>
          <ProfiliSimili />
          <hr />
          <ProfiliSimili />
        </Col>
      </Row>
    )
  );
};

export default AsideBar;
