import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { getDetailPlaylist } from "../api/playlist"
import PlaylistInfo from "../components/Playlist/PlaylistInfo"

const Playlist: React.FC = () => {

  const [dataPlaylist, setDataPlaylist] = useState<any>({})

  const params: any = useParams()

  useEffect(() => {
    (
      async () => {
        setDataPlaylist(await getDetailPlaylist(params.playlistId))
      }
    )()
  }, [])

  return (
    <>
      {/* {console.log(dataPlaylist)} */}
      <Navbar />
      {/* Main Playlist */}
      <div
        className="
          mt-20
          mx-[10vw]
        "
      >
        <PlaylistInfo thumbnail={dataPlaylist.thumbnailM}/>
      </div>
      {/* End Main Playlist */}
    </>
  )
}

export default Playlist