import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { CameraFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { myProfileAction } from "../../redux/actions";

function ModalSelectImg() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formData = new FormData();
  const onFileChange = e => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("profile", e.target.files[0]);
    }
  };

  const myImageAction = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/picture`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_FETCH_KEY}`,
      },
    })
      .then(resp => {
        if (resp.ok) {
          alert(`Immagine caricata con successo!`);
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      })
      .then(deletedresp => {
        console.log(deletedresp);
        dispatch(myProfileAction());
      })
      .catch(Error => {
        console.log(Error);
      });
  };

  const profile = useSelector(state => state.profile.profile);
  const handleSubmit = e => {
    e.preventDefault();
    myImageAction();
    handleClose();
  };
  return (
    <>
      <Button variant="transparent" onClick={handleShow} className=" d-flex flex-column align-items-center">
        <CameraFill className="fs-4 mb-1" />
        Aggiungi foto
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cambia foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center">
            <Col xs={8} className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="my-3">{profile.name}, aiuta gli altri a riconoscerti!</h4>
              <img src={profile.image} alt="profile image" className="rounded-circle my-3" width={140} height={140} onClick={handleShow} />
              <span className="opacity-75 my-5">
                Chiediamo agli utenti di LinkedIn di utilizzare le loro vere identità, quindi scatta o carica una tua foto. Poi ritagliala, applica dei filtri e perfezionala come vuoi.
              </span>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group className="d-inline-block me-5" controlId="exampleForm.endDate">
              <Form.Label>Choose an image</Form.Label>
              <Form.Control onChange={e => onFileChange(e)} name="profile" type="file" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salva
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSelectImg;
