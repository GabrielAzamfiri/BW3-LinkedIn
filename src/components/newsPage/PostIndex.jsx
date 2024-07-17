import "../../../src/App.css";
import Container from "bootstrap/dist/css/bootstrap.min.css/Container";
import Row from "bootstrap/dist/css/bootstrap.min.css/Row";
import Col from "bootstrap/dist/css/bootstrap.min.css";
import NewsSideLeft from "./NewsSideLeft";
import NewsSideRight from "./NewsSideRight";
import NewsPost from "./NewsPost";

function PostIndex() {
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <NewsSideLeft />
          </Col>
          <Col md={6}>
            {" "}
            <NewsPost />{" "}
          </Col>
          <Col md={3}>
            <NewsSideRight />{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PostIndex;
