import React, { useEffect, useState } from "react"
import { getArtist, getArtistSong } from "../api/artist"
import { useParams } from "react-router-dom"
import DetailArtistInfo from "../components/DetailArtistInfo"
import TrackPlaylist from "../components/TrackPlaylist"
import Loading from "../components/Loading"
import {useAppDispatch} from "../hooks/redux"
import { setPlaylistSong } from "../redux/features/audioSlice"

interface artistType {
  id: string
  name: string
  thumbnailM: string
  sortBiography: string
  realname: string
  birthday: string
  totalFollow: number
  items: []
}

const Artist: React.FC = () => {

  const params = useParams<{name: string}>()
  const [dataDetailArtist, setDataDetailArtist] = useState<artistType>()
  const [dataListArtistSong, setDataListArtistSong] = useState<artistType>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    (
      async () => {
        if(params.name) {
          const data = await getArtist(params.name)
          setDataDetailArtist(data)
        }
      }
    )()
  }, [params.name])

  useEffect(() => {
    (
      async () => {
        if(dataDetailArtist) {
          const data = await getArtistSong(dataDetailArtist.id, "1", "200")
          setDataListArtistSong(data)
          dispatch(setPlaylistSong(data.items))
        }
      }
    )()
  }, [dataDetailArtist, dispatch])

  return(
    <>
      <div className="mx-[10vw] mt-16 mb-24">
        {
          dataDetailArtist
          ?
          <>
            <DetailArtistInfo
              name={dataDetailArtist.name}
              thumbnailM={dataDetailArtist.thumbnailM}
              sortBiography={dataDetailArtist.sortBiography}
              realname={dataDetailArtist.realname}
              birthday={dataDetailArtist.birthday}
              totalFollow={dataDetailArtist.totalFollow}
            />
            {
              dataListArtistSong
              ?
              <TrackPlaylist items={dataListArtistSong.items}/>
              :
              <Loading />
            }
          </>
          :
          <Loading />
        }
      </div>
    </>
  )
}

export default Artist
