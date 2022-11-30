import React from "react";
import {Nav, Navbar, Container } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="/"><strong>NFT</strong> Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/halamanutama">Home</Nav.Link>
          <Nav.Link href="/aboutme">About Me</Nav.Link>
          <Nav.Link href="/aboutapp">About Aplikasi</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
