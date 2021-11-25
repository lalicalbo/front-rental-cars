import React from "react";
import { Form , Col , Button, Row} from "react-bootstrap"
import "./resgister.form.scss";



const RegisterForm=()=>{
    return(
      
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
    <Form.Label column sm="2">
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

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="2">
      TOTAL:
    </Form.Label>
    <Col sm="6">
      <Form.Control type="number" />
    </Col>
  </Form.Group>
  <Button className="button2" >PAGAR</Button>
      </Form>
    )

}


export default RegisterForm;