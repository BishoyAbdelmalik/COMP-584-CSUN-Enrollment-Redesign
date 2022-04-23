import React from "react";
import {
  Navbar,
  Nav,
  Container,
  //  NavDropdown
} from "react-bootstrap";
import logo from "./../CSUNorthridgelogo.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import  {logout}  from "../reducers/profileSlice";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const signOut = ()=>{
    dispatch(logout());
    document.location.href="/";

  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="text-decoration-none text-dark navbar-brand">
          <img
            alt=""
            src={logo}
            height="30"
            className="d-inline-block align-content-center"
          />{" "}
          Enrollment
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-decoration-none text-muted">
              Home
            </Link>

            <Link
              to="/search"
              className="nav-link text-decoration-none text-muted"
            >
              Search
            </Link>

            <Link
              to="/Wishlist"
              className="nav-link text-decoration-none text-muted"
            >
              Wishlist
            </Link>
            <Nav.Link href="#" onClick={signOut}>
                Log out
            </Nav.Link>

            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;