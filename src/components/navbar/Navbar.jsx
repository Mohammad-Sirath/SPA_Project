import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { isLogin } from "../../utils";

function MyNavbar() {
  const [loginStatus, setLoginStatus] = useState(
    isLogin() ? "Log out" : "Log in"
  );

  useEffect(() => {
    setLoginStatus(isLogin() ? "Log out" : "Log in");
  }, []);

  const deleteCookies = () => {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  };

  const logoutHandler = () => {
    deleteCookies();
    localStorage.removeItem("username");
    setLoginStatus("Log in");
  };

  const expand = "md";

  return (
    <Navbar expand={expand} className="mb-3 custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
              <NavLink to="/articles" className="nav-link">
                Articles
              </NavLink>
              <NavLink to="/panel" className="nav-link">
                Panel
              </NavLink>
              <NavLink
                to={isLogin() ? "/" : "/login"}
                onClick={isLogin() ? logoutHandler : null}
                className="nav-link"
              >
                {loginStatus}
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
