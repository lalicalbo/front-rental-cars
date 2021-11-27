import React from 'react'
import { Modal , Button ,Row,Form,Col } from "react-bootstrap"
import "./modalnewcar.scss"
import { createCar } from '../../api/ApiCars'


export const ModalNewCar = () => {
  
  const handleSubmit = (event) =>{
    event.preventDefault();
  
    const car = {
      marca:event.target[1].value,
      puertas:event.target[2].value,
      puestos:event.target[3].value,
      maletas:event.target[4].value,
      precio:parseInt(event.target[5].value),
    };

    createCar(car);
  };



    return (
        <Form className="modal-car"  onSubmit={handleSubmit}>
            <Modal.Dialog>
  <Modal.Header className="close-button"closeButton>
    <Modal.Title className="modal-tittle">Nuevo Carro</Modal.Title>
  </Modal.Header>
  <Modal.Body >
    <>
  <br />
  <Row>
    <Form.Label column lg={2}>
      Marca
    </Form.Label>
    <Col>
      <Form.Control type="text"   />
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column lg={2}>
     Puertas
    </Form.Label>
    <Col>
      <Form.Control type="Number"/>
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column lg={2}>
      Puestos
    </Form.Label>
    <Col>
      <Form.Control type="Number"  />
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column lg={2}>
      Maletas
    </Form.Label>
    <Col>
      <Form.Control />
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column lg={2}>
      Precio
    </Form.Label>
    <Col>
      <Form.Control type="Number" />
    </Col>
  </Row>
  
</>
  </Modal.Body>
  <Modal.Footer>
    <Button type="submit" className="button3" >Agregar</Button>
  </Modal.Footer>
</Modal.Dialog>

        </Form>
    )
}


export default ModalNewCar;