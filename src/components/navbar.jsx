import {
  Navbar,
  Nav,
  Container,
  //  NavDropdown
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logout } from "./../reducers/profileSlice";
import { useState } from "react";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState("Search");

  const brandOnClick = (e) => {
    navigate("/", { replace: true });
    setActive("Search");

  };
  const links = [
    {
      text: "Search",
      click: () => {
        navigate("/search", { replace: true });
        setActive("Search");
      },
    },
    {
      text: "WishList",
      click: () => {
        navigate("/wishlist", { replace: true });
        setActive("WishList");

      },
    },
    {
      text: "Log out",
      click: () => {
        navigate("/", { replace: true });
        dispatch(logout());
        setActive("Log out");
      },
    },
  ];
  const {logo}=props;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="pointer" onClick={brandOnClick}>
          <img
            alt=""
            src={logo}
            height="30"
            className="d-inline-block align-content-center"
          />{" "}
          Enrollment
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((element,index) => (
              <Nav.Link key={index} className={(active===element.text?"active":"")} onClick={element.click}>{element.text}</Nav.Link>
            ))}

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
