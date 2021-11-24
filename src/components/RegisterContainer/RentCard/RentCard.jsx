import React from "react";
import { Card,Button} from "react-bootstrap";
import "./rent-card.scss"

 export const RentCard=()=>{
     return(
         <div className="rent-card">
<Card style={{ width: '15rem'}}>
  <Card.Img variant="top" src="https://i.pinimg.com/236x/e9/f4/0b/e9f40b49ad5de0682d1411d1a3298b7f--green-lamborghini-lamborghini-cars.jpg" alt="cars models" />
  <Card.Title className="marca">Marca</Card.Title>
  <Card.Body className="Card">
    <Card.Text>Puertas: </Card.Text>
    <Card.Text>Puestos: </Card.Text>
    <Card.Text>Maletas: </Card.Text>
    <Card.Text>Precio: </Card.Text>
    <Button className="button" variant="primary">Alquilar</Button>
  </Card.Body>
</Card >
         </div>
     

     )
 }


 export default RentCard;