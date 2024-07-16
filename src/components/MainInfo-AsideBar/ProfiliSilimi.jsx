import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Profili from "./Profili";
import { SendFill } from "react-bootstrap-icons";

const ProfiliSimili = () => {
  const profiliSimili = useSelector(state => state.epicProfiles.profiliSimili);

  return (
    <Col className="bg-white border rounded ">
      <div className="my-3">
        <span className="fw-bold">Altri Profili simili</span>
      </div>
      {profiliSimili.map(epicProfile => {
        return (
          <>
            <Profili epicProfile={epicProfile} key={epicProfile._id} />
            <button className="m-auto mt-1 py-1 px-2 rounded-pill  btn btn-outline-dark d-block">
              <SendFill /> Messaggio
            </button>
            <hr />
          </>
        );
      })}
    </Col>
  );
};

export default ProfiliSimili;
