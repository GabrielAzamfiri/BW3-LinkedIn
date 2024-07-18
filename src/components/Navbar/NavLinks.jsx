import { Nav } from "react-bootstrap";
import { FaHome, FaUsers, FaBriefcase, FaComments, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Link to="/" className="nav-link d-flex flex-column align-items-center">
        <FaHome />
        <span>Home</span>
      </Link>
      <Nav.Link as={Link} to="/network" className="d-flex flex-column align-items-center">
        <FaUsers />
        <span>My Network</span>
      </Nav.Link>
      <Nav.Link as={Link} to="/jobs" className="d-flex flex-column align-items-center pt-3">
        <FaBriefcase />
        <span>Jobs</span>
      </Nav.Link>
      <Nav.Link as={Link} to="/messaging" className="d-flex flex-column align-items-center pt-3">
        <FaComments />
        <span>Messaging</span>
      </Nav.Link>
      <Nav.Link as={Link} to="/notifications" className="d-flex flex-column align-items-center pt-3">
        <FaBell />
        <span>Notifications</span>
      </Nav.Link>
    </>
  );
};

export default NavLinks;
