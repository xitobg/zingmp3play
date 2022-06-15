import axios from "../utils/axios"

const getHomeApi = async (): Promise<any> => {
  return (
    await axios.get("/home", {
      params: {
        page: 1
      }
    })
  ).data.data.items.filter((item: any) => item.sectionType === "playlist")
}

export { getHomeApi }