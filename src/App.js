import { useState , useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import axios from "axios";
import {API_URL} from "./constants/index.js"
import './App.scss';
import CardContainer from "./components/CardContainer/index.js";



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
    <h1>Alquila facilmente nuestros autos</h1>
    <CardContainer items={cars} />
    </Container>
  );
}

export default App;
