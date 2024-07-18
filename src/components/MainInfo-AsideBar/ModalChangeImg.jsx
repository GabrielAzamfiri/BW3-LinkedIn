import { useState } from "react";
import { EyeFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function ModalChangeImg() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const profile = useSelector(state => state.profile.profile);

  return (
    <>
      <img id="imgProfile" src={profile.image} alt="profile image" className="rounded-circle border border-5 border-white position-absolute" width={160} height={160} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} data-bs-theme="dark" className="text-white">
        <Modal.Header closeButton>
          <Modal.Title>Foto Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <img src={profile.image} alt="profile image" className="rounded-circle " width={240} height={240} onClick={handleShow} />
        </Modal.Body>
        <Button variant="btn btn-outline-light d-block" className="w-25 ms-2 mb-2 py-1 rounded-pill fw-bold">
          <EyeFill /> Chiunque
        </Button>
        <Modal.Footer>
          <Button variant="transparent" onClick={handleClose}>
            Modifica
          </Button>
          <Button variant="transparent" onClick={handleClose}>
            Aggiungi foto
          </Button>
          <Button variant="transparent" onClick={handleClose}>
            Fotogrammi
          </Button>
          <Button variant="transparent" className="ms-auto" onClick={handleClose}>
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalChangeImg;
