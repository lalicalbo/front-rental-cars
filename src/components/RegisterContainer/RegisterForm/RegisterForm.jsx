import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row } from "react-bootstrap"
import "./resgister.form.scss";
import { quoteCar } from "../../../api/ApiCars.js"



const RegisterForm = ({ currentCar }) => {
  const [quoteCarResponse, setQuoteCarResponse] = useState({});

  const cotizar = () => {
    const request = {
      "id_car": currentCar._id,
      "initial_date": "11/20/2021",
      "end_date": "11/27/2021"
    }
    quoteCar(request).then(e => {
      setQuoteCarResponse(e)
    })
  }

  const pagar = () => {

  }

  return (

    <Form className="form" >
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
      <Button className="button2" onClick={cotizar} >Cotizar</Button>
      <Button className="button2" onClick={pagar} hidden={quoteCarResponse.total == undefined}>Pagar</Button>
    </Form>
  )

}


export default RegisterForm;