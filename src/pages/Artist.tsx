import React, { useEffect, useState } from "react"
import { getArtist } from "../api/artist"
import { useParams } from "react-router-dom"
import DetailArtistInfo from "../components/DetailArtistInfo"

interface artistType {
  name: string
  thumbnailM: string
  sortBiography: string
  realname: string
  birthday: string
  totalFollow: number
}

const Artist: React.FC = () => {

  const params = useParams<{name: string}>()
  const [dataDetailArtist, setDataDetailArtist] = useState<artistType>()

  useEffect(() => {
    (
      async () => {
        if(params.name) {
          const data = await getArtist(params.name)
          setDataDetailArtist(data)
        }
      }
    )()
  }, [params])

  console.log(dataDetailArtist)

  return(
    <>
      <div className="mx-[10vw] mt-16 mb-24">
        {
          dataDetailArtist &&
          <>
            <DetailArtistInfo
              name={dataDetailArtist.name}
              thumbnailM={dataDetailArtist.thumbnailM}
              sortBiography={dataDetailArtist.sortBiography}
              realname={dataDetailArtist.realname}
              birthday={dataDetailArtist.birthday}
              totalFollow={dataDetailArtist.totalFollow}
            />
          </>
        }
      </div>
    </>
  )
}

export default Artist