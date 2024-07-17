import { Dropdown, Image, Button } from "react-bootstrap";

const UserDropdown = ({ userInfo, handleLogout }) => {
  return (
    <Dropdown className="d-flex">
      <Dropdown.Toggle as="div" className="d-flex flex-column align-items-center dropdown-toggle ms-2 me-2 pt-2">
        <Image src={userInfo.image} roundedCircle width="28" height="28" />
        <span>Me</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="dropdown-profile p-3">
          <div className="d-flex align-items-center">
            <Image src={userInfo.image} roundedCircle width="50" height="50" className="me-3" />
            <div>
              <strong>
                {userInfo.name} {userInfo.surname}
              </strong>
              <br />
              <span>{userInfo.title}</span>
            </div>
          </div>
        
          <div className="d-grid gap-2">
            <Button variant="outline-primary" href="#profile">
              View Profile
            </Button>
          </div>
          <Dropdown.Divider />
          <h6 className="fw-bold">Account</h6>
          <Dropdown.Item href="#premium">Try Premium for €0</Dropdown.Item>
          <Dropdown.Item href="#settings">Settings & Privacy</Dropdown.Item>
          <Dropdown.Item href="#help">Help</Dropdown.Item>
          <Dropdown.Item href="#language">Language</Dropdown.Item>
          <Dropdown.Divider />
          <h6 className="fw-bold">Manage</h6>
          <Dropdown.Item href="#posts">Posts & Activity</Dropdown.Item>
          <Dropdown.Item href="#job-posting">Job Posting Account</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Sign Out</Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;
