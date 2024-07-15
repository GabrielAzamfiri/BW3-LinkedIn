import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import MainProfile from "./components/MainProfile";

function App() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10}>
          <MainProfile />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
