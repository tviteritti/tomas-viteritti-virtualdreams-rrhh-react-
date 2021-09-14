import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import './Navegacion.css';

export default function Navegacion() {
    return (
        <>
            <Navbar  expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Virtual Dreams</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Servicios</Nav.Link>
                        <Nav.Link href="#home">Quíenes Somos</Nav.Link>
                        <Nav.Link href="#link">Búsquedas</Nav.Link>
                        <Nav.Link href="#home">Contacto</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}