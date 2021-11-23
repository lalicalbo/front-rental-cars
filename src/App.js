import { useState , useEffect} from "react"
import './App.scss';
import CardContainer from "./components/CardContainer/index.js";



function App() {

  const[cars, setCars]= useState([]);

  useEffect(()=>{
    const loadData =()=>{
      fetch("https://api-rental-cars.herokuapp.com/api/car")
      .then(data=>data.json())
      .then(data =>{
        console.log("DATA",data)
        setCars(data)
      })
    };
    loadData();
  },[]);


  return (
    <div className="App">
    <h1>Alquila facilmente nuestros autos</h1>
    <CardContainer items={cars} />
  
    </div>
  );
}

export default App;
