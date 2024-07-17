import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function Modalexp() {
  const [show, setShow] = useState(false);

  const [experiences, setExperiences] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const myExperienceAction = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${Profile._id}/experiences`, {
      method: "POST",
      body: JSON.stringify(experiences),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_FETCH_KEY}`,
      },
    })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      })
      .then(deletedresp => {
        console.log(deletedresp);
      })
      .catch(Error => {
        console.log(Error);
      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = e => {
    e.preventDefault();

    Profile && myExperienceAction();
    e.target.reset();
  };

  const Profile = useSelector(state => state.profile.profile);

  return (
    <>
      <Button variant="transparent" onClick={handleShow} className="addPlus rounded-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.role">
              <Form.Label>Role</Form.Label>
              <Form.Control onChange={e => setExperiences({ ...experiences, role: e.target.value })} name="role" as="textarea" rows={1} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.company">
              <Form.Label>Company</Form.Label>
              <Form.Control onChange={e => setExperiences({ ...experiences, company: e.target.value })} name="company" as="textarea" rows={1} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control onChange={e => setExperiences({ ...experiences, startDate: e.target.value })} name="startDate" type="date" rows={1} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control onChange={e => setExperiences({ ...experiences, endDate: e.target.value })} name="endDate" type="date" rows={1} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={e =>
                  setExperiences({
                    ...experiences,
                    description: e.target.value,
                  })
                }
                name="dscription"
                as="textarea"
                rows={4}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.area">
              <Form.Label>Area</Form.Label>
              <Form.Control onChange={e => setExperiences({ ...experiences, area: e.target.value })} name="area" as="textarea" rows={1} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salva
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalexp;
