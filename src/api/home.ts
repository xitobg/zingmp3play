import axios from "../utils/axios"

interface typesData {
  items: {
    sectionType: string
  }[]
}

const getHomePlayList = async (page: number): Promise<any> => {
  try {
    const data:typesData = await axios.get("/home", {
        params: {
          page: page
        }
      }
    )
    let customData:Array<object> = []
    data.items.forEach((element) => {
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

const getDataHome = async (): Promise<any> => {

  let customData:Array<object> = []

  await Promise.all([
    getHomePlayList(1),
    getHomePlayList(2),
    getHomePlayList(3),
    getHomePlayList(4),
    getHomePlayList(5),
  ]).then((values) => {
    customData = [].concat(...values)
  }).catch((err) => {
    console.log(err)
  })

  return customData
}

export { getDataHome }
