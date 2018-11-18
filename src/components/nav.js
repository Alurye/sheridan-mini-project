import React from 'react';
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';

const NavContainer = (props) => {
  return (
    <Navbar id="nav">
      <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">MyWebNow</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
  <Nav pullRight>
    <NavItem eventKey={1} href="#">
      Home
    </NavItem>
    <NavItem eventKey={2} href="#">
      Why us
    </NavItem>
      <NavItem eventKey={3} href="#">
      Contact Us
      </NavItem>
      <NavItem eventKey={4} href="#">
      Login
      </NavItem>
      <NavItem eventKey={5} href="#">
        <Button className="bg-lightgreen">Support</Button>

      </NavItem>
  </Nav>
  </Navbar.Collapse>

    </Navbar>
  )
}

export default NavContainer;
