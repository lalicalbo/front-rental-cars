import React from "react";
import { Card } from "react-bootstrap";
import "./rent-card.scss";


export const RentCard = ({ currentCar }) => {

  return (
    <div className="rent-card">
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/236x/e9/f4/0b/e9f40b49ad5de0682d1411d1a3298b7f--green-lamborghini-lamborghini-cars.jpg" alt="cars models" />
        <Card.Title className="marca">{currentCar.marca} </Card.Title>
        <Card.Body className="Card">
          <Card.Text>Puertas:{currentCar.puertas} </Card.Text>
          <Card.Text>Puestos:{currentCar.puestos}  </Card.Text>
          <Card.Text>Maletas:{currentCar.maletas}  </Card.Text>
          <Card.Text>Precio:{currentCar.precio}  </Card.Text>
        </Card.Body>
      </Card >
    </div>
  );
};

export default RentCard;