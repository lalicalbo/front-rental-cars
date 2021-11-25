import React from 'react'
import imagenbanner3 from '../../resources/imagenbanner3.jpeg'
import "./baner.scss"

const Baner = () => {
    return (
        <div >
            <div className="img-banner">
            <img src={imagenbanner3} className="img"/>
            <div className="tittle">
                <p>BUGGY & BUMPER, INC</p>
            </div>
            <div className="text">
                <span>LA MEJOR RED DE ALQUILER DE AUTOS</span>
            </div>
            </div>
        </div>
       
    )
}

export default Baner
