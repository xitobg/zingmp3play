import axios from "../utils/axios"

const getArtist = async (name: string) => {
  try {
    const data = await axios.get<any, any>("/artist", {
      params: {
        name: name
      }
    })
    return data
  } catch(err) {
    console.log(err)
  }
}

export { getArtist }

