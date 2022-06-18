import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { getDetailPlaylist } from "../api/playlist"
import DetailPlaylistInfo from "../components/DetailPlaylistInfo"

const Playlist: React.FC = () => {

  const [dataPlaylist, setDataPlaylist] = useState<any>({})

  const params:any = useParams()

  useEffect(() => {
    (
      async () => {
        setDataPlaylist(await getDetailPlaylist(params.playlistId))
      }
    )()
  }, [params])

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
        <DetailPlaylistInfo thumbnail={dataPlaylist.thumbnailM}/>
      </div>
      {/* End Main Playlist */}
    </>
  )
}

export default Playlist