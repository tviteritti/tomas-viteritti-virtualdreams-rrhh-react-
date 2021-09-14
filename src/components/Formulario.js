import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import './Formulario.css';
import { useForm } from "../hooks/useForm";
import Modal from "./Modal"
import { useModal } from "../hooks/useModal"

const initialForm = {
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
};

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}([/.]\w{2,})?$/;

    if (!form.nombre.trim()) {
        errors.nombre = "El campo Nombre es requerido"
    } else if (!regexName.test(form.nombre.trim())) {
        errors.nombre = "El campo nombre solo acepta letras mayusculas y minusculas";
    }

    if (!form.email.trim()) {
        errors.email = "El campo email es requerido"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo email es incorrecto";
    }

    if (!form.asunto.trim()) {
        errors.asunto = "El campo asunto es requerido"
    }

    if (!form.mensaje.trim()) {
        errors.mensaje = "El campo mensaje es requerido"
    }

    return errors;
};

const Formulario = () => {
    const [isOpenModal1,openModal1,closeModal1] = useModal(false);
    const {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, validationsForm, openModal1);
    return (
        <>
            <Container>
                <Form className="formulario" onSubmit={handleSubmit}>
                    <h1>Contáctenos.</h1>
                    <p>Contáctenos sobre cualquier cosa relacionada con nuestra empresa o nuestros sercicios.</p>
                    <p>Haremos todo lo posible por darle respuesta a la brevedad.</p>
                    <Form.Group className="mb-3" controlId="formBasicNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={form.nombre}
                            required
                        />
                        {errors.nombre &&
                            <Form.Text className="text-muted">
                                {errors.nombre}
                            </Form.Text>
                        }
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={form.email}
                            required
                        />
                        {errors.email &&
                            <Form.Text className="text-muted">
                                {errors.email}
                            </Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAsunto">
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control
                            type="text"
                            name="asunto"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={form.asunto}
                            required
                        />
                        {errors.asunto &&
                            <Form.Text className="text-muted">
                                {errors.asunto}
                            </Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="mensaje"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={form.mensaje}
                            required
                        />
                        {errors.mensaje &&
                            <Form.Text className="text-muted">
                                {errors.mensaje}
                            </Form.Text>
                        }
                    </Form.Group>
                    
                    <div className="d-grid gap-2 button-enviar">
                        <Button size="lg" type="submit">
                            Enviar
                        </Button>
                    </div>
                    <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                        <h2>Estado:</h2>
                        <h4>Mensaje enviado con exito !!!</h4>
                        <img src="http://placeimg.com/400/400/animals" alt="animals"/>
                    </Modal>
                </Form>
            </Container>
        </>
    );
}

export default Formulario;