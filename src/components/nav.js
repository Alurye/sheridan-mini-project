import React from 'react';
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';

const NavContainer = (props) => {
  return (
    <Navbar id="nav">
      <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">My WebNow</a>
          </Navbar.Brand>
    </Navbar.Header>
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

    </Navbar>
  )
}

export default NavContainer;
