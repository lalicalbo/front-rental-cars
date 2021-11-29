import axios from "axios"
import { API_URL } from "../constants/index.js"


export const getCars = async () => {
  const endpoint = "/api/car"
  return axios.get(`${API_URL}${endpoint}`)
    .then(result => {
      return result.data;

    })
    .catch(err => {
      console.log("error", err)
    })

}


export const createCar = async (params) => {
  console.log(params)
  const endpoint = "/api/car/create"
  axios.post(`${API_URL}${endpoint}`, params)
    .catch(err => {
      console.log("error", err)
    })

}


export const quoteCar = async (params) => {
  console.log(params)
  const endpoint = "/api/rental/quote"
  return axios.post(`${API_URL}${endpoint}`, params)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log("error", err)
    })

}



export const deleteCar = async (id) => {
  console.log(id)
  const endpoint = `/api/car/delete/${id}`
  axios.delete(`${API_URL}${endpoint}`)
    .catch(err => {
      console.log("error", err)
    })

}


export const updateCar = async (id) => {
  console.log(id)
  const endpoint = `/api/car/update/${id}`
  axios.put(`${API_URL}${endpoint}`)
    .catch(err => {
      console.log("error", err)
    })

}






