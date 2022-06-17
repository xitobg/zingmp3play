import axios from "../utils/axios"

interface typesData {
  items: {
    sectionType: string
  }[]
}

const getHomeApiPlayList = async (page: number): Promise<any> => {
  try {
    const data:typesData = await axios.get("/home", {
        params: {
          page: page
        }
      }
    )
    let customData:Array<object> = []
    data.items.forEach((element) => {
      console.log()
      if(element.sectionType === "playlist") {
        customData.push(element)
      }
      if(element.sectionType === "artistSpotlight") {
        customData.push(element)
      }
    })
    return customData
  } catch(err) {
    console.log(err)
  }
}

export { getHomeApiPlayList }
