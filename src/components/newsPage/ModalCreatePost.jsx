import { useState } from "react";
import { Form } from "react-bootstrap";
import { Asterisk, Calendar, CaretDownFill, Clock, EmojiSmile, Image, PlusLg } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { epicPostsAction } from "../../redux/actions";

function ModalCreatePost() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [textPost, setTextPost] = useState({
    text: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formData = new FormData();
  const onFileChange = e => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("post", e.target.files[0]);
    }
  };
  const myPostImageAction = postId => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
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
        dispatch(epicPostsAction());
      })
      .catch(Error => {
        console.log(Error);
      });
  };

  const creaPostAction = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts`, {
      method: "POST",
      body: JSON.stringify(textPost),
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
      .then(post => {
        console.log(post);
        myPostImageAction(post._id);
        // dispatch(epicPostsAction());
        alert(`Post caricato con successo!`);
      })
      .catch(Error => {
        console.log(Error);
      });
  };

  const profile = useSelector(state => state.profile.profile);
  const handleSubmit = e => {
    e.preventDefault();
    creaPostAction();
    handleClose();
  };
  //   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquid debitis error voluptate delectus ipsa eius quos! Dolore, soluta. Dolorem neque itaque, distinctio praesentium veniam culpa mollitia quo ut! Natus?
  return (
    <>
      <Button variant="transparent" onClick={handleShow} className="me-2 py-3 text-start  rounded-pill w-100 border opacity-75 creaPost">
        Crea un post
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center gap-3">
            <img src={profile.image} alt="profile image" className="rounded-circle my-3 " width={100} height={100} />
            <div>
              <h4>
                {profile.name} {profile.surname} <CaretDownFill />
              </h4>
              <p className="fs-6 opacity-75">Pubblica: Chiunque</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group controlId="exampleForm.endDate">
              <Form.Control onChange={e => setTextPost({ text: e.target.value })} as="textarea" rows={5} placeholder="Di cosa vorresti parlare?" />
            </Form.Group>
            <Form.Group controlId="exampleForm.endDate" className="mt-3">
              <Form.Label>Choose an image</Form.Label>
              <Form.Control onChange={e => onFileChange(e)} name="post" type="file" rows={1} />
            </Form.Group>
          </Form>
          <EmojiSmile className="fs-4 d-block my-5" />
          <div className="d-flex gap-4">
            <Image className="fs-4" />
            <Calendar className="fs-4" />
            <Asterisk className="fs-4" />
            <PlusLg className="fs-4" />
          </div>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <Clock className="fs-4 ms-auto me-3" />
          <Button variant="primary" className="rounded-pill me-2 px-4  fw-bold " type="submit" onClick={e => handleSubmit(e)}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreatePost;
