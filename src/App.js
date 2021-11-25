import { useState , useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import axios from "axios";
import {API_URL} from "./constants/index.js"
import './App.scss';
import CardContainer from "./components/CardContainer/index.js";
import RegisterContainer from "./components/RegisterContainer/index.js";
import Baner from "./components/Banner/index.js";



function App() {

  const[cars, setCars]= useState([]);
  
const getCarAxios =()=>{
  const endpoint = "/api/car"
   axios.get(`${API_URL}${endpoint}`)
   .then(result =>{
    console.log("data axios",result)
    setCars(result.data)

   })
   .catch (err=>{
     console.log("error",err)
   })
   
 }

useEffect(()=>{
  getCarAxios();

},[])

  return (
    
    <Container fluid className="App"> 
    <Baner />
    <CardContainer items={cars} />
    <RegisterContainer />
    </Container>
  );
}

export default App;
