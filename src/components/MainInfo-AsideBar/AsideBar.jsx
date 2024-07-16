import { Col, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { epicProfilesAction } from "../../redux/actions";
import ProfiliSimili from "./ProfiliSilimi";
import PotrestiConoscere from "./PotrestiConoscere";

const AsideBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(epicProfilesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const profile = useSelector(state => state.profile.profile);
  const profiles = useSelector(state => state.epicProfiles.profiles);

  return (
    profile &&
    profiles && (
      <Row className="flex-column gy-3 mb-4">
        <Col className="bg-white border rounded p-3">
          <div className="fs-6 d-flex justify-content-between">
            <span className="fw-bold">Lingua del profilo</span>
            <span className="d-flex  align-items-center">
              <Pencil className="fs-6 " />
            </span>
          </div>
          <span className="opacity-75 ">Italiano</span>
          <hr className="my-3" />
          <div className="fs-6 d-flex justify-content-between align-items-center">
            <span className="fw-bold">Profilo pubblico e URL</span>
            <span className="d-flex  align-items-center">
              <Pencil className="fs-6 " />
            </span>
          </div>

          <span className="opacity-75">
            www.linkedin.com/in/
            <br />
            {profile.name}-{profile.surname}-{profile._id}
          </span>
        </Col>
        <Col className="bg-white border rounded p-0">
          <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" width="100%" alt="pubblicità" />
        </Col>

        {/* ************************************Altri profili simili**************************************/}
        <ProfiliSimili />
        <PotrestiConoscere />
      </Row>
    )
  );
};

export default AsideBar;
