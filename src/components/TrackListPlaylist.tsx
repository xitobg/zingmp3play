import React, { useContext } from "react"
import { TrackListDetailPlaylistProps } from "../utils/types"
import { Link } from "react-router-dom"
import { formatTime } from "../utils/formatTime"
import { PlayerContext } from "../context/PlayerContext"

const TrackListDetailPlaylist: React.FC<TrackListDetailPlaylistProps> = ({ items }) => {

  const { setSongId, setIconPlay } = useContext(PlayerContext)

  return (
    <div>
      {
        items.map((e: any, i:any) => {
          return (
            <div
              className={"flex items-center p-2 rounded-lg hover:bg-[color:var(--color-secondary-bg)] transition-all duration-300 " + (e.streamingStatus === 1 ? "cursor-pointer" : "cursor-default hover:bg-current")}
              onClick={() => {
                if(e.streamingStatus === 1) {
                  setSongId(e.encodeId)
                  setIconPlay(true)
                }
              }}
            >
              {/* Thumbnail */}
              <img className="rounded-lg w-[46px] h-[46px] mr-5" src={e.thumbnail} alt={e.title} />
              {/* End Thumbnail */}
              {/* Title & Artist */}
              <div className="flex flex-1 flex-col">
                {/* Title */}
                <div className="text-[color:var(--color-text)] text-lg font-semibold truncate">{e.title}</div>
                {/* Artist */}
                <div className="mt-[2px] text-[color:var(--color-text)] text-sm opacity-70 truncate">
                  {
                    (e.artists || []).filter((element: any) => { return element !== undefined }).map((eArtist: any, iArtist: any) => {
                      return (
                        <>
                          {
                            (iArtist > 0) ? (<span>, </span>) : ("")
                          }
                          <Link
                            className="hover:underline"
                            to={`/artist/${eArtist.alias}`}
                          >
                            {eArtist.name}
                          </Link>
                        </>
                      )
                    })
                  }
                </div>
                {/* End Artist */}
              </div>
              {/* End Title & Artist */}

              {/* Show Song VIP */}
              <div className="text-yellow-500 font-medium mr-4">{(e.streamingStatus === 1 ? "" : "VIP")}</div>
              {/* End Show Song VIP */}

              {/* Show Time Deration */}
              <div className="text-[color:var(--color-text)] font-medium">{formatTime(e.duration)}</div>
              {/* End Show Time Deration */}
            </div>
          )
        })
      }
    </div>
  )
}

export default TrackListDetailPlaylist