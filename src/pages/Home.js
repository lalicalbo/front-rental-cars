
import React,{ useState } from 'react'
import Baner from "../components/Banner";
import CardContainer from "../components/CardContainer";
import RegisterContainer from "../components/RegisterContainer";
import {Container} from "react-bootstrap";


const Home = () => { 
    const [currentCar, setCurrentCar] = useState({});

    return (
    <Container fluid className="App">
        <Baner/>
        <CardContainer setCurrentCar={setCurrentCar} />
        <RegisterContainer currentCar={currentCar}/>
    </Container>
)}

export default Home