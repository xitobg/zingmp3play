import React from "react"
import { useAppSelector } from "../../../hooks/redux"

const TrackInfo: React.FC = () => {

  const info:any = useAppSelector((state) => state.audio.infoSongPlayer)

  return(
    <div className="flex items-center">
      {/* Thumbnail */}
      <img
        src={info.thumbnail}
        alt={info.title}
        className="h-[46px] rounded-[5px]"
      />
      {/* End Thumbnail */}

      {/* Info */}
      <div className="flex flex-col justify-center h-[46px] ml-3">
        <div className="font-semibold text-base text-[color:var(--color-text)] opacity-90 mb-1 truncate">{info.title}</div>
        <div className="text-xs opacity-60 text-[color:var(--color-text)] truncate">{info.artistsNames}</div>
      </div>
      {/* End Info */}
    </div>
  )
}

export default TrackInfo