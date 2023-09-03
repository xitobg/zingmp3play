import axios from "axios"

const instance = axios.create({
  baseURL: 'https://musictes.vercel.app/api',
})

// custom response
instance.interceptors.response.use(
  (response) => {
    return response.data.data
  }, function (error) {
    return Promise.reject(error);
  });


export default instance
