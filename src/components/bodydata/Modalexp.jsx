import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Modalexp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="transparent" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.role">
              <Form.Label>Role</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.company">
              <Form.Label>Company</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
            <p>Ancora in corso</p>
            <Form.Check aria-label="option 1" />

            <Form.Group className="mb-3" controlId="exampleForm.Description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.area">
              <Form.Label>Area</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalexp;
