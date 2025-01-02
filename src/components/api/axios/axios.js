import axios from "axios";

const instance = axios.create({
  baseURL: "https://agalyawamm-backend.onrender.com/api/",
});

export default instance;
