import { NavDropdown, Image } from 'react-bootstrap';

const UserDropdown = ({ userInfo, handleLogout }) => {
  return (
    <NavDropdown
      title={
        <div className="d-flex flex-column align-items-center">
          <Image src={userInfo.image} roundedCircle width="30" height="30" />
          <span>Me</span>
        </div>
      }
      id="basic-nav-dropdown"
      alignRight
    >
      <div className="dropdown-profile">
        <div className="d-flex align-items-center">
          <Image src={userInfo.image} roundedCircle width="50" height="50" className="mr-3" />
          <div> 
            <strong> {userInfo.name} {userInfo.surname}</strong><br />
            <span>{userInfo.bio}</span>
          </div>
        </div>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#profile">View Profile</NavDropdown.Item>
        <NavDropdown.Divider />
        <h6 className="dropdown-header">Account</h6>
        <NavDropdown.Item href="#premium">Try Premium for €0</NavDropdown.Item>
        <NavDropdown.Item href="#settings">Settings & Privacy</NavDropdown.Item>
        <NavDropdown.Item href="#help">Help</NavDropdown.Item>
        <NavDropdown.Item href="#language">Language</NavDropdown.Item>
        <NavDropdown.Divider />
        <h6 className="dropdown-header">Manage</h6>
        <NavDropdown.Item href="#posts">Posts & Activity</NavDropdown.Item>
        <NavDropdown.Item href="#job-posting">Job Posting Account</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
      </div>
    </NavDropdown>
  );
};

export default UserDropdown;
