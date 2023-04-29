import axios from "axios";

const instance = axios.create({
  baseURL: `https://${process.env.REACT_APP_API_URI}`,
  headers: {
    Authorization: `api-key ${process.env.REACT_APP_API_KEY}`,
  },
});

export default instance;
