import React from "react";
import RegisterForm from "./RegisterForm/index.js";
import RentCard from "./RentCard/index.js";
import "./register-container.scss"


const RegisterContainer =()=>{
    return(
        <div className="register-Container">
            <RentCard />
        
            <RegisterForm />

        </div>
    )
}


export default RegisterContainer;