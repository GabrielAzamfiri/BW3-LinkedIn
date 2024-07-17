import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { setToken, setUserInfo } from "../../redux/actions";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";
import ForBusinessDropdown from "./ForBusinessDropdown";
import { Link } from "react-router-dom";

const LinkedInNavbar = () => {
  const userInfo = useSelector(state => state.profile.profile);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setToken(null));
    dispatch(setUserInfo({}));
    localStorage.removeItem("token");
  };

  return (
    userInfo && (
      <Navbar bg="light" expand="lg" className="px-3 custom-navbar">
        <Container>
          <Row className="w-100 justify-content-center">
            <Col xs={10} className="d-flex justify-content-between align-items-center">
              <Link to={"/"} className="navbar-brand">
                <img src="/linkedin-logo.png" alt="LinkedIn Logo" width="30" height="30" className="d-inline-block align-top" />
              </Link>
              <SearchBar />
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto navbar-nav">
                  <NavLinks />
                  {userInfo.image ? (
                    <>
                      <UserDropdown userInfo={userInfo} handleLogout={handleLogout} />
                      <div className="vertical-separator"></div>
                      <ForBusinessDropdown />
                    </>
                  ) : (
                    <Nav.Link href="#login">Login</Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    )
  );
};

export default LinkedInNavbar;
