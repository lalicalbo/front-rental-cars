
import React from 'react'
import Baner from "../components/Banner";
import CardContainer from "../components/CardContainer";
import RegisterContainer from "../components/RegisterContainer";
import {Container} from "react-bootstrap";


const Home = () => (
    <Container fluid className="App">
        <Baner/>
        <CardContainer/>
        <RegisterContainer/>
    </Container>
)

export default Home