import React from "react"
import { useParams } from "react-router-dom"
import VideoPlayer from "../components/VideoPlayer"
import DetailMV from "../components/DetailMV"

const MV:React.FC = () => {

  const params = useParams<{id: string}>()

  return (
    <div className="pt-[65px] pb-[96px] px-[10vw]">
      {
        params.id &&
        <VideoPlayer id={params.id}/>
      }

      <DetailMV />

      <span className="text-[color:var(--color-text)] flex justify-center text-3xl font-medium">
        Tính năng đang phát triển
      </span>
    </div>
  )
}

export default MV
