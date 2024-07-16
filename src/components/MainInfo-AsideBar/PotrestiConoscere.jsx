import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Profili from "./Profili";
import { PersonFillAdd } from "react-bootstrap-icons";

const PotrestiConoscere = () => {
  const potrestiConoscere = useSelector(state => state.epicProfiles.potrestiConoscere);

  return (
    <Col className="bg-white border rounded ">
      <div className="my-3">
        <span className="fw-bold d-block">Persone che potresti conoscere</span>
        <span className="opacity-50"> Dalla tua azienda </span>
      </div>
      {potrestiConoscere.map(epicProfile => {
        return (
          <>
            <Profili epicProfile={epicProfile} key={epicProfile._id} />
            <button className="m-auto mt-1 py-1 px-2 rounded-pill  btn btn-outline-dark d-block">
              <PersonFillAdd /> Collegati
            </button>
            <hr />
          </>
        );
      })}
    </Col>
  );
};

export default PotrestiConoscere;
