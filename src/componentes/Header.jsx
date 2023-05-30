import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { RiHomeLine, RiSunLine, RiInformationLine, RiMailLine } from 'react-icons/ri';
import logo from'../Imagenes/logo.png';
import '../css/Header.css'



const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Navbar.Brand href="../componentes/Welcome.jsx">
        <img src={logo} alt="logo" className="App-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="../componentes/Welcome.jsx">
            <RiHomeLine className="nav-icon" /> Home
          </Nav.Link>
          <Nav.Link href="../componentes/Cardclima.jsx">
            <RiSunLine className="nav-icon" /> Clima
          </Nav.Link>
          <Nav.Link href="../componentes/Sobrenosotras.jsx">
            <RiInformationLine className="nav-icon" /> About Us
          </Nav.Link>
          <Nav.Link href="../componentes/Contactanos.jsx">
            <RiMailLine className="nav-icon" /> Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
