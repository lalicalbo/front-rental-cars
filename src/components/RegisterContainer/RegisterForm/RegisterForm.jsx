import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { quoteCar } from "../../../api/ApiCars.js";
import "./resgister.form.scss";


const RegisterForm = ({ currentCar }) => {
  const [quoteCarResponse, setQuoteCarResponse] = useState({});

  const quote = (event) => {
    event.preventDefault();
   
    const request = {
      id_car: currentCar._id,
      email: event.target[0].value,
      nombre: event.target[1].value,
      telefono: event.target[2].value,
      initial_date: event.target[3].value,
      end_date: event.target[4].value,
    };

    quoteCar(request).then(e => {
      setQuoteCarResponse(e)
    });
  };

  return (
    <Form className="form" onSubmit={quote}>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          Email:
        </Form.Label>
        <Col sm="6">
          <Form.Control type="email" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          Nombre:
        </Form.Label>
        <Col sm="6">
          <Form.Control type="text" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          Telfono:
        </Form.Label>
        <Col sm="6">
          <Form.Control type="number" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2" >
          Desde:
        </Form.Label>
        <Col sm="6">
          <Form.Control type="date" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          Hasta:
        </Form.Label>
        <Col sm="6">
          <Form.Control type="date" />
        </Col>
      </Form.Group>
      <span>Total: {quoteCarResponse.total}</span>
      <br />
      <Button type="submit" className="button2">Cotizar</Button>
    </Form>
  );
};

export default RegisterForm;