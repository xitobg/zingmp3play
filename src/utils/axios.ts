import axios from "axios"

const instance = axios.create({
  baseURL: 'https://server-tau-six.vercel.app/api/',
})

// custom response
instance.interceptors.response.use(
  (response) => {
    return response.data.data
  }, function (error) {
    return Promise.reject(error);
  });


export default instance
