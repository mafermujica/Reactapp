import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { RiHomeLine, RiSunLine, RiInformationLine, RiMailLine } from 'react-icons/ri';
import logo from'../Imagenes/logo.png';
import '../css/Header.css'



const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Navbar.Brand href="/ ">
        <img src={logo} alt="logo" className="App-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="/ ">
            <RiHomeLine className="nav-icon" /> Home
          </Nav.Link>
          <Nav.Link href="/clima">
            <RiSunLine className="nav-icon" /> Clima
          </Nav.Link>
          <Nav.Link href="/Sobrenosotras">
            <RiInformationLine className="nav-icon" /> Sobre Nostras
          </Nav.Link>
          <Nav.Link href="/contacto">
            <RiMailLine className="nav-icon" /> Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
