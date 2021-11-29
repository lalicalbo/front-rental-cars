import React from 'react'
import "./inventory-car.scss"
import Header from './Header/index.js'
import CarList from './CarList/index.js'

const InventoryCar = ({setCurrentCar, currentCar}) => {
    return (
        <div className="inventory">
            <Header />
            <CarList setCurrentCar={setCurrentCar} currentCar={currentCar}/>    
        </div>
    )
}

export default InventoryCar
