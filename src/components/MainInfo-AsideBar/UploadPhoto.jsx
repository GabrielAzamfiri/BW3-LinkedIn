// import Axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const UploadFoto = () => {
  //   const formData = new FormData();
  //   const onFileChange = e => {
  //     console.log(e.target.files[0]);
  //     if (e.target && e.target.files[0]) {
  //       formData.append("profile", e.target.files[0]);
  //     }
  //   };
  //   const SubmitFileData = (e) => {
  //     e.preventDefault();
  //     // Axios.post(
  //     //   "https://striveschool-api.herokuapp.com/api/profile/6694ccf8196d7b0015d6b523/picture",
  //     //   { formData },
  //     //   {
  //     //     headers: {
  //     //       "Content-Type": "application/json",
  //     //       // chiave di autenticazione
  //     //       Authorization:
  //     //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0Y2NmODE5NmQ3YjAwMTVkNmI1MjMiLCJpYXQiOjE3MjEwMjc4MzIsImV4cCI6MTcyMjIzNzQzMn0.bPE2_KluKpUL7tntcvUDLXOKht7ySvsZvq0ydXmbl3o",
  //     //     },
  //     //   }
  //     // )
  //     //   .then(response => {
  //     //     console.log(response);
  //     //   })
  //     //   .catch(err => {
  //     //     console.log("Error uploading file:", err);
  //     //   });

  // };
  //   return (
  //     <>
  //       <div>
  //         <input type="file" name="file_upload" onChange={e => onFileChange(e)} />
  //       </div>
  //       <div>
  //         <button onClick={(e) => SubmitFileData(e)}>Submit</button>
  //       </div>
  //     </>
  //   );
  // };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log(email);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        prove formData
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" autoFocus name="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} name="text" />
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default UploadFoto;
