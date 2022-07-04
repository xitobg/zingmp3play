import React, { useEffect, useState } from "react"
import ReactPlayer from 'react-player'
import { getMV } from "../api/mv"
import { useParams } from "react-router-dom"

const MV:React.FC = () => {

  const params = useParams<{id: string}>()

  const [dataUrl, setDataUrl] = useState<{"360p": string, "480p": string, "720p": string}>()
  const [url, setUrl] = useState<string>()

  useEffect(() => {
    (
      async () => {
        const data:any = await getMV(`${params.id}`)
        setDataUrl(data.streaming.hls)
      }
    )()
  }, [params])

  return (
    <div className="mt-8 w-full h-full rounded-2xl">
      <ReactPlayer
        url={
          url || dataUrl?.["720p"]
        }
        controls={true}
      />
      <button
        onClick={() => {
          setUrl(dataUrl?.["360p"])
        }}
      >
        360p
      </button>
      <button
        onClick={() => {
          setUrl(dataUrl?.["480p"])
        }}
      >
        480p
      </button>
      <button
        onClick={() => {
          setUrl(dataUrl?.["720p"])
        }}
      >
        720p
      </button>
    </div>
  )
}

export default MV
