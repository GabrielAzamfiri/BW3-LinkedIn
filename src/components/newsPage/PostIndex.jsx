import NewsSideLeft from "./NewsSideLeft";
import NewsSideRight from "./NewsSideRight";
import NewsPost from "./NewsPost";
import { Col, Container, Row } from "react-bootstrap";

function PostIndex() {
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-4">
          <Col md={3}>
            <NewsSideLeft />
          </Col>
          <Col md={6}>
            <NewsPost />
          </Col>
          <Col md={3}>
            <NewsSideRight />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PostIndex;
