import React from 'react'
import { Table,Button } from 'react-bootstrap'
import "./car-list.scss"

const CarList = () => {
    return (
        <div className="car-list">   
             <Table responsive="sm" borderless  className="table">            
    <thead>
    <h1>Lista de carros</h1>
              <Button className="button2" variant="primary">Editar</Button>
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
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td> <Button className="button1" variant="primary">Editar</Button></td>
        <td> <Button className="button1" variant="primary">Eliminar</Button></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td> <Button className="button1" variant="primary">Editar</Button></td>
        <td> <Button className="button1" variant="primary">Eliminar</Button></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td> <Button className="button1" variant="primary">Editar</Button></td>
        <td> <Button className="button1" variant="primary">Eliminar</Button></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td> <Button className="button1" variant="primary">Editar</Button></td>
        <td> <Button className="button1" variant="primary">Eliminar</Button></td>
      </tr>
      <tr>
        <td>5</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td> <Button className="button1" variant="primary">Editar</Button></td>
        <td> <Button className="button1" variant="primary">Eliminar</Button></td>
      </tr>
      <tr>
        <td>6</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td> <Button className="button1" variant="primary">Editar</Button></td>
        <td> <Button className="button1" variant="primary">Eliminar</Button></td>
      </tr>
    </tbody>
  </Table>
   
        </div>
    )
}

export default CarList
