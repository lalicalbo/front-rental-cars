import React from "react";
import RegisterForm from "./RegisterForm/index.js";
import RentCard from "./RentCard/index.js";
import "./register-container.scss"


const RegisterContainer = ({ currentCar }) => {
    if (currentCar.marca !== undefined) {
        return (
            <div className="register-Container">
                <RentCard currentCar={currentCar} />
                <RegisterForm currentCar={currentCar} />
            </div>
        );
    }
    else {
        return (<div className="register-Container">
        </div>
        );
    };
};

export default RegisterContainer;