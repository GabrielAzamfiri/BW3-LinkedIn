import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Profili from "./Profili";
import { SendFill } from "react-bootstrap-icons";
import MostraTutti from "./MostraTutti";

const ProfiliSimili = () => {
  const profiliSimili = useSelector(state => state.epicProfiles.profiliSimili);

  return (
    <Col className="bg-white border rounded ">
      <div className="my-3">
        <span className="fw-bold">Altri Profili simili</span>
      </div>
      {profiliSimili.map((epicProfile, index) => {
        return (
          <div key={index}>
            <Profili epicProfile={epicProfile} />
            <button className="m-auto mt-1 py-1 px-2 rounded-pill  btn btn-outline-dark d-block d-flex align-items-center justify-content-center">
              <SendFill className="me-2" /> Messaggio
            </button>
            <hr />
          </div>
        );
      })}

      <MostraTutti titolo="Altri Profili simili" />
    </Col>
  );
};

export default ProfiliSimili;
