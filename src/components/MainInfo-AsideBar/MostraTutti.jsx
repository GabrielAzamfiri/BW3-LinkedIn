import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import Profili from "./Profili";
import { PersonFillAdd, SendFill } from "react-bootstrap-icons";

const MostraTutti = () => {
  const [show, setShow] = useState(false);
  const profiles = useSelector(state => state.epicProfiles.profiles);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="transparent" className=" w-100 m-0 Mostratutti" onClick={handleShow}>
        Mostra Tutti
      </Button>

      <Modal show={show} onHide={handleClose} scrollable={true}>
        <Modal.Header closeButton>
          <Modal.Title>Altri Profili simili</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {profiles.map(epicProfile => {
            return (
              <>
                <Profili epicProfile={epicProfile} key={epicProfile._id} />
                <div className="d-flex ">
                  <button className="ms-auto mt-1 py-1 px-2 rounded-pill  btn btn-outline-dark">
                    <SendFill /> Messaggio
                  </button>
                  <button className=" mt-1 py-1 ms-4 px-2 rounded-pill  btn btn-outline-dark ">
                    <PersonFillAdd /> Collegati
                  </button>
                </div>
                <hr />
              </>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default MostraTutti;
