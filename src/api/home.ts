import axios from "../utils/axios"

export const getHome = async () => {
  await axios.get("/home", {
    params: {
      page: 1
    }
  })
}
