import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { getDetailPlaylist } from "../api/detailPlaylist"
import DetailPlaylistInfo from "../components/DetailPlaylistInfo"

const Playlist: React.FC = () => {

  const [dataDetailPlaylist, setDataDetailPlaylist] = useState<any>()

  const params:any = useParams()

  useEffect(() => {
    (
      async () => {
        setDataDetailPlaylist(await getDetailPlaylist(params.playlistId))
      }
    )()
  }, [params])

  return (
    <>
      {console.log(dataDetailPlaylist)}
      <Navbar />
      {
        dataDetailPlaylist &&
        <div className="mx-[10vw] mt-20">
          <DetailPlaylistInfo
            thumbnailM={dataDetailPlaylist.thumbnailM}
            title={dataDetailPlaylist.title}
            artists={dataDetailPlaylist.artists}
            total={dataDetailPlaylist.song.total}
            description={dataDetailPlaylist.description}
          />
        </div>
      }
    </>
  )
}

export default Playlist