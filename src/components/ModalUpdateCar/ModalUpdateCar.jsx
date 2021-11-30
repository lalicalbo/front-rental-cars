import React, {useState} from 'react'
import { Modal, Button, Row, Form, Col } from "react-bootstrap"
import "./modalupdatecar.scss"
import { updateCar } from '../../api/ApiCars'


export const ModalUpdateCar = ({ currentCar, setShow, show }) => {

  const [update,setUpdate]=useState({});

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);


  const updateCars =(event)=>{
    event.preventDefault();
    console.log("update car",event)

    const updated={
      marca:event.target[1].value,
      puertas:event.target[2].value,
      puestos:event.target[3].value,
      maletas:event.target[4].value,
      precio:event.target[5].value,
    }

    
    updateCar(currentCar._id,updated).then(e => {
      setShow(false);
    }) 
    
  }

  return (
    <Modal  show={show} onHide={handleClose}>
      <Form className="modal-car" onSubmit={updateCars}  >
        <Modal.Header className="close-button" closeButton>
          <Modal.Title className="modal-tittle">Modificar Carro</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <>
            <br />
            <Row>
              <Form.Label column lg={2}>
                Marca: 
              </Form.Label>
              <Col>
                <Form.Control type="text" defaultValue={currentCar.marca}  />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label column lg={2}>
                Puertas
              </Form.Label>
              <Col>
                <Form.Control type="Number" defaultValue={currentCar.puertas} />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label column lg={2}>
                Puestos
              </Form.Label>
              <Col>
                <Form.Control type="Number" defaultValue={currentCar.puestos} />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label column lg={2}>
                Maletas
              </Form.Label>
              <Col>
                <Form.Control defaultValue={currentCar.maletas} />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label column lg={2}>
                Precio
              </Form.Label>
              <Col>
                <Form.Control type="Number" defaultValue={currentCar.precio} />
              </Col>
            </Row>

          </>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" className="button3" >Modificar</Button>
        </Modal.Footer>
      </Form>

    </Modal>

  )
}


export default ModalUpdateCar;