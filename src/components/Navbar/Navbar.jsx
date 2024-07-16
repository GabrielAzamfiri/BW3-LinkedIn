import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { setToken, setUserInfo } from "../../features/user/userSlice";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";

const LinkedInNavbar = () => {
  const userInfo = useSelector(state => state.user.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_JOHN_KEY}`,
          },
        });
        const data = await response.json();
        dispatch(setUserInfo(data));
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };
    fetchUserInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    dispatch(setToken(null));
    dispatch(setUserInfo({}));
    localStorage.removeItem("token");
  };

  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Container>
        <Row className="w-100">
          <Col xs={12} className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#home">
              <img src="/linkedin-logo.png" alt="LinkedIn Logo" width="30" height="30" className="d-inline-block align-top" />
            </Navbar.Brand>
            <SearchBar />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center">
                <NavLinks />
                {userInfo.image ? <UserDropdown userInfo={userInfo} handleLogout={handleLogout} /> : <Nav.Link href="#login">Login</Nav.Link>}
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default LinkedInNavbar;
