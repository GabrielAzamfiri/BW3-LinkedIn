// import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobsSideBar from './JobsSideBar';
import JobsContent from './JobsContent';
import JobFooter from './JobFooter';
import "../../App.css"; 

const JobsPage = ({ jobs, loading, error }) => {
  return (
    <Container className="jobs-container">
      <Row>
        <Col md={3}>
          <JobsSideBar />
        </Col>
        <Col md={6}>
          <JobsContent jobs={jobs} loading={loading} error={error} />
        </Col>
        <Col md={3}>
          <JobFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default JobsPage;
