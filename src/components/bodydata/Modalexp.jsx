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
      <Button variant="primary" onClick={handleShow}>
        Buttt
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
