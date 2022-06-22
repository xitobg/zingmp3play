import axios from "../utils/axios"

const getSong = async (id: string): Promise<any> => {
  try {
    return await axios.get("/song", {
        params: {
          id: id
        }
      }
    )
  } catch(err) {
    console.log(err)
  }
}

const getInfoSong = async (id: string): Promise<any> => {
  try {
    return await axios.get("/infosong", {
        params: {
          id: id
        }
      }
    )
  } catch(err) {
    console.log(err)
  }
}

interface typeCustomData {
  [key: string]: string
}

const getInfoSongPlayer = async (id: string): Promise<any> => {

  let customData:typeCustomData = {}

  await Promise.all([
    getSong(id),
    getInfoSong(id)
  ]).then((data) => {
    // console.log(data)
    data.forEach((e) => {
      if(e[128]) {
        customData["linkSong"] = e[128]
      }
      if(e.title) {
        customData["title"] = e.title
      }
      if(e.artistsNames) {
        customData["artistsNames"] = e.artistsNames
      }
      if(e.thumbnail) {
        customData["thumbnail"] = e.thumbnail
      }
    })
  }).catch((err) => {
    console.log(err)
  })

  return customData
}

export { getSong, getInfoSong, getInfoSongPlayer }
