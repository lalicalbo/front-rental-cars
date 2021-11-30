import React from 'react'
import { Form, Button } from 'react-bootstrap'
import imagenbanner3 from '../../resources/imagenbanner3.jpeg'
import "./baner.scss"

const Baner = () => {
    return (
        <div >
            <div className="img-banner">
                <img src={imagenbanner3} className="img" alt="" />
                <div className="tittle">
                    <p>BUGGY & BUMPER, INC</p>
                </div>
                <div className="text">
                    <span>LA MEJOR RED DE ALQUILER DE AUTOS</span>
                </div>
                <div className="user">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Usuario" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button variant="primary" type="submit" className="submit">
                            Ingresar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>

    )
}

export default Baner
