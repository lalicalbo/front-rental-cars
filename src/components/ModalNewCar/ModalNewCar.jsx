import React from 'react';
import { Modal, Button, Row, Form, Col } from "react-bootstrap";
import { createCar } from '../../api/ApiCars';
import "./modalnewcar.scss";


export const ModalNewCar = ({ setShow, show }) => {
  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const car = {
      marca: event.target[1].value,
      puertas: event.target[2].value,
      puestos: event.target[3].value,
      maletas: event.target[4].value,
      precio: parseInt(event.target[5].value),
    };

    createCar(car);
    setShow(false)
  };


  return (
    <Modal show={show} onHide={handleClose}>
      <Form className="modal-car" onSubmit={handleSubmit}>
        <Modal.Header className="close-button" closeButton>
          <Modal.Title className="modal-tittle" >Agregar Carro</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <>
            <br />
            <Row>
              <Form.Label column lg={2}>
                Marca
              </Form.Label>
              <Col>
                <Form.Control type="text" />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label column lg={2}>
                Puertas
              </Form.Label>
              <Col>
                <Form.Control type="Number" />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label column lg={2}>
                Puestos
              </Form.Label>
              <Col>
                <Form.Control type="Number" />
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
      </Form>
    </Modal>
  );
};

export default ModalNewCar;