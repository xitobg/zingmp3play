import axios from "../utils/axios"

const getHomeApiPlayList = async (page: number): Promise<any> => {
  try {
    return (
      await axios.get("/home", {
        params: {
          page: page
        }
      })
    ).data.data.items.filter((item: any) => item.sectionType === "playlist")
  } catch(err) {
    console.log(err)
  }
}

const getHomeApiArtist = async (page: number): Promise<any> => {
  try {
    return (
      await axios.get("/home", {
        params: {
          page: page
        }
      })
    ).data.data.items.filter((item: any) => item.sectionType === "artistSpotlight")
  } catch(err) {
    console.log(err)
  }
}

export { getHomeApiPlayList, getHomeApiArtist }