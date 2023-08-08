import axios from "axios";

const intance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    // Authorization: 
  }
})

export default intance;