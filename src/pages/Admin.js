
import React from 'react'
import Baner from "../components/Banner";
import InventoryCar from "../components/InventoryCar";
import ModalNewCar from "../components/ModalNewCar";
import {Container} from "react-bootstrap";


const Admin = () => (
    <Container fluid className="App">
        <Baner/>
        <InventoryCar/>
        <ModalNewCar/>
    </Container>
)

export default Admin