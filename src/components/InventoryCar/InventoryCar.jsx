import React from 'react'
import "./inventory-car.scss"
import Header from './Header/index.js'
import CarList from './CarList/index.js'

const InventoryCar = () => {
    return (
        <div className="inventory">
            <Header />
            <CarList />

            
        </div>
    )
}

export default InventoryCar
