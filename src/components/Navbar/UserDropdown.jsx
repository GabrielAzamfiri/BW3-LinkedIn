import { NavDropdown, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SELECTED_PROFILE } from "../../redux/actions";

const UserDropdown = ({ userInfo, handleLogout }) => {
  const dispatch = useDispatch();

  return (
    <NavDropdown
      title={
        <div className="d-flex flex-column align-items-center">
          <Image src={userInfo.image} roundedCircle width="30" height="30" />
          <span>Me</span>
        </div>
      }
      id="basic-nav-dropdown"
    >
      <div className="dropdown-profile">
        <div className="d-flex align-items-center">
          <Image src={userInfo.image} roundedCircle width="50" height="50" className="mr-3" />
          <div>
            <strong>
              {userInfo.name} {userInfo.surname}
            </strong>
            <br />
            <span>{userInfo.title}</span>
          </div>
        </div>
        <NavDropdown.Divider />
        <Link to="/Profile" className="dropdown-item" onClick={() => dispatch(SELECTED_PROFILE, null)}>
          View Profile
        </Link>
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
