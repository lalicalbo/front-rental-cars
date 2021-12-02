import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap'
import { getCars } from "../../../api/ApiCars.js";
import { deleteCar } from "../../../api/ApiCars.js";
import ModalUpdateCar from '../../ModalUpdateCar';
import ModalNewCar from "../../ModalNewCar";
import "./car-list.scss";

const CarList = ({ setCurrentCar, currentCar }) => {

  const [cars, setCars] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showNewCar, setShowNewCar] = useState(false);

  useEffect(() => {
    getCars().then(cars => setCars(cars))
  }, []);

  const newCar = () => {
    setShowNewCar(true)
  };

  const remove = (id) => {
    deleteCar(id).then(e => {
    });
  };

  const update = (car) => {
    setShowUpdate(true)
    setCurrentCar(car)
  };


  return (
    <div className="car-list">
      <div className="button-list">
        <h1>Lista de carros</h1>
        <Button className="button1" variant="primary" onClick={newCar}>Crear</Button>
      </div>
      <Table responsive="sm" borderless className="table" >
        <thead>
          <tr>
            <th>Id</th>
            <th>Marca</th>
            <th>Puertas</th>
            <th>Puestos</th>
            <th>Maletas</th>
            <th>Precio</th>
            <th>Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((item, i) => (
            <tr key={i}>
              <td>{item._id}</td>
              <td>{item.marca}</td>
              <td>{item.puertas}</td>
              <td>{item.puestos}</td>
              <td>{item.maletas}</td>
              <td>${item.precio}</td>
              <td> <Button className="button1" variant="primary" onClick={() => { update(item) }}>Editar</Button></td>
              <td> <Button className="button1" variant="primary" onClick={() => { remove(item._id) }}>Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalUpdateCar currentCar={currentCar} setShow={setShowUpdate} show={showUpdate} />
      <ModalNewCar setShow={setShowNewCar} show={showNewCar} />
    </div>
  );
};

export default CarList;
