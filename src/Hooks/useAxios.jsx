import axios from "axios";

const instance = axios.create({
  baseURL: "https://assignment-no10-private-server.vercel.app",
  // baseURL: "http://localhost:3000",
});

const useAxios = () => {
  return instance;
};

export default useAxios;
