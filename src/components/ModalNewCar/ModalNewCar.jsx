import React from 'react'
import { Modal , Button ,Row,Form,Col } from "react-bootstrap"
import "./modalnewcar.scss"

export const ModalNewCar = () => {
    return (
        <div className="modal-car">
            <Modal.Dialog>
  <Modal.Header className="close-button"closeButton>
    <Modal.Title className="modal-tittle">Nuevo Carro</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <>
  <br />
  <Row>
    <Form.Label column lg={2}>
      Marca
    </Form.Label>
    <Col>
      <Form.Control type="text"  />
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column lg={2}>
     Puertas
    </Form.Label>
    <Col>
      <Form.Control type="text"/>
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column lg={2}>
      Puestos
    </Form.Label>
    <Col>
      <Form.Control type="text"  />
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column lg={2}>
      Maletas
    </Form.Label>
    <Col>
      <Form.Control type="text"  />
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column lg={2}>
      Subir imagen
    </Form.Label>
    <Col>
      <Form.Control type="text"  />
    </Col>
  </Row>
  
</>
  </Modal.Body>
  <Modal.Footer>
    <Button className="button3" >Agregar</Button>
  </Modal.Footer>
</Modal.Dialog>

        </div>
    )
}


export default ModalNewCar;