import { Card, Button } from 'react-bootstrap';

const JobsSidebar = () => {
  return (
    <Card className="jobs-sidebar">
      <Card.Body>
        <Card.Text>
        <svg
          fill="currentColor"
          className="icon-jobsSidebar bi bi-bookmark">
          <path d="M2 2v13.5l6-3.5 6 3.5V2z" />
        </svg>My jobs</Card.Text>
        <Card.Text>
        <svg
          fill="currentColor"
          className="icon-jobsSidebar bi bi-list">
          <path fillRule="evenodd" d="M3 4.5A.5.5 0 0 1 3.5 4h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
        </svg>Preferences</Card.Text>
        <Card.Text>
        <svg
          fill="currentColor"
          className="icon-jobsSidebar bi bi-file-earmark-text">
          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6l4 4.5zM9.5 3.5V5a1 1 0 0 0 1 1h1.5L9.5 3.5zM5 7.5A.5.5 0 0 1 5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM5 10a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 10zm0 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
        </svg>Interview prep</Card.Text>
        <Card.Text>
        <svg className="icon-jobsSidebar bi bi-play-btn">
  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4-2.5a.5.5 0 0 0 0-.814l-4-2.5zM6 10.5V5.5L10 8l-4 2.5z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2z"/>
</svg>
Job seeker guidance</Card.Text>
        <Button variant="outline-primary" className="w-100 mt-2">
        <svg fill="blue" className="icon-jobsSidebar bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708l-10 10A.5.5 0 0 1 4.793 14H2.5a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.354l10-10zM11.207 3.5 2.5 12.207V13.5h1.293L13.5 4.793 11.207 3.5zM14 2.5 13.5 2 11 4.5 11.5 5 14 2.5z"/>
</svg>
Post a free job</Button>
      </Card.Body>
    </Card>
  );
};

export default JobsSidebar;
