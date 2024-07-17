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
      <Nav.Link href="#network" className="d-flex flex-column align-items-center">
        <FaUsers />
        <span>My Network</span>
      </Nav.Link>
      <Nav.Link href="#jobs" className="d-flex flex-column align-items-center">
        <FaBriefcase />
        <span>Jobs</span>
      </Nav.Link>
      <Nav.Link href="#messaging" className="d-flex flex-column align-items-center">
        <FaComments />
        <span>Messaging</span>
      </Nav.Link>
      <Nav.Link href="#notifications" className="d-flex flex-column align-items-center">
        <FaBell />
        <span>Notifications</span>
      </Nav.Link>
    </>
  );
};

export default NavLinks;
