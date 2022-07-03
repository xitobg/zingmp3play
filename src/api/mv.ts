import axios from "../utils/axios"

const getMV = async (id: string) => {
  try {
    const data = await axios.get("/video", {
      params: {
        id: id
      }
    })
    return data
  } catch(err) {
    console.log(err)
  }
}

export { getMV }

