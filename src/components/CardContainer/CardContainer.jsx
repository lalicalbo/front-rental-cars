import React from "react";
import CardCars from "./CardCars/index.js";
import "./card-container.scss"

const CardContainer =({items})=>{
    return(
        <div className="items-container" >
        {items.map((item,i)=>(
            <CardCars item={item} i={i} key={i} />
          ))} 
      </div>
    )
}


export default CardContainer;