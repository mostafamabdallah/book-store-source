import axios from "axios";

const productURL = "http://192.168.1.114:8000/api/";

export const fetchProduct = axios.create({
  baseURL: productURL,
});
