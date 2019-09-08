import React from 'react'

// Navbar
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#">Porous Coatings</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#AboutUs">About Us</Nav.Link>
          <Nav.Link href="#Services">Services</Nav.Link>
          <NavDropdown title="Products" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#Product1">Product 1</NavDropdown.Item>
            <NavDropdown.Item href="#Product2">Product 2</NavDropdown.Item>
            <NavDropdown.Item href="#Product3">Product 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent