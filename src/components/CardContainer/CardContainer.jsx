import React from "react";
import Card from "./Card/index.js";
import "./card-container.scss"

const CardContainer =({items})=>{
    return(
        <div className="items-container" >
        {items.map((item,i)=>(
            <Card item={item} i={i} key={i} />
          ))} 
      </div>
    )
}


export default CardContainer;