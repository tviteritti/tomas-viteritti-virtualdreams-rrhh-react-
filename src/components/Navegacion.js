import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import './Navegacion.css';
import {Link} from "react-router-dom"

export default function Navegacion() {
    return (
        <>
            <Navbar  expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                                <Link to="/">Virtual Dreams</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                                <Link to="/">Inicio</Link>
                        </Nav.Link>
                            
                        <Nav.Link>
                                <Link to="/servicio">servicio</Link>
                        </Nav.Link>
                            
                        <Nav.Link>
                                <Link to="/quienes-somos">quienes-somos</Link>
                        </Nav.Link>
                            
                        <Nav.Link>
                                <Link to="/busqueda">busqueda</Link>
                        </Nav.Link>
                            
                        <Nav.Link>
                                <Link to="/contacto">Contacto</Link>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}