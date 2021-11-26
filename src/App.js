import { useState , useEffect} from "react"
import { Route ,Routes ,BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import CardContainer from "./components/CardContainer/index.js";
import RegisterContainer from "./components/RegisterContainer/index.js";
import Baner from "./components/Banner/index.js";
import InventoryCar from "./components/InventoryCar/index.js";
import './App.scss';
import ModalNewCar  from "./components/ModalNewCar/index.js";
//import axios from "axios";
//import {API_URL} from "./constants/index.js"
import { getCars} from "./api/ApiCars.js"



function App() {

  const[cars, setCars]= useState([]);


useEffect(()=>{
  //getCarAxios();
  getCars().then(cars =>setCars(cars))

},[])

  return (
    
    <Container fluid className="App"> 
    <Router>
    <Routes>
        <Route path ="/HOME"  exact element={<Baner />} />
      </Routes>
      <Routes>
        <Route path ="/HOME"  exact element={<CardContainer items={cars} />} />
      </Routes>
      <Routes>
        <Route path ="/HOME"  exact element={<RegisterContainer />} />
      </Routes>
      <Routes>
        <Route path ="/ADMIN"  exact element={<Baner />} />
      </Routes>
      <Routes>
        <Route path ="/ADMIN"  exact element={<InventoryCar />} />
      </Routes>
      <Routes>
        <Route path ="/ADMIN"  exact element={<ModalNewCar />} />
      </Routes>
    </Router>
    </Container>
  );
}

export default App;

/*
     <Baner />
    <CardContainer items={cars} />
    <RegisterContainer />
    <InventoryCar />
    <ModalNewCar />
    */