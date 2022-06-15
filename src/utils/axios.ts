import axios from "axios"

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PATH_API}`
});

export default instance
