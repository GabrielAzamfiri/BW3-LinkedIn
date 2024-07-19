import { useState } from 'react';
import { Card } from 'react-bootstrap';
import "../../App.css"; 

const JobsContent = ({ jobs, loading, error }) => {
  const [visibleJobs, setVisibleJobs] = useState(3); 

  const showMoreJobs = () => {
    setVisibleJobs(prevVisibleJobs => prevVisibleJobs + 3);
  };

  

  return (
    <Card className="jobs-content">
      <Card.Body>
        <div className="jobs-header pb-4">
          <h1>Hiring in your network</h1>
          <p>Explore relevant jobs in your network</p>
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        <div className="jobs-list">
          {Array.isArray(jobs) && jobs.slice(0, visibleJobs).map(job => (
            <div className="job-item" key={job._id}>
              <h2 className="job-title text-primary  text-decoration-underline">{job.title}</h2>
              <h3 className="job-company text-muted">{job.company_name}</h3>
              <p className="job-location text-muted">{job.candidate_required_location}</p>
            </div>
          ))}
        </div>
        {visibleJobs < jobs.length && ( 
          <div className="show-more mt-4" onClick={showMoreJobs}>Show More</div>
        )}
      </Card.Body>
    </Card>
  );
};

export default JobsContent;
