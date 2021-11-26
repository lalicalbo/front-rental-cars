import axios from "axios"
import { API_URL } from "../constants/index.js" 


export const getCars = async ()=>{
    const endpoint = "/api/car"
     return axios.get(`${API_URL}${endpoint}`)
     .then(result =>{
      //console.log("data axiossss",result)
      //setCars(result.data)
      return result.data;
  
     })
     .catch (err=>{
       console.log("error",err)
     })
     
   }


 