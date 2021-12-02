import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import Baner from "../components/Banner";
import InventoryCar from "../components/InventoryCar";


const Admin = () => {
    const [currentCar, setCurrentCar] = useState({});

    return (
        <Container fluid className="App">
            <Baner />
            <InventoryCar setCurrentCar={setCurrentCar} currentCar={currentCar} />
        </Container>
    );
};

export default Admin;