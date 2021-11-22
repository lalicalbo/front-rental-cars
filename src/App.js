import { useState , useEffect} from "react"
import './App.scss';
//import imagen from "./resources/imagen-banner3.jpeg"
//import RegisterForm from './components/RegisterForm';


function App() {

  const[cars, setCars]= useState([]);

  useEffect(()=>{
    const loadData =()=>{
      fetch("http://localhost:3007/api/car")
      .then(data=>data.json())
      .then(data =>{
        console.log("DATA",data)
      })
    };
    loadData();
  },[]);


  return (
    <div className="App">
    <h1>BUGGY AND BUMPER CAR</h1>
    <div className="cars-container">
      <div className="card-cars">
        <div className="img">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
        </div>
        <div className="text-container">
        <h2>Marca:</h2>
        <span>Puertas:</span>
        <span>Puestos:</span>
        <span>Maletas:</span>
        <span>Precio:</span>
        <button>ALQUILAR</button>
        </div> 
      </div>

      <div className="card-cars">
        <div className="img">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
        </div>
        <div className="text-container">
        <h2>Marca:</h2>
        <span>Puertas:</span>
        <span>Puestos:</span>
        <span>Maletas:</span>
        <span>Precio:</span>
        <button>ALQUILAR</button>
        </div> 
      </div>

      <div className="card-cars">
        <div className="img">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
        </div>
        <div className="text-container">
        <h2>Marca:</h2>
        <span>Puertas:</span>
        <span>Puestos:</span>
        <span>Maletas:</span>
        <span>Precio:</span>
        <button>ALQUILAR</button>
        </div> 
      </div>
    </div>
    </div>
  );
}

export default App;
