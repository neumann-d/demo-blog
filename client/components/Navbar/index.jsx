import React from 'react'
import { Link } from './style'
import { color } from '../../pages/theme'
// Navbar
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'

const NavbarComponent = ({ navData, companyName }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#">{companyName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {
            navData.map((nav, index) => (
              <Link
                to={nav.location}
                key={`${nav.name}_${index}`}
                color={color.greyWhite}
              >
                {nav.name}
              </Link>
            ))
          }
          {/* <Link to='/' showBlock={false} color={color.greyWhite}>Home</Link>
          <Link to='/aboutUs' showBlock={false} color={color.greyWhite}>About Us</Link>
          <Link to='/services' showBlock={false} color={color.greyWhite}>Services</Link>
          <Link to='/products' showBlock={false} color={color.greyWhite}>Products</Link> */}
          {/* <NavDropdown title="Products" id="collasible-nav-dropdown">
            <Link to="/Product1" showBlock={true} color={color.black}>Product 1</Link>
            <Link to="/Product2" showBlock={true} color={color.black}>Product 2</Link>
            <Link to="/Product3" showBlock={true} color={color.black}>Product 3</Link>
          </NavDropdown> */}
        </Nav>
        {/* <Nav>
          <Link to='/contact' showBlock={false} color={color.greyWhite}>Contact</Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent