import { useState } from "react";
import { EyeFill, ImageFill, Pencil, TrashFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import ModalSelectImg from "./ModalSelectImg";

function ModalChangeImg() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const profile = useSelector(state => state.profile.profile);

  return (
    <>
      <img id="imgProfile" src={profile.image} alt="profile image" className="rounded-circle btn p-0 border border-5 border-white position-absolute" width={160} height={160} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} data-bs-theme="dark" className="text-white" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Foto Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <img src={profile.image} alt="profile image" className="rounded-circle " width={240} height={240} />
        </Modal.Body>
        <div className="d-inline-block m-2">
          <Button variant="transparent" className="btn-outline-light  ms-2 mb-2 py-1 rounded-pill fw-bold d-flex justify-content-center align-items-center">
            <EyeFill className="pe-2 fs-5" /> Chiunque
          </Button>
        </div>
        <Modal.Footer>
          <Button variant="transparent" className="d-flex flex-column align-items-center" onClick={handleClose}>
            <Pencil className="fs-4 mb-1" />
            Modifica
          </Button>
          <ModalSelectImg />
          <Button variant="transparent" className="d-flex flex-column align-items-center" onClick={handleClose}>
            <ImageFill className="fs-4 mb-1" />
            Fotogrammi
          </Button>
          <Button variant="transparent" className="ms-auto d-flex flex-column align-items-center" onClick={handleClose}>
            <TrashFill className="fs-4 mb-1" />
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalChangeImg;
