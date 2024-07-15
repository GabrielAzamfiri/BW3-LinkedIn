import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Container } from "react-bootstrap";
import MainProfile from "./components/MainProfile";

function App() {
  return (
    <Container>
      <MainProfile />
    </Container>
  );
}

export default App;
