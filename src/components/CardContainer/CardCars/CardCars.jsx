import React from "react";
import { Card,Button} from "react-bootstrap";
import "./card.cars.scss"


const CardCars = ({item,i})=>{
    return(
      
     
      <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="https://i.pinimg.com/236x/e9/f4/0b/e9f40b49ad5de0682d1411d1a3298b7f--green-lamborghini-lamborghini-cars.jpg" alt="cars models" />
  <Card.Title className="marca">{item.marca}</Card.Title>
  <Card.Body className="Card">
    <Card.Text>Puertas:{item.puertas} </Card.Text>
    <Card.Text>Puestos:{item.puestos} </Card.Text>
    <Card.Text>Maletas:{item.maletas} </Card.Text>
    <Card.Text>Precio:{item.precio} </Card.Text>
    <Button className="button" variant="primary">Alquilar</Button>
  </Card.Body>
</Card>
       /* <div className="card" key={i}>
          <div className="img">
          <img src="https://i.pinimg.com/236x/e9/f4/0b/e9f40b49ad5de0682d1411d1a3298b7f--green-lamborghini-lamborghini-cars.jpg" alt="cars models"/>
          </div>
          <div className="text-container">
          <h2 className="marca">{item.marca}</h2>
          <div className="span">
          <span>Puertas:{item.puertas}</span>
          <span>Puestos:{item.puestos}</span>
          <span>Maletas:{item.maletas}</span>
          <span>Precio:{item.precio}</span>
          </div>
          </div> 
          <button className="button">ALQUILAR</button>
        </div>*/
    );
};


export default CardCars;