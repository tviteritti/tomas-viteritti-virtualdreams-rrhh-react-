import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./PieDePagina.css";

export default function PieDePagina() {
    return (
        <>
            <div className="footer">
                <Container>
                    <div className="flex">
                        <p>Términos y Condiciones </p>
                        <p>©2021 - Virtual Dreams</p>
                    </div>
                </Container>
            </div>
        </>
    );
}