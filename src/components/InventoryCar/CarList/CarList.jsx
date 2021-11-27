import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap'
import "./car-list.scss"
import { getCars } from "../../../api/ApiCars.js";
import { deleteCar } from "../../../api/ApiCars.js";

const CarList = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars().then(cars => setCars(cars))
  }, [])


  const remove = (id) =>{
    deleteCar(id).then(e => {
      
    })
  }


  return (
    <div className="car-list">
      <Table responsive="sm" borderless className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Marca</th>
            <th>Puertas</th>
            <th>Puestos</th>
            <th>Maletas</th>
            <th>Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((item, i) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.marca}</td>
              <td>{item.puertas}</td>
              <td>{item.maletas}</td>
              <td>{item.precio}</td>
              <td> <Button className="button1" variant="primary">Editar</Button></td>
              <td> <Button className="button1" variant="primary" onClick={()=>{remove(item._id)}}>Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}

export default CarList
