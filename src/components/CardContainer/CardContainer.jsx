import React, {useEffect, useState} from "react";
import CardCars from "./CardCars/index.js";
import "./card-container.scss"
import {getCars} from "../../api/ApiCars";

const CardContainer =({props})=>{
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(cars => setCars(cars))
    }, [])

    return(
        <div className="items-container" >
        {cars.map((item,i)=>(
            <CardCars item={item} i={i} key={i} />
          ))} 
      </div>
    )
}


export default CardContainer;